import type { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";

export type ModalContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};
interface IModalPortalProps {
  modalId?: string;
}

interface IModalLayoutProps {
  layoutStyle?: CSSProperties;
  dimmedStyle?: CSSProperties;
}

interface IModalTriggerProps {}

interface IHeaderProps {
  style?: CSSProperties;
}
interface IBodyProps {
  style?: CSSProperties;
}
interface IFooterProps {
  style?: CSSProperties;
}

/** Modal's Context Props */
export type ModalContextProps = PropsWithChildren<ModalContextType>;
/** Modal's Provider Props */
export type ModalProviderProps = PropsWithChildren<{ context: ModalContextType }>;
/** Modal's Layout Props */
export type ModalLayoutProps = PropsWithChildren<IModalLayoutProps> & HTMLAttributes<HTMLElement>;
/** Modal's Portal Props */
export type ModalPortalProps = PropsWithChildren<IModalPortalProps> & HTMLAttributes<HTMLElement>;
/** Modal's Trigger Props */
export type ModalTriggerProps = PropsWithChildren<IModalTriggerProps> & HTMLAttributes<HTMLElement>;
/** Modal's Header Props */
export type ModalHeaderProps = PropsWithChildren<IHeaderProps> & HTMLAttributes<HTMLElement>;
/** Modal's Body Props */
export type ModalBodyProps = PropsWithChildren<IBodyProps> & HTMLAttributes<HTMLElement>;
/** Modal's Footer Props */
export type ModalFooterProps = PropsWithChildren<IFooterProps> & HTMLAttributes<HTMLElement>;
