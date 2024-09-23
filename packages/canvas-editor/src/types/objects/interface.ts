import type { ISize } from "../size/index.type";
import type { IColor } from "../colors/interface";
import type { ICoord } from "../coords/interface";
import type { IBorder } from "../borders/interface";

export interface IObjectStyleOptions {
  size: Pick<ISize, "w" | "h">;
  coord: Pick<ICoord, "x" | "y">;
  style: Pick<IColor, "background">;
  border: Pick<IBorder, "bColor" | "bStyle" | "bWidth">;
}
