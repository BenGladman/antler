import{u as e,a as t,C as n,b as a,c as r,d as o,G as s,M as i,V as l,e as c,W as m,F as u,f as d,E as f,R as p,S as h,g as v,h as g}from"./vendor.75ec3ff0.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,o)=>{const s=new URL(e,a);if(self[t].moduleMap[s])return n(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){o(new Error(`Failed to import: ${e}`)),r(l)},onload(){n(self[t].moduleMap[s]),r(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("assets/");function y(){const[{position:o}]=e((()=>({from:{position:[0,0,-20]},config:r.molasses})));t((({mouse:e})=>{const t=Math.sqrt(e.x*e.x+e.y*e.y);o.start({to:[-10*e.x,-5*e.y,-30*t-10]})}));const s=n.createElement("sphereBufferGeometry",{args:[6,32,32]});return n.createElement(a.group,{position:o},n.createElement("mesh",{layers:[0],scale:[.98,.98,.98]},s,n.createElement("meshBasicMaterial",{transparent:!0,opacity:.5,color:"#44f"})),n.createElement("mesh",{layers:[1]},s,n.createElement("meshBasicMaterial",{color:"#acf"})))}function E(e){return e instanceof i}function x(e){return[Math.random()*e-e/2,Math.random()*e-e/2,Math.random()*e-e/2]}function w({position:t,scale:i}){const l=o(s,"./assets/flower.e70855f9.glb"),[{rotation:c,position:m}]=e((()=>({from:{rotation:x(10),position:[0,8,0]},to:{rotation:x(.2),position:t},delay:1e3,config:r.molasses}))),u=Object.values(l.nodes).filter(E);return u.forEach((e=>e.geometry.computeVertexNormals())),n.createElement(a.group,{rotation:c,position:m,scale:i},n.createElement("group",{rotation:[1.3,0,.2],scale:.05,position:[-2,0,-1]},u.map(((e,t)=>n.createElement("mesh",{key:t,geometry:e.geometry,rotation:e.rotation,position:e.position,scale:e.scale,layers:[0],receiveShadow:!0,castShadow:!0},n.createElement("meshStandardMaterial",{color:"#f0b"}))))))}function S(){const i=o(s,"./assets/deerhead.ff9ec202.glb").nodes.mesh_0,[{rotation:l}]=e((()=>({from:{rotation:[0,0,0]},config:r.slow})));return t((e=>{l.start({to:[-.2*e.mouse.y,.3*e.mouse.x,0]})})),n.createElement(a.group,{rotation:l},n.createElement("group",{rotation:[-1.8,0,-1.6],position:[0,-7,0]},n.createElement("mesh",{geometry:i.geometry,layers:[0],receiveShadow:!0,castShadow:!0},n.createElement("meshStandardMaterial",{color:"#555",roughness:1,metalness:.5})),n.createElement("mesh",{geometry:i.geometry,layers:[1],receiveShadow:!0,castShadow:!0},n.createElement("meshBasicMaterial",{color:"#000"}))),n.createElement(w,{position:[1,.4,-.2],scale:1}),n.createElement(w,{position:[-1.2,.8,0],scale:1.2}),n.createElement(w,{position:[2.7,2.2,.3],scale:.7}))}const M={uniforms:{tDiffuse:{value:null},tAdd:{value:null}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }",fragmentShader:"\n    uniform sampler2D tDiffuse;\n    uniform sampler2D tAdd;\n    varying vec2 vUv;\n    void main() {\n      vec4 color = texture2D( tDiffuse, vUv );\n      vec4 add = texture2D( tAdd, vUv );\n      gl_FragColor = color + add;\n    }"},D={uniforms:{tDiffuse:{value:null},lightPosition:{value:new l(.5,.75)},exposure:{value:.18},decay:{value:.95},density:{value:.75},weight:{value:.4},samples:{value:50}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }",fragmentShader:"\n    varying vec2 vUv;\n    uniform sampler2D tDiffuse;\n    uniform vec2 lightPosition;\n    uniform float exposure;\n    uniform float decay;\n    uniform float density;\n    uniform float weight;\n    uniform int samples;\n    const int MAX_SAMPLES = 100;\n    void main()\n    {\n      vec2 texCoord = vUv;\n      vec2 deltaTextCoord = texCoord - lightPosition;\n      deltaTextCoord *= 1.0 / float(samples) * density;\n      vec4 color = texture2D(tDiffuse, texCoord);\n      float illuminationDecay = 1.0;\n      for(int i=0; i < MAX_SAMPLES; i++) {\n        if(i == samples) break;\n        texCoord -= deltaTextCoord;\n        vec4 tex = texture2D(tDiffuse, texCoord);\n        tex *= illuminationDecay * weight;\n        color += tex;\n        illuminationDecay *= decay;\n      }\n      gl_FragColor = color * exposure;\n    }"};function C(){const{gl:e,scene:a,camera:r,size:o}=c(),s=n.useMemo((()=>new m(0,0)),[]),i=n.useRef(null),l=n.useRef(null);return n.useEffect((()=>{i.current.setSize(o.width,o.height),l.current.setSize(o.width,o.height)}),[o]),t((()=>{r.layers.set(1),i.current.render(),r.layers.set(0),l.current.render()}),1),n.createElement(n.Fragment,null,n.createElement("effectComposer",{ref:i,args:[e,s],renderToScreen:!1},n.createElement("renderPass",{attachArray:"passes",args:[a,r]}),n.createElement("shaderPass",{attachArray:"passes",args:[D],needsSwap:!1})),n.createElement("effectComposer",{ref:l,args:[e]},n.createElement("renderPass",{attachArray:"passes",args:[a,r]}),n.createElement("shaderPass",{attachArray:"passes",args:[M],"uniforms-tAdd-value":s.texture}),n.createElement("shaderPass",{attachArray:"passes",args:[u],"uniforms-resolution-value":[1/o.width,1/o.height],renderToScreen:!0})))}function P(){return n.createElement(n.Fragment,null,n.createElement("ambientLight",{intensity:.5}),n.createElement("pointLight",{position:[0,60,-100],intensity:20}),n.createElement("pointLight",{position:[-50,0,-50],intensity:2}),n.createElement("spotLight",{castShadow:!0,intensity:8,angle:.31,position:[10,10,10],"shadow-mapSize-width":2048,"shadow-mapSize-height":2048}))}function U(){return n.createElement(v,{shadows:!0,style:{background:"#171717"},camera:{position:[0,0,12],fov:50},gl:{antialias:!1}},n.createElement(P,null),n.createElement(y,null),n.createElement(n.Suspense,{fallback:null},n.createElement(S,null)),n.createElement(C,null))}d({EffectComposer:f,RenderPass:p,ShaderPass:h}),g.render(n.createElement(n.StrictMode,null,n.createElement(U,null)),document.getElementById("root"));
