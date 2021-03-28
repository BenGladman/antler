// based on https://codesandbox.io/s/r3f-volumetric-light-w633u
// model by https://sketchfab.com/ncassab
// https://sketchfab.com/3d-models/deerhead-faceted-8b578418eab44647b7f543eb0966b628

import React, { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";
import { Deerhead } from "./Deerhead";
import { AdditiveBlendingShader, VolumetricLightShader } from "./shaders";

extend({ EffectComposer, RenderPass, ShaderPass });

const DEFAULT_LAYER = 0;
const OCCLUSION_LAYER = 1;

function Effects() {
  const { gl, scene, camera, size } = useThree();
  const occlusionRenderTarget = useMemo(
    () => new THREE.WebGLRenderTarget(0, 0),
    []
  );
  const occlusionComposer = useRef<EffectComposer>(null);
  const composer = useRef<EffectComposer>(null);

  useEffect(() => {
    occlusionComposer.current!.setSize(size.width, size.height);
    composer.current!.setSize(size.width, size.height);
  }, [size]);

  useFrame(() => {
    camera.layers.set(OCCLUSION_LAYER);
    occlusionComposer.current!.render();
    camera.layers.set(DEFAULT_LAYER);
    composer.current!.render();
  }, 1);

  return (
    <>
      <mesh layers={[OCCLUSION_LAYER]} position={[0, 0, -10]}>
        <sphereBufferGeometry args={[5, 32, 32]} />
        <meshBasicMaterial />
      </mesh>
      <effectComposer
        ref={occlusionComposer}
        args={[gl, occlusionRenderTarget]}
        renderToScreen={false}
      >
        <renderPass attachArray="passes" args={[scene, camera]} />
        <shaderPass
          attachArray="passes"
          args={[VolumetricLightShader]}
          needsSwap={false}
        />
      </effectComposer>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" args={[scene, camera]} />
        <shaderPass
          attachArray="passes"
          args={[AdditiveBlendingShader]}
          uniforms-tAdd-value={occlusionRenderTarget.texture}
        />
        <shaderPass
          attachArray="passes"
          args={[FXAAShader]}
          uniforms-resolution-value={[1 / size.width, 1 / size.height]}
          renderToScreen
        />
      </effectComposer>
    </>
  );
}

function Rotating() {
  const defaultMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#2a2a2a"),
        roughness: 1,
        metalness: 0.9,
      }),
    []
  );

  const occlusionMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("black"),
      }),
    []
  );

  const group = useRef<THREE.Group>(null);
  // useFrame(() => (group.current!.rotation.y += 0.004));
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      group.current!.rotation.y = e.pageX / window.innerWidth - 0.5;
    };
    document.addEventListener("mousemove", listener);
    return () => document.removeEventListener("mousemove", listener);
  }, []);

  return (
    <group ref={group}>
      <Deerhead layer={DEFAULT_LAYER} material={defaultMaterial} />
      <Deerhead layer={OCCLUSION_LAYER} material={occlusionMaterial} />
    </group>
  );
}

export function Scene() {
  return (
    <Canvas
      shadowMap
      style={{ background: "#171717" }}
      camera={{ position: [0, 0, 12], fov: 50 }}
      gl={{ antialias: false }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 60, -100]} intensity={20} />
      <pointLight position={[-50, 0, -50]} intensity={2} />
      <spotLight
        castShadow
        intensity={8}
        angle={Math.PI / 10}
        position={[10, 10, 10]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <mesh position={[0, 0, -10]}>
        <sphereBufferGeometry args={[4.9, 32, 32]} />
        <meshBasicMaterial transparent opacity={0.5} />
      </mesh>
      <Suspense fallback={null}>
        <Rotating />
      </Suspense>
      <Effects />
    </Canvas>
  );
}
