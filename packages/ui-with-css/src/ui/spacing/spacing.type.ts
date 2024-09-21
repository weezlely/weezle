import type { ElementProps } from "../../types";
import * as styles from "./styles.css";

export interface SpacingProps extends ElementProps<HTMLElement> {
  size?: keyof typeof styles.spacing;
}
