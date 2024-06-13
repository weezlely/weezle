import type { HTMLAttributes, PropsWithChildren } from "react";
import * as styles from "./index.css";

type Props = {
  size?: keyof typeof styles.spacing;
};

export type SpacingProps = PropsWithChildren<Props> & HTMLAttributes<HTMLElement>;
