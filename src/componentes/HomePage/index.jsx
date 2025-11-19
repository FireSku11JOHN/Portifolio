import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Button } from "../Button";
import LinkedinIcon from "../../assets/Icons/Linkedin.svg";
import GitHubIcon from "../../assets/Icons/GitHub.svg";
import Photo from "../../assets/Icons/Photo.svg";
import {SOCIAL_LINKS} from "../../constants/socials"


export const HomePage = () => {
    const mountRef = useRef();
    const disable3D = false

    if (disable3D){
        useEffect(() => {
            if (!mountRef.current) return;

            // === Cena ===
            const scene = new THREE.Scene();
            scene.background = null;

            // === Câmera ===
            const camera = new THREE.PerspectiveCamera(
                75,
                mountRef.current.clientWidth / mountRef.current.clientHeight,
                0.1,
                1000
            );
            camera.position.set(0, 50, 150); // fica olhando de cima e mais atrás

            // === Renderizador ===
            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(
                mountRef.current.clientWidth,
                mountRef.current.clientHeight
            );

            // Garante que o canvas fique como fundo
            renderer.domElement.style.position = "absolute";
            renderer.domElement.style.top = "0";
            renderer.domElement.style.left = "0";
            renderer.domElement.style.width = "100%";
            renderer.domElement.style.height = "100%";
            renderer.domElement.style.zIndex = "0";

            mountRef.current.appendChild(renderer.domElement);

            // === OrbitControls ===
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.minDistance = 50;
            controls.maxDistance = 500;
            controls.maxPolarAngle = Math.PI / 2;
            controls.target.set(0, 40, 0);

            // === Geometria e material ===
            const geometry = new THREE.PlaneGeometry(600, 500, 50, 50);
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

                controls.update();
                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            }

            animate();

            // === Responsividade ===
            const handleResize = () => {
                if (!mountRef.current) return;
                camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
            };

            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
                if (mountRef.current && renderer.domElement) {
                    mountRef.current.removeChild(renderer.domElement);
                }
                renderer.dispose();
                geometry.dispose();
                material.dispose();
            };
        }, []);
    }

    return (
        <div ref={mountRef} className="relative flex items-center w-full h-screen overflow-hidden
            bg-linear-to-t from-cyan via-light-cyan to-cyan">
            {/* Elemento 3D aqui */}
            <div className="absolute gap-2 inset-0 flex justify-between items-center mx-16 z-10 max-xs:flex-col max-xs:justify-center max-xs:mx-6">

                <div className="flex flex-col bg-dark-trans gap-8 p-6 text-light h-fit w-fit rounded-lg max-ls:gap-4">
                    <h1 className="text-[32px] font-semibold max-mobile:text-[26px]">John Ávylan</h1>
                    <p className="text-[26px] font-medium max-mobile:text-[20px]">Desenvolvedor Front-End</p>
                    <div className="inline-flex gap-8 max-mobile:gap-4 ">
                        <Button 
                            text="LinkedIn"
                            icon={LinkedinIcon}
                            link={SOCIAL_LINKS.linkedin}
                        />
                        <Button
                            text="GitHub"
                            icon={GitHubIcon}
                            link={SOCIAL_LINKS.github}
                            addClass="border border-white text-light bg-transparent "
                        />
                    </div>
                </div>
                <div className="max-xs:hidden ">
                    <img src={Photo} alt="" />
                </div>

            </div>
        </div>
    );
};
