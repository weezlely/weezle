import type { ImageAlt, ImageCreated, ImageLazy, ImageSrc } from "./type";

export interface IImage {
  src?: ImageSrc;
  alt?: ImageAlt;
  lazy?: ImageLazy;
  createdAt?: ImageCreated;
}
