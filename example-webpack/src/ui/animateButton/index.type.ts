import type { HTMLMotionProps } from "framer-motion";
import type { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";

import { KeyAbles } from "../../types";
import * as styles from "./index.styles";

type Props = {
  variant?: keyof typeof styles.buttonVariants;
  size?: keyof typeof styles.buttonSizes;
  color?: CSSProperties["color"];
  background?: CSSProperties["color"];
  display?: boolean;
} & KeyAbles;

export type AnimateButtonElement = HTMLButtonElement | HTMLMotionProps<"button">;

export type AnimateButtonProps = PropsWithChildren<Props> & HTMLAttributes<AnimateButtonElement>;
