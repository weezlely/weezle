import type { HTMLAttributes, PropsWithChildren } from "react";

type HeadingAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = {
  as?: HeadingAs;
  backgroundColor?: string;
  color?: string;
};

export type HeadingProps = PropsWithChildren<Props> & HTMLAttributes<HTMLHeadingElement>;
