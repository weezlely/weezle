import React from "react";
import ReactDOM from "react-dom/client";

import ExamButton from "./example/exam-button";
import ExamCheckBox from "./example/exam-checkbox";
import ExamTypography from "./example/exam-typography";
import ExamAnimateButton from "./example/exam-animateButton";
//
import "taeo-ui/dist/assets/bundle.css";

const App = () => (
  <div style={{ width: "100vw", height: "100vh", zIndex: -1 }}>
    <ExamButton />
    <ExamCheckBox />
    <ExamTypography />
    <ExamAnimateButton />
  </div>
);

const container = document.getElementById("wrap") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(<App />);
