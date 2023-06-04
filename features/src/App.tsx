import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

const Template = React.lazy(() => import("home/Template"));

const App = () => (
  <React.Suspense fallback={<div>Carregando...</div>}>
    <Template name="FEATURES" />
    <div className="text-3xl mx-auto max-w-6xl">FEATURES</div>
  </React.Suspense>
);
ReactDOM.render(<App />, document.getElementById("app"));
