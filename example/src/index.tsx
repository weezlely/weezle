import React from "react";
import ReactDOM from "react-dom/client";
// import TestComponents from "./components/bottomSheet-component";
import TestButton from "./components/test-button";
import { ThemeProvider, createTheme } from "taeo-ui";
import TestTypography from "./components/test-typography";
import TestSwitch from "./components/test-switch";

const theme = createTheme();

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <TestButton />
      <TestTypography />
      <TestSwitch />
    </ThemeProvider>
  </div>
);

const container = document.getElementById("wrap") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(<App />);
