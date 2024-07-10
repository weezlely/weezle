import { HTMLAttributes, PropsWithChildren } from "react";

import { DefaultProps } from "../../types";

type Props = {
  in: boolean;
} & DefaultProps;
export type TransitionProps = PropsWithChildren<Props> & HTMLAttributes<HTMLElement | HTMLDivElement>;
