import type { HTMLAttributes, PropsWithChildren } from "react";

import type { Color, DefaultProps } from "../../types";
import type { ButtonRecipeVariants } from "./styles.css";

export type ButtonElement = HTMLButtonElement;

interface Props {
  variant?: ButtonRecipeVariants["variant"];
  size?: ButtonRecipeVariants["size"];
  color?: Color;
  background?: Color;
  disabled?: boolean;
}
export type ButtonProps = PropsWithChildren<Props> & HTMLAttributes<HTMLButtonElement> & DefaultProps;
