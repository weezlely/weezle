import type { ComponentProps } from "../../types";
import * as styles from "./styles.css";

export interface SpacingProps extends ComponentProps<HTMLElement> {
  size?: keyof typeof styles.spacing;
}
