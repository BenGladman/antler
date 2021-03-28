import{u as e,C as t,G as n,V as r,a,b as o,W as s,c as i,F as l,M as c,d as m,e as u,f as d,E as f,R as v,S as p,g as h}from"./vendor.404c9bc9.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,o)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return n(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){o(new Error(`Failed to import: ${e}`)),a(l)},onload(){n(self[t].moduleMap[s]),a(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/assets/");function g({layer:r,material:a}){const o=e(n,"/assets/deerhead.4f645de0.glb").nodes.mesh_0;return t.createElement("group",{rotation:[-1.8,0,-1.2],position:[0,-7,0]},t.createElement("mesh",{geometry:o.geometry,material:a,layers:[r],receiveShadow:!0,castShadow:!0}))}const y={uniforms:{tDiffuse:{value:null},tAdd:{value:null}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }",fragmentShader:"\n    uniform sampler2D tDiffuse;\n    uniform sampler2D tAdd;\n    varying vec2 vUv;\n    void main() {\n      vec4 color = texture2D( tDiffuse, vUv );\n      vec4 add = texture2D( tAdd, vUv );\n      gl_FragColor = color + add;\n    }"},E={uniforms:{tDiffuse:{value:null},lightPosition:{value:new r(.5,.75)},exposure:{value:.18},decay:{value:.95},density:{value:.75},weight:{value:.4},samples:{value:50}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }",fragmentShader:"\n    varying vec2 vUv;\n    uniform sampler2D tDiffuse;\n    uniform vec2 lightPosition;\n    uniform float exposure;\n    uniform float decay;\n    uniform float density;\n    uniform float weight;\n    uniform int samples;\n    const int MAX_SAMPLES = 100;\n    void main()\n    {\n      vec2 texCoord = vUv;\n      vec2 deltaTextCoord = texCoord - lightPosition;\n      deltaTextCoord *= 1.0 / float(samples) * density;\n      vec4 color = texture2D(tDiffuse, texCoord);\n      float illuminationDecay = 1.0;\n      for(int i=0; i < MAX_SAMPLES; i++) {\n        if(i == samples) break;\n        texCoord -= deltaTextCoord;\n        vec4 tex = texture2D(tDiffuse, texCoord);\n        tex *= illuminationDecay * weight;\n        color += tex;\n        illuminationDecay *= decay;\n      }\n      gl_FragColor = color * exposure;\n    }"};d({EffectComposer:f,RenderPass:v,ShaderPass:p});function w(){const{gl:e,scene:n,camera:r,size:a}=o(),c=t.useMemo((()=>new s(0,0)),[]),m=t.useRef(null),u=t.useRef(null);return t.useEffect((()=>{m.current.setSize(a.width,a.height),u.current.setSize(a.width,a.height)}),[a]),i((()=>{r.layers.set(1),m.current.render(),r.layers.set(0),u.current.render()}),1),t.createElement(t.Fragment,null,t.createElement("mesh",{layers:[1],position:[0,0,-10]},t.createElement("sphereBufferGeometry",{args:[5,32,32]}),t.createElement("meshBasicMaterial",null)),t.createElement("effectComposer",{ref:m,args:[e,c],renderToScreen:!1},t.createElement("renderPass",{attachArray:"passes",args:[n,r]}),t.createElement("shaderPass",{attachArray:"passes",args:[E],needsSwap:!1})),t.createElement("effectComposer",{ref:u,args:[e]},t.createElement("renderPass",{attachArray:"passes",args:[n,r]}),t.createElement("shaderPass",{attachArray:"passes",args:[y],"uniforms-tAdd-value":c.texture}),t.createElement("shaderPass",{attachArray:"passes",args:[l],"uniforms-resolution-value":[1/a.width,1/a.height],renderToScreen:!0})))}function x(){const e=t.useMemo((()=>new c({color:new m("#2a2a2a"),roughness:1,metalness:.9})),[]),n=t.useMemo((()=>new u({color:new m("black")})),[]),r=t.useRef(null);return t.useEffect((()=>{const e=e=>{r.current.rotation.y=e.pageX/window.innerWidth-.5};return document.addEventListener("mousemove",e),()=>document.removeEventListener("mousemove",e)}),[]),t.createElement("group",{ref:r},t.createElement(g,{layer:0,material:e}),t.createElement(g,{layer:1,material:n}))}function M(){return t.createElement(a,{shadowMap:!0,style:{background:"#171717"},camera:{position:[0,0,12],fov:50},gl:{antialias:!1}},t.createElement("ambientLight",{intensity:.5}),t.createElement("pointLight",{position:[0,60,-100],intensity:20}),t.createElement("pointLight",{position:[-50,0,-50],intensity:2}),t.createElement("spotLight",{castShadow:!0,intensity:8,angle:Math.PI/10,position:[10,10,10],"shadow-mapSize-width":2048,"shadow-mapSize-height":2048}),t.createElement("mesh",{position:[0,0,-10]},t.createElement("sphereBufferGeometry",{args:[4.9,32,32]}),t.createElement("meshBasicMaterial",{transparent:!0,opacity:.5})),t.createElement(t.Suspense,{fallback:null},t.createElement(x,null)),t.createElement(w,null))}h.render(t.createElement(t.StrictMode,null,t.createElement(M,null)),document.getElementById("root"));
