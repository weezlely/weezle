import { HTMLAttributes } from "react";

export type BoxElement = HTMLDivElement & HTMLElement;
export interface BoxProps extends HTMLAttributes<BoxElement>, React.PropsWithChildren {}
