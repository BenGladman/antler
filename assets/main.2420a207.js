var e;import"./index.ea81f18e.js";import{c as t,C as o,a as n,u as r,b as a,d as l,e as s,f as c,g as i,h as m,G as u,M as f,V as h,i as d,W as g,F as p,j as v,E,R as y,S,k as w,l as x}from"./vendor.4d7ec555.js";const b=t((e=>({beat:0,level:0,showInfo:!1,setLevel:o((t=>e((e=>({level:t,showInfo:e.level!==t||!e.showInfo})))),50),nextBeat:()=>e((e=>({beat:e.beat+1})))})));function M(e){return e[b((e=>e.level))]}function C(e,t){const[o,r]=n.useState(Boolean(t));n.useEffect((()=>{if(!o)return;const e=setTimeout((()=>r(!1)),t);return()=>clearTimeout(e)}),[t,o]),n.useEffect((()=>{if(!o)return b.subscribe((t=>e(t.beat,t.level)))}),[o,e])}const D=[[{color1:"hsl(216,90%,63%)",color2:"hsl(216,90%,83%)"},{color1:"hsl(152,80%,63%)",color2:"hsl(152,80%,83%)"},{color1:"hsl(305,80%,63%)",color2:"hsl(305,80%,83%)"}],[{color1:"hsl(310,40%,38%)",color2:"hsl(310,40%,50%)"},{color1:"hsl(22,40%,38%)",color2:"hsl(22,40%,50%)"},{color1:"hsl(68,40%,38%)",color2:"hsl(68,40%,50%)"}],[{color1:"hsl(10,90%,38%)",color2:"hsl(10,90%,50%)"},{color1:"hsl(115,90%,38%)",color2:"hsl(115,90%,50%)"},{color1:"hsl(248,90%,38%)",color2:"hsl(248,90%,50%)"}]];function k(){const[{position:e}]=r((()=>({from:{position:[0,0,-20]},config:s.molasses}))),[{color1:t,color2:o},c]=r((()=>({from:{color1:"#000",color2:"#222"},to:{color1:"#444",color2:"#ccc"},config:{duration:3e3}})));a((({mouse:t})=>{const o=Math.sqrt(t.x*t.x+t.y*t.y);e.start({to:[-10*t.x,-5*t.y,-30*o-10]})})),C(((e,t)=>{c.start({to:D[t][e%3],config:0===t?s.molasses:s.default})}),5e3);const i=n.createElement("sphereBufferGeometry",{args:[6,32,32]});return n.createElement(l.group,{position:e},n.createElement("mesh",{layers:[0],scale:[.98,.98,.98]},i,n.createElement(l.meshBasicMaterial,{transparent:!0,opacity:.5,color:t})),n.createElement("mesh",{layers:[1]},i,n.createElement(l.meshBasicMaterial,{color:o})))}function P(){return n.createElement(n.Fragment,null,n.createElement("h1",null,"Alan & Ben"),n.createElement("p",null,"are getting married",n.createElement("br",null),"on Saturday 30th October at 3 o’clock in the afternoon",n.createElement("br",null),"at ",n.createElement("a",{href:"https://www.google.com/maps/place/Shoreditch+Studios+Ltd./@51.5252832,-0.0788779,15z/data=!4m5!3m4!1s0x0:0x2fde7a00c9db6f52!8m2!3d51.5252832!4d-0.0788779",target:"_blank",rel:"noreferrer"},"Shoreditch Studios EC2A")))}function A(){return n.createElement(n.Fragment,null,n.createElement("p",null,n.createElement("a",{href:"information.html"},"More information")),n.createElement("p",null,n.createElement("a",{href:"credits.html"},"Site credits")))}function B(){return n.createElement(n.Fragment,null,n.createElement("p",null,"Canapes and drinks — 4pm",n.createElement("br",null),"Dinner — 5pm",n.createElement("br",null),"DJ and dancing — until close at midnight"))}function F(){const e=M([P,A,B]),t=b((e=>e.showInfo));return c(t&&e,{key:e=>e?e.name:"null",from:{transform:"translate3d(0,20vh,0)",opacity:0},enter:{transform:"translate3d(0,0vh,0)",opacity:1},leave:{transform:"translate3d(0,-100vh,0)",opacity:0},config:s.slow})(((e,t)=>n.createElement(i.article,{style:e},t?n.createElement(t,null):n.createElement("a",{href:"basic.html",title:"Switch to basic site"},n.createElement("img",{src:"./assets/icon.3b318cfe.svg",alt:"site icon",height:"40",width:"40"})))))}function L(e){return e instanceof f}function I(e){return[Math.random()*e-e/2,Math.random()*e-e/2,Math.random()*e-e/2]}function U({position:e,scale:t,color:o,onClick:a,showRing:c}){const i=m(u,"./assets/flower.e70855f9.glb"),[f,h]=n.useState(!1),[{rotation:d,position:g}]=r((()=>({from:{rotation:I(10),position:[0,9,0]},to:{rotation:I(.2),position:e},delay:1e3,config:s.molasses}))),[{scale:p,emissive:v}]=r((()=>({from:{scale:t,emissive:0},to:{scale:t,emissive:0},config:s.gentle}))),[{ringScale:E,ringOpacity:y},S]=r((()=>({from:{ringScale:0,ringOpacity:0}})));C((()=>{d.start({to:I(.3),config:{mass:200,tension:100,friction:100}})}),3e3),n.useEffect((()=>{f?(p.start({to:1.2*t}),v.start({to:5})):(p.start({to:t}),v.start({to:0}))}),[f,v,p,t]),n.useEffect((()=>{c?S.start({loop:{from:{ringScale:1,ringOpacity:1},to:{ringScale:2,ringOpacity:0},delay:0},config:s.molasses,delay:5e3}):S.start({to:{ringScale:0,ringOpacity:0}})}),[c]);const w=Object.values(i.nodes).filter(L);return w.forEach((e=>e.geometry.computeVertexNormals())),n.createElement(n.Fragment,null,n.createElement(l.group,{rotation:d,position:g,scale:p,onPointerEnter:()=>h(!0),onPointerLeave:()=>h(!1),onClick:a},n.createElement("group",{rotation:[1.3,0,.2],scale:.05,position:[-1.3,-1.25,-.5]},w.map(((e,t)=>n.createElement("mesh",{key:t,geometry:e.geometry,rotation:e.rotation,position:e.position,scale:e.scale,layers:[0],receiveShadow:!0,castShadow:!0},n.createElement(l.meshLambertMaterial,{color:o,emissive:"#662",emissiveIntensity:v})))))),n.createElement(l.group,{position:g,scale:E,visible:c},n.createElement("mesh",{layers:[0],scale:t},n.createElement("ringGeometry",{args:[.95,1,20]}),n.createElement(l.lineBasicMaterial,{color:"#88f",opacity:y,transparent:!0}))))}function R(){const[e,t]=n.useState(!1),[o,r]=n.useState(!1),[a,l]=n.useState(!1),s=M(["#9cc","#336","#44a"]),c=M(["#336","#a63","#44a"]),i=M(["#336","#336","#aa8"]),m=b((e=>e.setLevel));return n.createElement(n.Fragment,null,n.createElement(U,{position:[.2,1.6,-.8],scale:1,onClick:()=>{m(0),t(!0)},color:s,showRing:!e}),n.createElement(U,{position:[-2,2,-.6],scale:1.2,onClick:()=>{m(1),r(!0)},color:c,showRing:e&&!o}),n.createElement(U,{position:[1.9,3,-.3],scale:.7,onClick:()=>{m(2),l(!0)},color:i,showRing:e&&o&&!a}))}function _(){const e=m(u,"./assets/deerhead.ff9ec202.glb").nodes.mesh_0,[{rotation:t}]=r((()=>({from:{rotation:[0,0,0]},config:s.slow})));return a((e=>{t.start({to:[-.2*e.mouse.y,.3*e.mouse.x,0]})})),n.createElement(l.group,{rotation:t},n.createElement("group",{rotation:[-1.8,0,-1.6],position:[0,-7,0]},n.createElement("mesh",{geometry:e.geometry,layers:[0],receiveShadow:!0,castShadow:!0},n.createElement("meshStandardMaterial",{color:"#555",roughness:1,metalness:.5})),n.createElement("mesh",{geometry:e.geometry,layers:[1],receiveShadow:!0,castShadow:!0},n.createElement("meshBasicMaterial",{color:"#000"}))),n.createElement(R,null))}const j={uniforms:{tDiffuse:{value:null},tAdd:{value:null}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }",fragmentShader:"\n    uniform sampler2D tDiffuse;\n    uniform sampler2D tAdd;\n    varying vec2 vUv;\n    void main() {\n      vec4 color = texture2D( tDiffuse, vUv );\n      vec4 add = texture2D( tAdd, vUv );\n      gl_FragColor = color + add;\n    }"},O={uniforms:{tDiffuse:{value:null},lightPosition:{value:new h(.5,.75)},exposure:{value:.18},decay:{value:.95},density:{value:.75},weight:{value:.4},samples:{value:50}},vertexShader:"\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }",fragmentShader:"\n    varying vec2 vUv;\n    uniform sampler2D tDiffuse;\n    uniform vec2 lightPosition;\n    uniform float exposure;\n    uniform float decay;\n    uniform float density;\n    uniform float weight;\n    uniform int samples;\n    const int MAX_SAMPLES = 100;\n    void main()\n    {\n      vec2 texCoord = vUv;\n      vec2 deltaTextCoord = texCoord - lightPosition;\n      deltaTextCoord *= 1.0 / float(samples) * density;\n      vec4 color = texture2D(tDiffuse, texCoord);\n      float illuminationDecay = 1.0;\n      for(int i=0; i < MAX_SAMPLES; i++) {\n        if(i == samples) break;\n        texCoord -= deltaTextCoord;\n        vec4 tex = texture2D(tDiffuse, texCoord);\n        tex *= illuminationDecay * weight;\n        color += tex;\n        illuminationDecay *= decay;\n      }\n      gl_FragColor = color * exposure;\n    }"};function T(){const{gl:e,scene:t,camera:o,size:r}=d(),l=n.useMemo((()=>new g(0,0)),[]),s=n.useRef(null),c=n.useRef(null);return n.useEffect((()=>{s.current.setSize(r.width,r.height),c.current.setSize(r.width,r.height)}),[r]),a((()=>{o.layers.set(1),s.current.render(),o.layers.set(0),c.current.render()}),1),n.createElement(n.Fragment,null,n.createElement("effectComposer",{ref:s,args:[e,l],renderToScreen:!1},n.createElement("renderPass",{attachArray:"passes",args:[t,o]}),n.createElement("shaderPass",{attachArray:"passes",args:[O],needsSwap:!1})),n.createElement("effectComposer",{ref:c,args:[e]},n.createElement("renderPass",{attachArray:"passes",args:[t,o]}),n.createElement("shaderPass",{attachArray:"passes",args:[j],"uniforms-tAdd-value":l.texture}),n.createElement("shaderPass",{attachArray:"passes",args:[p],"uniforms-resolution-value":[1/r.width,1/r.height],renderToScreen:!0})))}v({EffectComposer:E,RenderPass:y,ShaderPass:S});const z=["hsl(310,80%,50%)","hsl(22,80%,50%)","hsl(68,80%,50%)","hsl(248,90%,70%)","hsl(10,90%,50%)","hsl(115,90%,50%)"];function V(){return z[Math.floor(6*Math.random())]}function G(){const[{color1:e,color2:t,color3:o},a]=r((()=>({from:{color1:"#888",color2:"#888",color3:"#888"},to:{color1:"#fff",color2:"#fff",color3:"#fff"},config:{duration:3e3}})));return C(((e,t)=>{switch(t){case 0:a.start({to:{color1:"#dff",color2:"#dff",color3:"#dff"},config:s.slow});break;case 1:a.start({to:{color1:"#faa",color2:"#faa",color3:"#faa"},config:s.slow});break;default:a.start({to:{color1:V(),color2:V(),color3:V()},config:s.default})}})),n.createElement(n.Fragment,null,n.createElement("ambientLight",{intensity:.5}),n.createElement(l.pointLight,{position:[0,60,-100],intensity:20,color:e}),n.createElement(l.pointLight,{position:[-50,0,-50],intensity:2,color:t}),n.createElement(l.spotLight,{castShadow:!0,intensity:8,angle:.31,position:[10,10,10],"shadow-mapSize-width":2048,"shadow-mapSize-height":2048,color:o}))}function X(){!function(){const e=b((e=>e.nextBeat)),t=M([3200,1600,800]);n.useEffect((()=>{const o=setInterval(e,t);return()=>clearInterval(o)}),[t,e])}();const e=M(["#223441","#212122","#161118"]);return n.createElement(n.Fragment,null,n.createElement(w,{shadows:!0,style:{background:e},camera:{position:[0,0,12],fov:50},gl:{antialias:!0}},n.createElement(G,null),n.createElement(k,null),n.createElement(n.Suspense,{fallback:null},n.createElement(_,null)),n.createElement(T,null)),n.createElement(F,null))}null==(e=document.getElementById("nojs"))||e.remove(),x.render(n.createElement(n.StrictMode,null,n.createElement(X,null)),document.getElementById("root"));