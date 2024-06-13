import type { CSSProperties, ComponentPropsWithoutRef, HTMLAttributes, PropsWithChildren } from "react";
import { RecipeVariants } from "@vanilla-extract/recipes";

import * as styles from "./index.css";

export type ButtonElement = HTMLButtonElement;

export type ButtonVariants = RecipeVariants<typeof styles.button> & PropsWithChildren<ComponentPropsWithoutRef<"button">>;

interface Props extends ButtonVariants {
  color?: CSSProperties["color"] | Color;
  background?: CSSProperties["color"] | Color;
  [key: string]: any;
}

export type ButtonProps = PropsWithChildren<Props> & HTMLAttributes<HTMLButtonElement>;
