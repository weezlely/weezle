import type { HTMLAttributes, PropsWithChildren } from "react";

import type { ButtonRecipeVariants } from "./styles.css";
import type { Color } from "../../types";

export type ButtonElement = HTMLButtonElement;

type Props = { variant?: ButtonRecipeVariants["variant"]; size?: ButtonRecipeVariants["size"]; color?: Color; background?: Color; disabled?: boolean };
export type ButtonProps = PropsWithChildren<Props> & HTMLAttributes<HTMLButtonElement>;
