import{C as e,u as t,a as n,b as r,c as a,d as o,G as s,V as i,e as l,f as c,W as m,F as u,E as d,R as f,S as v,g as h,h as p}from"./vendor.7e164301.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,o)=>{const s=new URL(e,r);if(self[t].moduleMap[s])return n(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){o(new Error(`Failed to import: ${e}`)),a(l)},onload(){n(self[t].moduleMap[s]),a(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("assets/");const g=e.createContext({x:0,y:0,d:0});function y({children:t}){const n=e.useMemo((()=>({x:0,y:0,d:0})),[]);return e.useEffect((()=>{const e=e=>{n.x=e.clientX/window.innerWidth*2-1,n.y=e.clientY/window.innerHeight*2-1,n.d=Math.sqrt(n.x*n.x+n.y*n.y)};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}),[]),e.createElement(g.Provider,{value:n},t)}function E(){return e.useContext(g)}function x(){const[{position:o}]=t((()=>({from:{position:[0,0,-20]},config:a.molasses}))),s=E();n((()=>{o.start({to:[-10*s.x,-5*s.y,-30*s.d-10]})}));const i=e.createElement("sphereBufferGeometry",{args:[6,32,32]});return e.createElement(r.group,{position:o},e.createElement("mesh",{layers:[0],scale:[.98,.98,.98]},i,e.createElement("meshBasicMaterial",{transparent:!0,opacity:.5,color:"#44f"})),e.createElement("mesh",{layers:[1]},i,e.createElement("meshBasicMaterial",{color:"#acf"})))}function w(){const i=o(s,"./assets/deerhead.4f645de0.glb").nodes.mesh_0,[{rotation:l}]=t((()=>({from:{rotation:[-1.8,0,-1.2]},config:a.slow}))),c=E();return n((()=>{l.start({to:[.1*c.y-1.8,0,.3*c.x-1.2]})})),e.createElement(r.group,{rotation:l,position:[0,-7,0]},e.createElement("mesh",{geometry:i.geometry,layers:[0],receiveShadow:!0,castShadow:!0},e.createElement("meshStandardMaterial",{color:"#555",roughness:1,metalness:.5})),e.createElement("mesh",{geometry:i.geometry,layers:[1],receiveShadow:!0,castShadow:!0},e.createElement("meshBasicMaterial",{color:"#000"})))}const S={uniforms:{tDiffuse:{value:null},tAdd:{value:null}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }",fragmentShader:"\n    uniform sampler2D tDiffuse;\n    uniform sampler2D tAdd;\n    varying vec2 vUv;\n    void main() {\n      vec4 color = texture2D( tDiffuse, vUv );\n      vec4 add = texture2D( tAdd, vUv );\n      gl_FragColor = color + add;\n    }"},M={uniforms:{tDiffuse:{value:null},lightPosition:{value:new i(.5,.75)},exposure:{value:.18},decay:{value:.95},density:{value:.75},weight:{value:.4},samples:{value:50}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }",fragmentShader:"\n    varying vec2 vUv;\n    uniform sampler2D tDiffuse;\n    uniform vec2 lightPosition;\n    uniform float exposure;\n    uniform float decay;\n    uniform float density;\n    uniform float weight;\n    uniform int samples;\n    const int MAX_SAMPLES = 100;\n    void main()\n    {\n      vec2 texCoord = vUv;\n      vec2 deltaTextCoord = texCoord - lightPosition;\n      deltaTextCoord *= 1.0 / float(samples) * density;\n      vec4 color = texture2D(tDiffuse, texCoord);\n      float illuminationDecay = 1.0;\n      for(int i=0; i < MAX_SAMPLES; i++) {\n        if(i == samples) break;\n        texCoord -= deltaTextCoord;\n        vec4 tex = texture2D(tDiffuse, texCoord);\n        tex *= illuminationDecay * weight;\n        color += tex;\n        illuminationDecay *= decay;\n      }\n      gl_FragColor = color * exposure;\n    }"};function C(){const{gl:t,scene:r,camera:a,size:o}=c(),s=e.useMemo((()=>new m(0,0)),[]),i=e.useRef(null),l=e.useRef(null);return e.useEffect((()=>{i.current.setSize(o.width,o.height),l.current.setSize(o.width,o.height)}),[o]),n((()=>{a.layers.set(1),i.current.render(),a.layers.set(0),l.current.render()}),1),e.createElement(e.Fragment,null,e.createElement("effectComposer",{ref:i,args:[t,s],renderToScreen:!1},e.createElement("renderPass",{attachArray:"passes",args:[r,a]}),e.createElement("shaderPass",{attachArray:"passes",args:[M],needsSwap:!1})),e.createElement("effectComposer",{ref:l,args:[t]},e.createElement("renderPass",{attachArray:"passes",args:[r,a]}),e.createElement("shaderPass",{attachArray:"passes",args:[S],"uniforms-tAdd-value":s.texture}),e.createElement("shaderPass",{attachArray:"passes",args:[u],"uniforms-resolution-value":[1/o.width,1/o.height],renderToScreen:!0})))}function D(){return e.createElement(e.Fragment,null,e.createElement("ambientLight",{intensity:.5}),e.createElement("pointLight",{position:[0,60,-100],intensity:20}),e.createElement("pointLight",{position:[-50,0,-50],intensity:2}),e.createElement("spotLight",{castShadow:!0,intensity:8,angle:.31,position:[10,10,10],"shadow-mapSize-width":2048,"shadow-mapSize-height":2048}))}function P(){return e.createElement(h,{shadowMap:!0,style:{background:"#171717"},camera:{position:[0,0,12],fov:50},gl:{antialias:!1}},e.createElement(y,null,e.createElement(D,null),e.createElement(x,null),e.createElement(e.Suspense,{fallback:null},e.createElement(w,null)),e.createElement(C,null)))}l({EffectComposer:d,RenderPass:f,ShaderPass:v}),p.render(e.createElement(e.StrictMode,null,e.createElement(P,null)),document.getElementById("root"));
