import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Template from "./Template";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Template name="Home" />
    <div className="text-3xl mx-auto max-w-6xl">HOME</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
