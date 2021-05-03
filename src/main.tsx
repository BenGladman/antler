import React from "react";
import ReactDOM from "react-dom";
import { Scene } from "./Scene";

document.getElementById("nojs")?.remove();

ReactDOM.render(
  <React.StrictMode>
    <Scene />
  </React.StrictMode>,
  document.getElementById("root")
);
