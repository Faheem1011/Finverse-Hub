'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function InteractiveScene() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // --- Scene Setup ---
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#011627'); // Deep Navy
        // Add subtle fog to blend edges
        scene.fog = new THREE.Fog('#011627', 5, 15);

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 8;
        camera.position.y = 2;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // --- Main Object: The "Hub" Globe ---
        const geometry = new THREE.IcosahedronGeometry(2.5, 2); // Detailed sphere

        // Wireframe Material (White)
        const wireframeMaterial = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true,
            transparent: true,
            opacity: 0.15
        });
        const globeWireframe = new THREE.Mesh(geometry, wireframeMaterial);
        scene.add(globeWireframe);

        // Glowing Points on Vertices
        const pointsMaterial = new THREE.PointsMaterial({
            color: 0x00F2FF, // Cyan
            size: 0.05,
            transparent: true,
            opacity: 0.8
        });
        const globePoints = new THREE.Points(geometry, pointsMaterial);
        scene.add(globePoints);

        // --- Orbital Particles ---
        const particlesGeo = new THREE.BufferGeometry();
        const particleCount = 1000;
        const posArray = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 15;
        }

        particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMat = new THREE.PointsMaterial({
            size: 0.02,
            color: 0x00F2FF, // Cyan particles
            transparent: true,
            opacity: 0.5
        });
        const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
        scene.add(particlesMesh);

        // --- Lighting ---
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x00F2FF, 2); // Cyan Light
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const blueLight = new THREE.PointLight(0x3b82f6, 2);
        blueLight.position.set(-5, -5, 5);
        scene.add(blueLight);


        // --- Interaction State ---
        let mouseX = 0;
        let mouseY = 0;

        const onMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', onMouseMove);

        // --- Animation Loop ---
        const clock = new THREE.Clock();

        const animate = () => {
            requestAnimationFrame(animate);

            const delta = clock.getDelta();
            const time = clock.getElapsedTime();

            // Rotate Globe (Constant Spin + Mouse Reaction)
            globeWireframe.rotation.y += delta * 0.1;
            globePoints.rotation.y += delta * 0.1;

            // Mouse-driven Tilt (X and Z axis)
            const targetRotX = mouseY * 0.3;
            const targetRotZ = -mouseX * 0.2;

            globeWireframe.rotation.x += (targetRotX - globeWireframe.rotation.x) * 0.05;
            globeWireframe.rotation.z += (targetRotZ - globeWireframe.rotation.z) * 0.05;

            // Sync Points with Wireframe
            globePoints.rotation.x = globeWireframe.rotation.x;
            globePoints.rotation.z = globeWireframe.rotation.z;

            // Rotate Particles (Enhanced Reactivity)
            particlesMesh.rotation.y = time * 0.05 + mouseX * 0.1;
            particlesMesh.rotation.x += (mouseY * 0.1 - particlesMesh.rotation.x) * 0.05;

            // Mouse Parallax for Camera
            const targetX = mouseX * 0.5;
            const targetY = mouseY * 0.5 + 2; // Offset Y

            camera.position.x += (targetX - camera.position.x) * 0.05;
            camera.position.y += (targetY - camera.position.y) * 0.05;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
        };

        animate();

        // --- Resize Handler ---
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', onMouseMove);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            particlesGeo.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={containerRef} className="absolute inset-0 z-0 bg-black" />;
}
