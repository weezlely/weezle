import { HTMLMotionProps } from "framer-motion";
import type { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";
import * as styles from "./index.css";

type Props = {
  variant?: keyof typeof styles.buttonVariants;
  size?: keyof typeof styles.buttonSizes;
  color?: CSSProperties["color"] | Color;
  background?: CSSProperties["color"] | Color;
  display?: boolean;
  [key: string]: any;
};

export type AnimateButtonElement = HTMLButtonElement | HTMLMotionProps<"button">;

export type AnimateButtonProps = PropsWithChildren<Props> & HTMLAttributes<AnimateButtonElement>;
