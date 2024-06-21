import { HTMLAttributes, PropsWithChildren } from "react";

type Props = {
  in: boolean;
};
export type TransitionProps = PropsWithChildren<Props> & HTMLAttributes<HTMLElement | HTMLDivElement>;
