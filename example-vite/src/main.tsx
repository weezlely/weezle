import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";

import "vite/modulepreload-polyfill";
import "taeo-ui/dist/assets/bundle.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
