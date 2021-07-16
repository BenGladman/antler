import{C as e,R as t,e as i,O as n,a,u as l,M as s,b as r,D as o,c}from"./vendor.ea0e3248.js";var m="_main_bjpwk_1",u="_fieldset_bjpwk_10",h="_run_bjpwk_23",g="_output_bjpwk_28",f="_plot_bjpwk_34",p="_scene_bjpwk_42";function A(e,t,i){return t*e+i*e**2/2}function d(e,t,i){if(0===i)return e/t;const n=i/2,a=t,l=-e,s=Math.sqrt(a**2-4*n*l);if(Number.isNaN(s))return NaN;const r=(-a+s)/(2*n),o=(-a-s)/(2*n);return r>0&&o>0?Math.min(r,o):r>=0?r:o>=0?o:NaN}class y{constructor(e){var t,i,n;this.center=e.center,this.radius=e.radius,this.initialVelocity=e.initialAngularVelocity,this.initialAngle=e.initialAngle,this.acceleration=e.angularAcceleration,this.angleOffset=e.angleOffset,this.finalAngle=(e.angularAcceleration<0?Math.max:Math.min)(e.targetAngle,this.angleAtVelocity(e.maxSpeed)),this.finishTime=d(this.finalAngle-this.initialAngle,this.initialVelocity,this.acceleration),this.finalPosition=this.ballPositionAt(this.finishTime),this.finalVelocity=(t=this.finishTime,i=this.initialVelocity,n=this.acceleration,i+n*t)}armAngleAt(e){return this.initialAngle+A(e,this.initialVelocity,this.acceleration)}ballPositionAt(e){const t=this.armAngleAt(e);return{x:this.center.x+this.radius*Math.cos(t+this.angleOffset),y:this.center.y+this.radius*Math.sin(t+this.angleOffset)}}angleAtVelocity(e){return this.initialAngle+(t=this.initialVelocity,i=e,n=this.acceleration,(i**2-t**2)/(2*n));var t,i,n}}class b{constructor(e){this.accelerationX=0,this.accelerationY=-9.81,this.initialPosition=e.initialPosition,this.initialVelocityX=e.launchSpeed*Math.cos(e.launchAngle),this.initialVelocityY=e.launchSpeed*Math.sin(e.launchAngle),this.finishTime=d(-this.initialPosition.y,this.initialVelocityY,this.accelerationY),this.finalPosition=this.ballPositionAt(this.finishTime)}ballPositionAt(e){return{x:this.initialPosition.x+A(e,this.initialVelocityX,this.accelerationX),y:this.initialPosition.y+A(e,this.initialVelocityY,this.accelerationY)}}armAngleAt(){return NaN}}const x=Math.PI/180,E=0,N=.5,M=.015,S=7870,_={diameter:.015,length:.2,density:2720,pivot:.03},v=2,P=20,T={initialAngle:2160*x,launchAngle:135*x},k=_.length-_.pivot-M/2,V=(M+_.diameter)/2,I={radius:Math.sqrt(V**2+k**2),angleOffset:Math.atan2(-V,k)},w=_.pivot,C=Math.PI*_.diameter*w*_.density*w**2/3,O=_.length-_.pivot,R=Math.PI*_.diameter*O*_.density*O**2/3,j=4*Math.PI*(M/2)**3/3*S*I.radius**2,F={cylinder1:C,cylinder2:R,ball:j,total:C+R+j};class q{constructor(e){this.finishTime=0,this.subSimulators=[];const t={x:E,y:N},{radius:i,angleOffset:n}=I,a=Math.sign(e.launchAngle-e.initialAngle),l=e.torque/e.rotationalInertia*a;let s=new y({center:t,radius:i,angleOffset:n,initialAngularVelocity:0,initialAngle:e.initialAngle,targetAngle:e.launchAngle,angularAcceleration:l,maxSpeed:e.maxSpeed});this.subSimulators.push(s),this.finishTime+=s.finishTime,s.finalAngle!==e.launchAngle&&(s=new y({center:t,radius:i,angleOffset:n,initialAngularVelocity:e.maxSpeed*a,initialAngle:s.finalAngle,targetAngle:e.launchAngle,angularAcceleration:0,maxSpeed:1/0}),this.subSimulators.push(s),this.finishTime+=s.finishTime);const r=new b({initialPosition:s.finalPosition,launchSpeed:s.finalVelocity*s.radius,launchAngle:s.finalAngle+n+Math.PI/2});this.subSimulators.push(r),this.finishTime+=r.finishTime,this.finalPosition=r.finalPosition}ballPositionAt(e){for(const t of this.subSimulators){if(!(t.finishTime<e))return t.ballPositionAt(e);e-=t.finishTime}return this.subSimulators[this.subSimulators.length-1].finalPosition}armAngleAt(e){let t=NaN;for(const i of this.subSimulators){if(!(i.finishTime<e)){const n=i.armAngleAt(e);Number.isNaN(n)||(t=n);break}{e-=i.finishTime;const n=i.armAngleAt(i.finishTime);Number.isNaN(n)||(t=n)}}return t}}var Y="_canvas_1yexy_1";function G({simulator:i}){const n=e.exports.useRef(null);return e.exports.useEffect((()=>{const e=n.current.getContext("2d",{alpha:!1});if(!e)return;const t=i.finalPosition.x||0,a=Math.min(Math.floor(t),-1),l=Math.max(Math.ceil(t),1),s=360/(l-a),r=360/s;e.fillStyle="rgb(17, 17, 17)",e.fillRect(0,0,400,400);let o=NaN,c=0;const m=()=>{c=requestAnimationFrame((t=>{Number.isNaN(o)&&(o=t);const n=Math.min(i.finishTime,(t-o)/1e3);if(e.fillStyle="rgba(17, 17, 17, 0.02)",e.fillRect(0,0,400,400),e.strokeStyle="rgb(80,80,200)",e.beginPath(),e.moveTo(20-a*s,20),e.lineTo(20-a*s,380),e.moveTo(20,380),e.lineTo(380,380),e.lineWidth=1,e.stroke(),e.fillStyle="rgb(80,80,200)",e.font="12px sans-serif",e.textAlign="right",e.textBaseline="top",e.fillText(`${l}m`,380,382),e.textAlign="left",e.fillText(`${a}m`,20,382),Number.isNaN(i.finishTime))return;const{x:c,y:u}=i.ballPositionAt(n),h=20+(c-a)*s,g=20+(r-u)*s;e.fillStyle="rgb(255, 255, 0)",e.beginPath(),e.arc(h,g,1.5,0,2*Math.PI,!0),e.fill(),n<i.finishTime&&m()}))};return m(),()=>cancelAnimationFrame(c)}),[i]),t.createElement("canvas",{className:Y,ref:n,height:400,width:400})}function L({simulator:i}){const n=e.exports.useRef(null),a=e.exports.useRef(null),c=l(),m=e.exports.useMemo((()=>new s),[]);return e.exports.useEffect((()=>{c.clock.start()}),[i]),r((e=>{const t=i.armAngleAt(e.clock.elapsedTime);n.current.matrixAutoUpdate=!1,n.current.matrix.identity(),n.current.matrix.multiply(m.makeTranslation(E,N,0)),n.current.matrix.multiply(m.makeRotationZ(t-Math.PI/2)),n.current.matrix.multiply(m.makeTranslation(0,_.length/2-_.pivot,0));const l=i.ballPositionAt(e.clock.elapsedTime);a.current.position.x=l.x,a.current.position.y=l.y})),t.createElement(t.Fragment,null,t.createElement("mesh",{rotation:[-Math.PI/2,0,0]},t.createElement("planeGeometry",{args:[20,.5]}),t.createElement("meshStandardMaterial",{color:"blue",side:o})),t.createElement("mesh",{rotation:[-Math.PI/2,0,0],position:[E,N,-.06]},t.createElement("cylinderGeometry",{args:[.05,.05,.1]}),t.createElement("meshStandardMaterial",{color:"darkgreen"})),t.createElement("mesh",{ref:n},t.createElement("cylinderGeometry",{args:[_.diameter/2,_.diameter/2,_.length]}),t.createElement("meshStandardMaterial",{color:"green"})),t.createElement("mesh",{ref:a},t.createElement("sphereGeometry",{args:[M/2]}),t.createElement("meshStandardMaterial",{color:"yellow"})))}function X(){const i=e.exports.useRef(null),{camera:n,gl:a}=l();return r((()=>i.current.update())),t.createElement("orbitControls",{ref:i,args:[n,a.domElement],enableDamping:!0,dampingFactor:.1,rotateSpeed:.5})}function B({simulator:e}){return t.createElement(a,{camera:{position:[-2,1,2],fov:30}},t.createElement("ambientLight",{intensity:.5}),t.createElement("spotLight",{position:[10,10,10],angle:.15,penumbra:1}),t.createElement("pointLight",{position:[-10,-10,-10]}),t.createElement("group",{position:[-.5,-.5,0]},t.createElement(L,{simulator:e})),t.createElement(X,null))}i({OrbitControls:n});var D="_container_vsayt_1",$="_label_vsayt_9",U="_numberInput_vsayt_15",W="_unit_vsayt_27",Z="_rangeInput_vsayt_31";function z(e,t){const i=Math.log10(t),n=i<0?Math.floor(-i):0;return e.toFixed(n)}function H({label:i,unit:n,min:a,max:l,step:s=1,value:r,onChange:o,valueToString:c=z}){const[m,u]=e.exports.useState(null);return t.createElement("label",{className:D},t.createElement("span",{className:$},i),t.createElement("input",{className:U,type:"number",step:s,value:null!=m?m:c(r,s),onChange:e=>{u(e.target.value)},onFocus:()=>u(c(r,s)),onBlur:e=>{u(null),o(e.target.valueAsNumber)}}),t.createElement("span",{className:W},n),t.createElement("input",{className:Z,type:"range",value:r,onChange:e=>{o(e.target.valueAsNumber)},min:a,max:l,step:s}))}const J=Math.PI/180;function K(){const[i,n]=e.exports.useState(0),[a,l]=e.exports.useState(T.initialAngle),[s,r]=e.exports.useState(T.launchAngle),[o,c]=e.exports.useState(v),[A,d]=e.exports.useState(P),[y,b]=e.exports.useState(F.total),x=e.exports.useMemo((()=>new q({initialAngle:a,launchAngle:s,torque:o,maxSpeed:A,rotationalInertia:y})),[i,a,s,o,A,y]);return t.createElement("main",{className:m},t.createElement("fieldset",{className:u},t.createElement(H,{label:"Initial angle",min:361,max:2160,value:a/J,unit:"°",onChange:e=>l(e*J)}),t.createElement(H,{label:"Launch angle",min:0,max:360,value:s/J,unit:"°",onChange:e=>r(e*J)}),t.createElement(H,{label:"Motor torque",min:.5,max:10,step:.1,value:o,unit:"N⋅m",onChange:c}),t.createElement(H,{label:"Max speed",min:1,max:50,step:.1,value:A,unit:"rad/s",onChange:d}),t.createElement(H,{label:"Rotational inertia",min:.1,max:1,step:.01,value:y,unit:"kg⋅m²",onChange:b}),t.createElement("button",{className:h,type:"button",onClick:()=>n((e=>e+1))},"Run"),t.createElement("output",{className:g},"Distance travelled: ",(x.finalPosition.x||0).toFixed(2),"m")),t.createElement("section",{className:f},t.createElement(G,{simulator:x})),t.createElement("section",{className:p},t.createElement(B,{simulator:x})))}c.render(t.createElement(t.StrictMode,null,t.createElement(K,null)),document.getElementById("root"));
