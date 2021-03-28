import type { ReactThreeFiber } from "@react-three/fiber";
import type { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import type { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import type { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";

declare module "*.glb" {
  const path: string;
  export default path;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      effectComposer: ReactThreeFiber.Node<
        EffectComposer,
        typeof EffectComposer
      >;
      renderPass: ReactThreeFiber.Node<RenderPass, typeof RenderPass>;
      shaderPass: ReactThreeFiber.Node<ShaderPass, typeof ShaderPass>;
    }
  }
}
