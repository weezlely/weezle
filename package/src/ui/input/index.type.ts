import type { HTMLAttributes, PropsWithChildren } from "react";

type Props = {
  type?: HTMLInputElement["type"];
};

export type InputProps = PropsWithChildren<Props> & HTMLAttributes<HTMLInputElement>;
