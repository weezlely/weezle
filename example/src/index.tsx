import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "taeo-ui";

import TestButton from "./components/test-button";
import TestTypography from "./components/test-typography";
import TestSwitch from "./components/test-switch";
import TestBottomSheet from "./components/test-bottomSheet";

const theme = createTheme();

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <TestButton />
      <TestTypography />
      <TestSwitch />
      <TestBottomSheet />
    </ThemeProvider>
  </div>
);

const container = document.getElementById("wrap") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(<App />);
