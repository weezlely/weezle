import type { HTMLMotionProps } from "framer-motion";
import type { HTMLAttributes, PropsWithChildren } from "react";

import type { Color } from "../../types";
import * as styles from "./styles.css";

export type AnimateButtonElement = HTMLButtonElement | HTMLMotionProps<"button">;

export interface AnimateButtonProps extends HTMLAttributes<AnimateButtonElement>, PropsWithChildren {
  variant?: keyof typeof styles.buttonVariants;
  size?: keyof typeof styles.buttonSizes;
  color?: Color;
  background?: Color;
  display?: boolean;
}
