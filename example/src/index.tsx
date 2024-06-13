import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "taeo-ui";

import TestButton from "./components/test-button";
import TestTypography from "./components/test-typography";
import TestSwitch from "./components/test-switch";
import TestBottomSheet from "./components/test-bottomSheet";
import TestCheckbox from "./components/test-checkbox";
import TestFlyout from "./components/test-flyout";
import TestModal from "./components/test-modal";

import TestRadioGroup from "./components/test-radio";

// import "taeo-ui/dist/css/index.css";

const theme = createTheme();

const App = () => (
  <div style={{ width: "100vw", height: "100vh", zIndex: -1 }}>
    <ThemeProvider theme={theme}>
      {/* <TestButton /> */}
      {/* <TestTypography /> */}
      {/* <TestSwitch /> */}
      <TestBottomSheet />
      {/* <TestCheckbox /> */}
      {/* <TestFlyout /> */}
      {/* <TestModal /> */}
      {/* <TestRadioGroup /> */}
    </ThemeProvider>
  </div>
);

const container = document.getElementById("wrap") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(<App />);
