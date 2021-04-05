import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <main>
      <h1>Antler</h1>
      <p>
        Designed and created by{" "}
        <a href="https://github.com/BenGladman/antler">Ben Gladman</a>
      </p>
      <p>
        Built with
        <br />
        <a href="https://reactjs.org/">React</a>
        <br />
        <a href="https://threejs.org/">three.js</a>
        <br />
        <a href="https://github.com/pmndrs/react-three-fiber">
          react-three-fiber
        </a>
        <br />
        and <a href="https://www.react-spring.io/">react-spring</a>
      </p>
      <p>
        Lighting and effects adapted from{" "}
        <a href="https://codesandbox.io/s/r3f-volumetric-light-w633u">demo</a>{" "}
        by <a href="https://codesandbox.io/u/drcmda">drcmda</a>
      </p>
      <p>
        <a href="https://sketchfab.com/3d-models/deerhead-faceted-8b578418eab44647b7f543eb0966b628">
          Deer head model
        </a>
        {" by "}
        <a href="https://sketchfab.com/ncassab">ncassab</a>
      </p>
      <p>
        <a href="https://www.turbosquid.com/3d-models/free-flower-3d-model/618030">
          Flower model
        </a>
        {" by "}
        <a href="https://www.turbosquid.com/Search/Artists/signSTUDIOS">
          signSTUDIOS
        </a>
      </p>
    </main>
  </React.StrictMode>,
  document.getElementById("credits-root")
);
