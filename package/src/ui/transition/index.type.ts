import { HTMLAttributes, PropsWithChildren } from "react";

type Props = {
  in: boolean;
  timeout: number;
  children: React.ReactNode;
  className?: string;
  onEntered?: () => void;
  onExited?: () => void;
  activeStyle?: { [key in string]: any };
  inactiveStyle?: { [key in string]: any };
};
export type TransitionProps = PropsWithChildren<Props> & HTMLAttributes<HTMLElement | HTMLDivElement>;
