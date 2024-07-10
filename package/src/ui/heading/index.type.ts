import type { HTMLAttributes, PropsWithChildren } from "react";

import { DefaultProps } from "../../types";

type HeadingAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = {
  as?: HeadingAs;
  backgroundColor?: string;
  color?: string;
} & DefaultProps;

export type HeadingProps = PropsWithChildren<Props> & HTMLAttributes<HTMLHeadingElement>;
