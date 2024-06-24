import type { HTMLAttributes, PropsWithChildren } from "react";
import * as styles from "./index.styles";

type Props = {
  size?: keyof typeof styles.spacing;
};

export type SpacingProps = PropsWithChildren<Props> & HTMLAttributes<HTMLElement>;
