import"./index.639abdcd.js";import{c as e,C as t,a as o,u as n,b as r,d as a,e as l,f as s,g as c,h as i,G as m,M as u,V as f,i as d,W as h,F as g,j as p,E,R as v,S as y,k as S,l as w}from"./vendor.4d7ec555.js";const x=e((e=>({beat:0,level:0,showInfo:!1,setLevel:t((t=>e((e=>({level:t,showInfo:e.level!==t||!e.showInfo})))),50),nextBeat:()=>e((e=>({beat:e.beat+1})))})));function b(e){return e[x((e=>e.level))]}function M(e,t){const[n,r]=o.useState(Boolean(t));o.useEffect((()=>{if(!n)return;const e=setTimeout((()=>r(!1)),t);return()=>clearTimeout(e)}),[t,n]),o.useEffect((()=>{if(!n)return x.subscribe((t=>e(t.beat,t.level)))}),[n,e])}const C=[[{color1:"hsl(216,90%,63%)",color2:"hsl(216,90%,83%)"},{color1:"hsl(152,80%,63%)",color2:"hsl(152,80%,83%)"},{color1:"hsl(305,80%,63%)",color2:"hsl(305,80%,83%)"}],[{color1:"hsl(310,40%,38%)",color2:"hsl(310,40%,50%)"},{color1:"hsl(22,40%,38%)",color2:"hsl(22,40%,50%)"},{color1:"hsl(68,40%,38%)",color2:"hsl(68,40%,50%)"}],[{color1:"hsl(10,90%,38%)",color2:"hsl(10,90%,50%)"},{color1:"hsl(115,90%,38%)",color2:"hsl(115,90%,50%)"},{color1:"hsl(248,90%,38%)",color2:"hsl(248,90%,50%)"}]];function D(){const[{position:e}]=n((()=>({from:{position:[0,0,-20]},config:l.molasses}))),[{color1:t,color2:s},c]=n((()=>({from:{color1:"#000",color2:"#222"},to:{color1:"#444",color2:"#ccc"},config:{duration:3e3}})));r((({mouse:t})=>{const o=Math.sqrt(t.x*t.x+t.y*t.y);e.start({to:[-10*t.x,-5*t.y,-30*o-10]})})),M(((e,t)=>{c.start({to:C[t][e%3],config:0===t?l.molasses:l.default})}),5e3);const i=o.createElement("sphereBufferGeometry",{args:[6,32,32]});return o.createElement(a.group,{position:e},o.createElement("mesh",{layers:[0],scale:[.98,.98,.98]},i,o.createElement(a.meshBasicMaterial,{transparent:!0,opacity:.5,color:t})),o.createElement("mesh",{layers:[1]},i,o.createElement(a.meshBasicMaterial,{color:s})))}function k(){return o.createElement(o.Fragment,null,o.createElement("h1",null,"Alan & Ben"),o.createElement("p",null,"are getting married",o.createElement("br",null),"on Saturday 30th October at 3 o’clock in the afternoon",o.createElement("br",null),"at ",o.createElement("a",{href:"https://www.google.com/maps/place/Shoreditch+Studios+Ltd./@51.5252832,-0.0788779,15z/data=!4m5!3m4!1s0x0:0x2fde7a00c9db6f52!8m2!3d51.5252832!4d-0.0788779",target:"_blank",rel:"noreferrer"},"Shoreditch Studios EC2A")))}function P(){return o.createElement(o.Fragment,null,o.createElement("p",null,"Gifts — TODO",o.createElement("br",null),"Contact ",o.createElement("a",{href:"mailto:ben.gladman@gmail.com"},"ben.gladman@gmail.com"),o.createElement("br",null),o.createElement("a",{href:"credits.html"},"Site credits")))}function A(){return o.createElement(o.Fragment,null,o.createElement("p",null,"Canapes and drinks — 4pm",o.createElement("br",null),"Dinner — 5pm",o.createElement("br",null),"DJ and dancing — until close at midnight"))}function F(){const e=b([k,P,A]),t=x((e=>e.showInfo));return s(t&&e,{key:e=>e?e.name:"null",from:{transform:"translate3d(0,-50vh,0)",opacity:0},enter:{transform:"translate3d(0,0vh,0)",opacity:1},leave:{transform:"translate3d(0,20vh,0)",opacity:0},config:l.slow})(((e,t)=>t&&o.createElement(c.article,{style:e},o.createElement(t,null))))}function L(e){return e instanceof u}function B(e){return[Math.random()*e-e/2,Math.random()*e-e/2,Math.random()*e-e/2]}function O({position:e,scale:t,color:r,onClick:s,showRing:c}){const u=i(m,"./assets/flower.e70855f9.glb"),[f,d]=o.useState(!1),[{rotation:h,position:g}]=n((()=>({from:{rotation:B(10),position:[0,9,0]},to:{rotation:B(.2),position:e},delay:1e3,config:l.molasses}))),[{scale:p,emissive:E}]=n((()=>({from:{scale:t,emissive:0},to:{scale:t,emissive:0},config:l.gentle}))),[{ringScale:v,ringOpacity:y},S]=n((()=>({from:{ringScale:0,ringOpacity:0}})));M((()=>{h.start({to:B(.3),config:{mass:200,tension:100,friction:100}})}),3e3),o.useEffect((()=>{f?(p.start({to:1.2*t}),E.start({to:5})):(p.start({to:t}),E.start({to:0}))}),[f,E,p,t]),o.useEffect((()=>{c?S.start({loop:{from:{ringScale:1,ringOpacity:1},to:{ringScale:2,ringOpacity:0},delay:0},config:l.molasses,delay:5e3}):S.start({to:{ringScale:0,ringOpacity:0}})}),[c]);const w=Object.values(u.nodes).filter(L);return w.forEach((e=>e.geometry.computeVertexNormals())),o.createElement(o.Fragment,null,o.createElement(a.group,{rotation:h,position:g,scale:p,onPointerEnter:()=>d(!0),onPointerLeave:()=>d(!1),onClick:s},o.createElement("group",{rotation:[1.3,0,.2],scale:.05,position:[-1.3,-1.25,-.5]},w.map(((e,t)=>o.createElement("mesh",{key:t,geometry:e.geometry,rotation:e.rotation,position:e.position,scale:e.scale,layers:[0],receiveShadow:!0,castShadow:!0},o.createElement(a.meshLambertMaterial,{color:r,emissive:"#662",emissiveIntensity:E})))))),o.createElement(a.group,{position:g,scale:v,visible:c},o.createElement("mesh",{layers:[0],scale:t},o.createElement("ringGeometry",{args:[.95,1,20]}),o.createElement(a.lineBasicMaterial,{color:"#88f",opacity:y,transparent:!0}))))}function U(){const[e,t]=o.useState(!1),[n,r]=o.useState(!1),[a,l]=o.useState(!1),s=b(["#9cc","#336","#44a"]),c=b(["#336","#a63","#44a"]),i=b(["#336","#336","#aa8"]),m=x((e=>e.setLevel));return o.createElement(o.Fragment,null,o.createElement(O,{position:[.2,1.6,-.8],scale:1,onClick:()=>{m(0),t(!0)},color:s,showRing:!e}),o.createElement(O,{position:[-2,2,-.6],scale:1.2,onClick:()=>{m(1),r(!0)},color:c,showRing:e&&!n}),o.createElement(O,{position:[1.9,3,-.3],scale:.7,onClick:()=>{m(2),l(!0)},color:i,showRing:e&&n&&!a}))}function I(){const e=i(m,"./assets/deerhead.ff9ec202.glb").nodes.mesh_0,[{rotation:t}]=n((()=>({from:{rotation:[0,0,0]},config:l.slow})));return r((e=>{t.start({to:[-.2*e.mouse.y,.3*e.mouse.x,0]})})),o.createElement(a.group,{rotation:t},o.createElement("group",{rotation:[-1.8,0,-1.6],position:[0,-7,0]},o.createElement("mesh",{geometry:e.geometry,layers:[0],receiveShadow:!0,castShadow:!0},o.createElement("meshStandardMaterial",{color:"#555",roughness:1,metalness:.5})),o.createElement("mesh",{geometry:e.geometry,layers:[1],receiveShadow:!0,castShadow:!0},o.createElement("meshBasicMaterial",{color:"#000"}))),o.createElement(U,null))}const R={uniforms:{tDiffuse:{value:null},tAdd:{value:null}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }",fragmentShader:"\n    uniform sampler2D tDiffuse;\n    uniform sampler2D tAdd;\n    varying vec2 vUv;\n    void main() {\n      vec4 color = texture2D( tDiffuse, vUv );\n      vec4 add = texture2D( tAdd, vUv );\n      gl_FragColor = color + add;\n    }"},T={uniforms:{tDiffuse:{value:null},lightPosition:{value:new f(.5,.75)},exposure:{value:.18},decay:{value:.95},density:{value:.75},weight:{value:.4},samples:{value:50}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }",fragmentShader:"\n    varying vec2 vUv;\n    uniform sampler2D tDiffuse;\n    uniform vec2 lightPosition;\n    uniform float exposure;\n    uniform float decay;\n    uniform float density;\n    uniform float weight;\n    uniform int samples;\n    const int MAX_SAMPLES = 100;\n    void main()\n    {\n      vec2 texCoord = vUv;\n      vec2 deltaTextCoord = texCoord - lightPosition;\n      deltaTextCoord *= 1.0 / float(samples) * density;\n      vec4 color = texture2D(tDiffuse, texCoord);\n      float illuminationDecay = 1.0;\n      for(int i=0; i < MAX_SAMPLES; i++) {\n        if(i == samples) break;\n        texCoord -= deltaTextCoord;\n        vec4 tex = texture2D(tDiffuse, texCoord);\n        tex *= illuminationDecay * weight;\n        color += tex;\n        illuminationDecay *= decay;\n      }\n      gl_FragColor = color * exposure;\n    }"};function _(){const{gl:e,scene:t,camera:n,size:a}=d(),l=o.useMemo((()=>new h(0,0)),[]),s=o.useRef(null),c=o.useRef(null);return o.useEffect((()=>{s.current.setSize(a.width,a.height),c.current.setSize(a.width,a.height)}),[a]),r((()=>{n.layers.set(1),s.current.render(),n.layers.set(0),c.current.render()}),1),o.createElement(o.Fragment,null,o.createElement("effectComposer",{ref:s,args:[e,l],renderToScreen:!1},o.createElement("renderPass",{attachArray:"passes",args:[t,n]}),o.createElement("shaderPass",{attachArray:"passes",args:[T],needsSwap:!1})),o.createElement("effectComposer",{ref:c,args:[e]},o.createElement("renderPass",{attachArray:"passes",args:[t,n]}),o.createElement("shaderPass",{attachArray:"passes",args:[R],"uniforms-tAdd-value":l.texture}),o.createElement("shaderPass",{attachArray:"passes",args:[g],"uniforms-resolution-value":[1/a.width,1/a.height],renderToScreen:!0})))}p({EffectComposer:E,RenderPass:v,ShaderPass:y});const j=["hsl(310,80%,50%)","hsl(22,80%,50%)","hsl(68,80%,50%)","hsl(248,90%,70%)","hsl(10,90%,50%)","hsl(115,90%,50%)"];function z(){return j[Math.floor(6*Math.random())]}function G(){const[{color1:e,color2:t,color3:r},s]=n((()=>({from:{color1:"#888",color2:"#888",color3:"#888"},to:{color1:"#fff",color2:"#fff",color3:"#fff"},config:{duration:3e3}})));return M(((e,t)=>{switch(t){case 0:s.start({to:{color1:"#dff",color2:"#dff",color3:"#dff"},config:l.slow});break;case 1:s.start({to:{color1:"#faa",color2:"#faa",color3:"#faa"},config:l.slow});break;default:s.start({to:{color1:z(),color2:z(),color3:z()},config:l.default})}})),o.createElement(o.Fragment,null,o.createElement("ambientLight",{intensity:.5}),o.createElement(a.pointLight,{position:[0,60,-100],intensity:20,color:e}),o.createElement(a.pointLight,{position:[-50,0,-50],intensity:2,color:t}),o.createElement(a.spotLight,{castShadow:!0,intensity:8,angle:.31,position:[10,10,10],"shadow-mapSize-width":2048,"shadow-mapSize-height":2048,color:r}))}function V(){!function(){const e=x((e=>e.nextBeat)),t=b([3200,1600,800]);o.useEffect((()=>{const o=setInterval(e,t);return()=>clearInterval(o)}),[t,e])}();const e=b(["#223441","#212122","#161118"]);return o.createElement(o.Fragment,null,o.createElement(S,{shadows:!0,style:{background:e},camera:{position:[0,0,12],fov:50},gl:{antialias:!0}},o.createElement(G,null),o.createElement(D,null),o.createElement(o.Suspense,{fallback:null},o.createElement(I,null)),o.createElement(_,null)),o.createElement(F,null))}w.render(o.createElement(o.StrictMode,null,o.createElement(V,null)),document.getElementById("root"));
