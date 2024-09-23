import * as CSS from "csstype";

import { Color } from "../../types";

/**
 * @description THis is type about font's size in canvas.
 */
export type FontSize = number;

/**
 * @description This is type about font's color in canvas.
 */
export type FontColor = Color;

/**
 * @description This is type about font's weights
 */
export type FontWeight = CSS.Properties["fontWeight"];

/**
 * @description This is type about font's underline
 */

export type FontUnderline = boolean;

/**
 * @description This is type about font's family
 */
export type FontFamily = CSS.Properties["fontFamily"];
