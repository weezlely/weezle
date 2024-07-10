import type { HTMLAttributes, PropsWithChildren } from "react";

import { DefaultProps } from "../../types";
import * as styles from "./styles.css";

type Props = { size?: keyof typeof styles.spacing } & DefaultProps;

export type SpacingProps = PropsWithChildren<Props> & HTMLAttributes<HTMLElement>;
