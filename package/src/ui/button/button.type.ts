import type { HTMLAttributes, PropsWithChildren } from "react";

import type { BackgroundColor, BorderColor, Color } from "../../types";
import type { ButtonRecipeVariants } from "./styles.css";

export type ButtonElement = HTMLButtonElement;

export interface ButtonProps extends HTMLAttributes<ButtonElement>, PropsWithChildren {
  variant?: ButtonRecipeVariants["variant"];
  size?: ButtonRecipeVariants["size"];
  disabled?: boolean;
  bgColor?: BackgroundColor;
  fontColor?: Color;
  borderColor?: BorderColor;
}
