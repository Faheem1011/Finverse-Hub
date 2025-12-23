"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

export default function ReactiveSphere() {
    const containerRef = useRef<HTMLDivElement>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const planetRef = useRef<THREE.Group | null>(null);
    const particlesRef = useRef<THREE.Points | null>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const targetRot = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Camera
        const camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 6;
        cameraRef.current = camera;

        // Renderer with transparency
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Load custom planet model
        const loader = new OBJLoader();
        const planetGroup = new THREE.Group();
        scene.add(planetGroup);
        planetRef.current = planetGroup;

        loader.load(
            '/planet/Untitled0000.obj',
            (object) => {
                // Scale and position the loaded model
                object.scale.set(0.02, 0.02, 0.02); // Adjust scale as needed

                // Apply cyan wireframe material to the model
                object.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        // Create wireframe from the mesh geometry
                        const wireframeGeometry = new THREE.WireframeGeometry(child.geometry);
                        const wireframeMaterial = new THREE.LineBasicMaterial({
                            color: 0x00f2ff,
                            transparent: true,
                            opacity: 0.7,
                            linewidth: 1,
                        });
                        const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
                        planetGroup.add(wireframe);

                        // Add glow effect
                        const glowMaterial = new THREE.MeshBasicMaterial({
                            color: 0x00f2ff,
                            transparent: true,
                            opacity: 0.15,
                            side: THREE.DoubleSide,
                        });
                        const glowMesh = new THREE.Mesh(child.geometry, glowMaterial);
                        planetGroup.add(glowMesh);
                    }
                });
            },
            (progress) => {
                console.log('Loading planet:', (progress.loaded / progress.total * 100).toFixed(2) + '%');
            },
            (error) => {
                console.error('Error loading planet model:', error);
                // Fallback to simple sphere if model fails to load
                const geometry = new THREE.IcosahedronGeometry(2, 2);
                const edges = new THREE.EdgesGeometry(geometry);
                const material = new THREE.LineBasicMaterial({
                    color: 0x00f2ff,
                    transparent: true,
                    opacity: 0.6,
                });
                const wireframe = new THREE.LineSegments(edges, material);
                planetGroup.add(wireframe);
            }
        );

        // Floating particles
        const particleCount = 50;
        const particlePositions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            const radius = 3 + Math.random() * 2;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;

            particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            particlePositions[i * 3 + 2] = radius * Math.cos(phi);
        }

        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(particlePositions, 3)
        );
        const particleMaterial = new THREE.PointsMaterial({
            size: 0.05,
            color: 0xffffff,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true,
        });
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);
        particlesRef.current = particles;

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0x00f2ff, 1, 100);
        pointLight1.position.set(10, 10, 10);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x00f2ff, 0.5, 100);
        pointLight2.position.set(-10, -10, 5);
        scene.add(pointLight2);

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            };
        };

        // Resize handler
        const handleResize = () => {
            if (!camera || !renderer) return;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        // Animation loop
        let animationId: number;
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            if (planetRef.current) {
                // Auto rotation
                planetRef.current.rotation.y += 0.003;
                planetRef.current.rotation.x += 0.001;

                // Mouse reactivity with smooth lerp
                targetRot.current.y = mousePos.current.x * 0.3;
                targetRot.current.x = -mousePos.current.y * 0.3;

                planetRef.current.rotation.y +=
                    (targetRot.current.y - planetRef.current.rotation.y) * 0.05;
                planetRef.current.rotation.x +=
                    (targetRot.current.x - planetRef.current.rotation.x) * 0.05;
            }

            if (particlesRef.current) {
                particlesRef.current.rotation.y += 0.0005;
            }

            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);

            particleGeometry.dispose();
            particleMaterial.dispose();

            renderer.dispose();
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
}
