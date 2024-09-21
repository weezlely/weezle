import type { HTMLAttributes, PropsWithChildren } from "react";

export interface InputProps extends HTMLAttributes<HTMLInputElement>, PropsWithChildren {
  type?: HTMLInputElement["type"] | string;
}
