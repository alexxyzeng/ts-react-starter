import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
import First from "./components/First";

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React">
    <First />
  </Hello>,
  document.getElementById("example")
);
