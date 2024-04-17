import React from "react";
import ReactDOM from "react-dom/client";
// import TestComponents from "./components/bottomSheet-component";
import TestComponents from "./components/button-component";

const App = () => (
  <div>
    <TestComponents />
  </div>
);

const container = document.getElementById("wrap") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(<App />);
