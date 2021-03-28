import React, { useEffect, useMemo, useRef } from "react";
import { extend, useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";
import { AdditiveBlendingShader, VolumetricLightShader } from "./shaders";
import { DEFAULT_LAYER, OCCLUSION_LAYER } from "./consts";

extend({ EffectComposer, RenderPass, ShaderPass });

export function Effects() {
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
