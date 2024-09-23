/**
 * @description Color's interface to use 'extends'
 */

import { BackgroundColor, Color } from "./type";

export interface IColor {
  background?: BackgroundColor;
  color?: Color;
}
