import React from "react";
import ReactDOM from "react-dom/client";
// import TestComponents from "./components/bottomSheet-component";
import TestComponents from "./components/button-component";
import { ThemeProvider, createTheme } from "taeo-ui";
import TypographyComponents from "./components/typography-components";

const theme = createTheme();

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <TestComponents />
      <TypographyComponents />
    </ThemeProvider>
  </div>
);

const container = document.getElementById("wrap") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(<App />);
