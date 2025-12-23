"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function HologramPlanet() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        // CONFIG - Adjusted for text-sized display
        const CONFIG = {
            radius: 0.65, // Smaller for text-sized display
            atmosphere: 1.22,
            idleSpin: 0.10,
            hoverInfluence: 0.85,
            hoverEase: 0.08,
            settleEase: 0.06,
            bloomishGlow: 0.70,
            mapURL: 'https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg',
            alphaBackground: true,
            maxDPR: 2,
            gridMeridians: 14,
            gridParallels: 10,
            gridOpacity: 0.20,
            gridThickness: 1,
            cameraZ: 2.5 // Closer camera for text-sized view
        };

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: CONFIG.alphaBackground,
            powerPreference: 'high-performance'
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, CONFIG.maxDPR));
        renderer.setSize(el.clientWidth, el.clientHeight);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        el.appendChild(renderer.domElement);

        // Scene
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x05070d, 0.12);

        // Camera
        const camera = new THREE.PerspectiveCamera(45, el.clientWidth / el.clientHeight, 0.1, 100);
        camera.position.set(0, 0.12, CONFIG.cameraZ);

        // Lights
        const key = new THREE.DirectionalLight(0xffffff, 0.55);
        key.position.set(3, 2, 4);
        scene.add(key);

        const rim = new THREE.DirectionalLight(new THREE.Color('rgb(0,255,220)'), 0.55);
        rim.position.set(-4, 1.5, -2);
        scene.add(rim);

        // Texture loader
        const loader = new THREE.TextureLoader();

        const makeFallbackTexture = () => {
            const data = new Uint8Array([140, 140, 140, 255]);
            const tex = new THREE.DataTexture(data, 1, 1);
            tex.colorSpace = THREE.SRGBColorSpace;
            tex.needsUpdate = true;
            return tex;
        };

        let mapTex = makeFallbackTexture();

        loader.load(
            CONFIG.mapURL,
            (t) => {
                t.colorSpace = THREE.SRGBColorSpace;
                t.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
                t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
                mapTex = t;
                hologramMat.uniforms.uMap.value = t;
            }
        );

        // MATERIALS - Hologram shader
        const hologramMat = new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            uniforms: {
                uTime: { value: 0 },
                uMap: { value: mapTex },
                uAccent: { value: new THREE.Color('rgb(0,255,220)') },
                uAccent2: { value: new THREE.Color('rgb(120,120,255)') },
                uOpacity: { value: 0.82 },
                uGlow: { value: CONFIG.bloomishGlow },
            },
            vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        void main(){
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
            fragmentShader: `
        precision highp float;
        varying vec2 vUv;
        varying vec3 vNormal;
        uniform float uTime;
        uniform sampler2D uMap;
        uniform vec3 uAccent;
        uniform vec3 uAccent2;
        uniform float uOpacity;
        uniform float uGlow;

        float hash(vec2 p){
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }

        float noise(vec2 p){
          vec2 i = floor(p);
          vec2 f = fract(p);
          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));
          vec2 u = f*f*(3.0-2.0*f);
          return mix(a, b, u.x) + (c - a)*u.y*(1.0-u.x) + (d - b)*u.x*u.y;
        }

        void main(){
          vec3 tex = texture2D(uMap, vUv).rgb;
          float lum = dot(tex, vec3(0.2126, 0.7152, 0.0722));

          float scan = sin((vUv.y * 560.0) + (uTime * 5.4)) * 0.5 + 0.5;
          scan = smoothstep(0.60, 0.98, scan);

          float sweep = sin((vUv.y * 5.0) - (uTime * 1.2)) * 0.5 + 0.5;
          sweep = smoothstep(0.70, 0.95, sweep);

          float fres = pow(1.0 - max(dot(normalize(vNormal), vec3(0.0,0.0,1.0)), 0.0), 2.3);

          float n = noise(vUv * 12.0 + uTime * 0.07);
          float flicker = 0.90 + 0.18 * sin(uTime * 2.7 + n * 6.2831);

          vec3 base = mix(uAccent2, uAccent, smoothstep(0.12, 0.78, lum));

          float alpha = uOpacity;
          alpha *= (0.55 + 0.45 * smoothstep(0.20, 0.90, lum));
          alpha *= (0.70 + 0.30 * scan);
          alpha *= (0.75 + 0.25 * sweep);
          alpha *= flicker;

          vec3 color = base;
          color += fres * uGlow * uAccent;
          color *= (0.62 + 0.38 * scan);

          gl_FragColor = vec4(color, alpha);
        }
      `
        });

        const atmosphereMat = new THREE.ShaderMaterial({
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            uniforms: {
                uTime: { value: 0 },
                uColor: { value: new THREE.Color('rgb(0,255,220)') },
                uColor2: { value: new THREE.Color('rgb(120,120,255)') },
            },
            vertexShader: `
        varying vec3 vNormal;
        void main(){
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
            fragmentShader: `
        precision highp float;
        varying vec3 vNormal;
        uniform float uTime;
        uniform vec3 uColor;
        uniform vec3 uColor2;
        void main(){
          float fres = pow(1.0 - abs(dot(vNormal, vec3(0.0,0.0,1.0))), 3.1);
          float pulse = 0.86 + 0.14 * sin(uTime * 1.5);
          vec3 col = mix(uColor2, uColor, fres);
          gl_FragColor = vec4(col, fres * 0.50 * pulse);
        }
      `
        });

        // GEOMETRY + OBJECTS
        const group = new THREE.Group();
        scene.add(group);

        const sphereGeo = new THREE.SphereGeometry(CONFIG.radius, 96, 96);
        const planet = new THREE.Mesh(sphereGeo, hologramMat);
        group.add(planet);

        const atmoGeo = new THREE.SphereGeometry(CONFIG.radius * CONFIG.atmosphere, 96, 96);
        const atmo = new THREE.Mesh(atmoGeo, atmosphereMat);
        group.add(atmo);

        // Lat/Long grid lines
        const buildLatLongLines = (radius: number, meridians: number, parallels: number) => {
            const positions: number[] = [];
            const addLine = (points: THREE.Vector3[]) => {
                for (let i = 0; i < points.length - 1; i++) {
                    const a = points[i];
                    const b = points[i + 1];
                    positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
                }
            };

            const segments = 180;

            for (let m = 0; m < meridians; m++) {
                const lon = (m / meridians) * Math.PI * 2;
                const pts: THREE.Vector3[] = [];
                for (let s = 0; s <= segments; s++) {
                    const v = (s / segments) * Math.PI;
                    const x = radius * Math.sin(v) * Math.cos(lon);
                    const y = radius * Math.cos(v);
                    const z = radius * Math.sin(v) * Math.sin(lon);
                    pts.push(new THREE.Vector3(x, y, z));
                }
                addLine(pts);
            }

            for (let p = 1; p <= parallels; p++) {
                const lat = (p / (parallels + 1)) * Math.PI - (Math.PI / 2);
                const y = radius * Math.sin(lat);
                const r = radius * Math.cos(lat);
                const pts: THREE.Vector3[] = [];
                for (let s = 0; s <= segments; s++) {
                    const a = (s / segments) * Math.PI * 2;
                    const x = r * Math.cos(a);
                    const z = r * Math.sin(a);
                    pts.push(new THREE.Vector3(x, y, z));
                }
                addLine(pts);
            }

            const g = new THREE.BufferGeometry();
            g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            return g;
        };

        const gridGeo = buildLatLongLines(CONFIG.radius * 1.004, CONFIG.gridMeridians, CONFIG.gridParallels);
        const gridMat = new THREE.LineBasicMaterial({
            color: new THREE.Color('rgb(0,255,220)'),
            transparent: true,
            opacity: CONFIG.gridOpacity,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        const grid = new THREE.LineSegments(gridGeo, gridMat);
        group.add(grid);

        // Star particles - visible starfield
        const particleCount = 1000; // More stars for prominent effect
        const pGeo = new THREE.BufferGeometry();
        const pos = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            const r = 2.0 + Math.random() * 6.0; // Spread around planet
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            pos[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.cos(phi);
            pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
        }
        pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        const pMat = new THREE.PointsMaterial({
            size: 0.018, // Larger stars
            transparent: true,
            opacity: 0.7, // Very visible
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            color: new THREE.Color('rgb(180,200,255)') // Bright blue-white
        });
        const particles = new THREE.Points(pGeo, pMat);
        scene.add(particles);

        // Controls (disabled but used for damping)
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.enableRotate = false;
        controls.enableDamping = true;
        controls.dampingFactor = 0.06;

        // HOVER + CURSOR REACTIVITY
        const state = {
            hovered: false,
            nx: 0,
            ny: 0,
            hoverRX: 0,
            hoverRY: 0,
            baseSpin: 0
        };

        const updateNormalizedFromEvent = (ev: PointerEvent) => {
            const rect = el.getBoundingClientRect();
            const x = (ev.clientX - rect.left) / rect.width;
            const y = (ev.clientY - rect.top) / rect.height;
            state.nx = (x * 2) - 1;
            state.ny = -((y * 2) - 1);
        };

        const onEnter = (ev: PointerEvent) => {
            state.hovered = true;
            updateNormalizedFromEvent(ev);
        };

        const onMove = (ev: PointerEvent) => {
            if (!state.hovered) return;
            updateNormalizedFromEvent(ev);
        };

        const onLeave = () => {
            state.hovered = false;
        };

        el.addEventListener('pointerenter', onEnter as any);
        el.addEventListener('pointermove', onMove as any);
        el.addEventListener('pointerleave', onLeave);

        // ANIMATION LOOP
        const clock = new THREE.Clock();

        const animate = () => {
            const t = clock.getElapsedTime();
            const dt = clock.getDelta();

            hologramMat.uniforms.uTime.value = t;
            atmosphereMat.uniforms.uTime.value = t;

            state.baseSpin += dt * CONFIG.idleSpin;

            const targetRY = state.hovered ? (state.nx * CONFIG.hoverInfluence) : 0;
            const targetRX = state.hovered ? (state.ny * CONFIG.hoverInfluence) : 0;

            const ease = state.hovered ? CONFIG.hoverEase : CONFIG.settleEase;
            state.hoverRY += (targetRY - state.hoverRY) * ease;
            state.hoverRX += (targetRX - state.hoverRX) * ease;

            group.rotation.y = state.baseSpin + (state.hoverRY * 0.75);
            group.rotation.x = (state.hoverRX * 0.45);

            atmo.scale.setScalar(1.0 + 0.010 * Math.sin(t * 1.2));
            gridMat.opacity = CONFIG.gridOpacity * (0.80 + 0.20 * Math.sin(t * 1.6));

            particles.rotation.y += dt * 0.018;

            controls.update();
            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        };

        let animationFrameId = requestAnimationFrame(animate);

        // RESIZE
        const handleResize = () => {
            const w = el.clientWidth;
            const h = el.clientHeight;
            if (w <= 0 || h <= 0) return;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h, false);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, CONFIG.maxDPR));
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            el.removeEventListener('pointerenter', onEnter as any);
            el.removeEventListener('pointermove', onMove as any);
            el.removeEventListener('pointerleave', onLeave);

            controls.dispose();
            sphereGeo.dispose();
            atmoGeo.dispose();
            gridGeo.dispose();
            hologramMat.dispose();
            atmosphereMat.dispose();
            gridMat.dispose();
            pGeo.dispose();
            pMat.dispose();

            renderer.dispose();
            if (renderer.domElement?.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-auto"
            style={{
                zIndex: 0,
                background: 'radial-gradient(ellipse 800px 400px at 50% 50%, rgba(0,255,220,0.08), transparent 60%)'
            }}
        />
    );
}
