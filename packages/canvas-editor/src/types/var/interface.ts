import { CircleVar, ImageVar, RectVar, TextBoxVar, TextVar, VideoVar } from "./type";

export interface IVar {
  default: RectVar | CircleVar | TextVar | TextBoxVar | ImageVar | VideoVar;
  onlyText: TextVar | TextBoxVar;
  noneDiagram: TextVar | TextBoxVar | ImageVar | VideoVar;
}
