import { IColor, ISize } from "../types";

export interface CanvasConfigProps extends Pick<ISize, "width" | "height">, Pick<IColor, "background"> {}

export type CanvasConfigs = ReturnType<typeof canvasConfig>;

/**
 * @description Canvas Settings Options
 */

export const canvasConfig = ({ width = 500, height = 500, background = "transparent" }: CanvasConfigProps) => {
  return {
    height,
    width,
    background,
  };
};
