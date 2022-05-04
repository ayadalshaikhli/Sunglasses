// import { Canvas, useLoader, useFrame } from "@react-three/fiber";
// import React, { Suspense, useRef, useState, useEffect } from "react";
// import {
//   Environment,
//   Html,
//   PerspectiveCamera,
//   useGLTF,
// } from "@react-three/drei";
// import { Section } from "./section";
// import * as THREE from "three";
// import { proxy, useSnapshot } from "valtio";
// import { gsap, Expo } from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// const color = new THREE.Color();
// const tl = gsap.timeline({
//   defaults: { ease: "power1.out" },
// });

// export default function Hero({ products }) {
//   useEffect(() => {
//     const parameters = {
//       materialColor: "#ffeded",
//     };

//     /**
//      * Base
//      */
//     // Canvas
//     const canvas = document.querySelector("canvas.webgl");

//     // Scene
//     const scene = new THREE.Scene();

//     /**
//      * Test cube
//      */

//     // Particles

//     const objectsDistance = 4;
//     const particalesCount = 200;
//     const positions = new Float32Array(particalesCount * 3);

//     const textureLoader = new THREE.TextureLoader();
//     const gradiantTexture = textureLoader.load("textures/gradients/3.jpg");
//     gradiantTexture.magFilter = THREE.NearestFilter;
//     const material = new THREE.MeshToonMaterial({
//       color: parameters.materialColor,
//       gradientMap: gradiantTexture,
//     });

//     const mesh1 = new THREE.Mesh(
//       new THREE.TorusGeometry(1, 0.4, 16, 60),
//       material
//     );
//     const mesh2 = new THREE.Mesh(new THREE.ConeGeometry(1, 2, 32), material);
//     const mesh3 = new THREE.Mesh(
//       new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
//       material
//     );

//     const sectionMeshes = [mesh1, mesh2, mesh3];
//     mesh1.position.y = -objectsDistance * 0;
//     mesh2.position.y = -objectsDistance * 1;
//     mesh3.position.y = -objectsDistance * 2;

//     mesh1.position.x = 2;
//     mesh2.position.x = -2;
//     mesh3.position.x = 2;

//     scene.add(mesh1, mesh2, mesh3);

//     for (let i = 0; i < particalesCount; i++) {
//       positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
//       positions[i * 3 + 1] =
//         objectsDistance * 0.5 -
//         Math.random() * objectsDistance * sectionMeshes.length;
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
//     }

//     const particlesGeometry = new THREE.BufferGeometry();
//     particlesGeometry.setAttribute(
//       "position",
//       new THREE.BufferAttribute(positions, 3)
//     );

//     const particalesMaterial = new THREE.PointsMaterial({
//       color: parameters.materialColor,
//       sizeAttenuation: true,
//       size: 0.03,
//     });

//     const particles = new THREE.Points(particlesGeometry, particalesMaterial);
//     scene.add(particles);

//     // Lights

//     const directionalLight = new THREE.DirectionalLight("#ffffff", 1);
//     directionalLight.position.set(1, 1, 0);
//     scene.add(directionalLight);

//     /**
//      * Sizes
//      */
//     const sizes = {
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };

//     window.addEventListener("resize", () => {
//       // Update sizes
//       sizes.width = window.innerWidth;
//       sizes.height = window.innerHeight;

//       // Update camera
//       camera.aspect = sizes.width / sizes.height;
//       camera.updateProjectionMatrix();

//       // Update renderer
//       renderer.setSize(sizes.width, sizes.height);
//       renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     });

//     // Camera group

//     const cameraGroup = new THREE.Group();
//     scene.add(cameraGroup);

//     /**
//      * Camera
//      */
//     // Base camera
//     const camera = new THREE.PerspectiveCamera(
//       35,
//       sizes.width / sizes.height,
//       0.1,
//       100
//     );
//     camera.position.z = 6;
//     scene.add(camera);
//     cameraGroup.add(camera);

//     /**
//      * Renderer
//      */
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvas,
//       alpha: true,
//     });
//     renderer.setSize(sizes.width, sizes.height);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//     // Scroll

//     let scrollY = window.scrollY;

//     let currentSection = 0;

//     window.addEventListener("scroll", () => {
//       scrollY = window.scrollY;

//       const newSection = Math.round(scrollY / sizes.height);

//       if (newSection != currentSection) {
//         currentSection = newSection;

//         gsap.to(sectionMeshes[currentSection].rotation, {
//           duration: 1.5,
//           ease: "power2.inOut",
//           x: "+=6",
//           y: "+=2",
//           z: "+=1.5",
//         });
//         gsap.to(sectionMeshes[currentSection].position, {
//           duration: 1.5,
//           ease: "power2.inOut",
//         });
//       }
//     });

//     const cursor = {};
//     cursor.x = 0;
//     cursor.y = 0;

//     window.addEventListener("mousemove", (event) => {
//       cursor.x = event.clientX / sizes.width - 0.5;
//       cursor.y = event.clientY / sizes.height - 0.5;

//       console.log(cursor.y);
//     });
//     /**
//      * Animate
//      */
//     const clock = new THREE.Clock();
//     let previousTime = 0;

//     const tick = () => {
//       const elapsedTime = clock.getElapsedTime();
//       const deltaTime = elapsedTime - previousTime;
//       previousTime = elapsedTime;

//       for (const mesh of sectionMeshes) {
//         mesh.rotation.x += deltaTime * 0.1;
//         mesh.rotation.y += deltaTime * 0.12;
//       }

//       camera.position.y = (-scrollY / sizes.height) * objectsDistance;

//       const paralaxX = cursor.x * 0.5;
//       const paralaxY = -cursor.y * 0.5;
//       cameraGroup.position.x +=
//         (paralaxX - cameraGroup.position.x) * 2 * deltaTime;
//       cameraGroup.position.y +=
//         (paralaxY - cameraGroup.position.y) * 2 * deltaTime;
//       // Render
//       renderer.render(scene, camera);

//       // Call tick again on the next frame
//       window.requestAnimationFrame(tick);
//     };

//     tick();
//   }, []);
//   return (
//     <>
//       <canvas
//         style={{
//           width: "100%",
//           height: "100%",
//         }}
//         class="webgl fixed top-0 left-0 outline-none"
//       >
//         <section class="section">
//           <h1>My Portfolio</h1>
//         </section>
//         <section class="section">
//           <h2>My projects</h2>
//         </section>
//         <section class="section">
//           <h2>Contact me</h2>
//         </section>
//       </canvas>
//     </>
//   );
// }

// useGLTF.preload("/ringGreend.glb");
