import { useEffect } from "react";
import * as THREE from "three";

export function useThreeScene(containerRef) {
    useEffect(() => {
        if (!containerRef.current) return;

        // === Cena ===
        const scene = new THREE.Scene();
        scene.background = null;

        // === Câmera ===
        const camera = new THREE.PerspectiveCamera(
            75,
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 50, 150); // fica olhando de cima e mais atrás

        // === Renderizador ===
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(
            containerRef.current.clientWidth,
            containerRef.current.clientHeight
        );

        // Garante que o canvas fique como fundo
        renderer.domElement.style.position = "absolute";
        renderer.domElement.style.top = "0";
        renderer.domElement.style.left = "0";
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        renderer.domElement.style.zIndex = "0";

        containerRef.current.appendChild(renderer.domElement);

        // === OrbitControls ===
        // const controls = new OrbitControls(camera, renderer.domElement);
        // controls.enableDamping = true;
        // controls.dampingFactor = 0.05;
        // controls.minDistance = 50;
        // controls.maxDistance = 500;
        // controls.maxPolarAngle = Math.PI / 2;
        // controls.target.set(0, 40, 0);

        // === Geometria e material ===
        const geometry = new THREE.PlaneGeometry(600, 500, 40, 40); //tamanho e quantidade de linhas//
        const material = new THREE.MeshBasicMaterial({
            color: 0xB3B3B3,
            wireframe: true,
        });

        // === Plano principal (chão) ===
        const plane = new THREE.Mesh(geometry, material);
        plane.rotation.x = -Math.PI / 2; // deita o plano no chão
        scene.add(plane);

        // === Offsets aleatórios ===
        const offsets = [];
        const count = geometry.attributes.position.count;
        for (let i = 0; i < count; i++) {
            offsets.push((Math.random() - 0.5) * 3);
        }

        // === Plano espelhado acima ===
        const mirror = plane.clone();
        mirror.position.y = 90;     // move pra cima (agora o eixo Y é "cima")
        mirror.scale.y = -1;         // espelha verticalmente
        scene.add(mirror);

        // === Animação das ondas ===
        const clock = new THREE.Clock();
        function animate() {
            const t = clock.getElapsedTime();
            const positions = geometry.attributes.position;
            const mirrorPositions = mirror.geometry.attributes.position;

            for (let i = 0; i < count; i++) {
                const x = positions.getX(i);
                const y = positions.getY(i);
                const wave = Math.sin(x / 6 + t) * Math.cos(y / 10 + t) * 10 + offsets[i];
                positions.setZ(i, wave);
                mirrorPositions.setZ(i, wave);
            }

            positions.needsUpdate = true;
            mirrorPositions.needsUpdate = true;

            // controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        animate();

        // === Responsividade ===
        const handleResize = () => {
            if (!containerRef.current) return;
            camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, [])
}