import type { IFontStyleOptions, IObjectStyleOptions, ISize, IVar } from "..";

export interface IToolbarOptions {
  editorSize: Pick<ISize, "h" | "w">;
  var?: Pick<IVar, "default">;
  font: Pick<IFontStyleOptions, "size" | "bold" | "color" | "family" | "underline">;
  object: Pick<IObjectStyleOptions, "size" | "border" | "coord" | "style">;
}
