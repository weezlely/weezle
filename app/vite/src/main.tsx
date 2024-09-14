import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";

import "taeo-ui/dist/assets/bundle.css";
import "vite/modulepreload-polyfill";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
