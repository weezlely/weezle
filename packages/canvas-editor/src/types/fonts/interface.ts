import type { FontColor, FontFamily, FontSize, FontUnderline, FontWeight } from "./type";

export interface IFontStyleOptions {
  size?: FontSize;
  color?: FontColor;
  bold?: FontWeight;
  underline?: FontUnderline;
  family?: FontFamily;
}
