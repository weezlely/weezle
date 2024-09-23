export type KeyAble<T = string | string[] | number | unknown> = {
  [key: string]: T;
};
