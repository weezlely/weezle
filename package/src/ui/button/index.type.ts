import type { HTMLAttributes, PropsWithChildren } from "react";

// import type { ButtonRecipeVariants } from "./index.css";
import type { Color, KeyAbles } from "../../types";

export type ButtonElement = HTMLButtonElement;

type Props = { color?: Color; background?: Color } & KeyAbles;
export type ButtonProps = PropsWithChildren<Props> & HTMLAttributes<HTMLButtonElement>;
