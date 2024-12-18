import { globalStyle } from "@vanilla-extract/css";
import * as layers from "./layers.css";

globalStyle(".container", {
  "@layer": {
    [layers.components]: {
      width: "100%",
      height: "100vh",
      border: "0.0625rem solid #000",
      padding: "1.25rem",
      overflow: "scroll",
    },
  },
});
