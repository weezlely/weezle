import * as CSS from "csstype";

import type { BorderColor } from "../../types";
import type { BorderStyle, BorderWidth } from "./type";

export interface IBorder {
  bWidth: BorderWidth;
  bStyle: BorderStyle;
  bColor: BorderColor;
}
