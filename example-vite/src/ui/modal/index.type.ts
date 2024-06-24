import type { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";

type ContextProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};
type ProviderProps = object & ContextProps;

type PortalProps = {
  modalId?: string;
};

type LayoutProps = {
  layoutStyle?: CSSProperties;
  dimmedStyle?: CSSProperties;
};

type TriggerProps = {};

type HeaderProps = {};
type BodyProps = {};
type FooterProps = {};

// Modal's Context Prop
export type ModalContextProps = PropsWithChildren<ContextProps>;

// Modal's Provider Prop
export type ModalProviderProps = PropsWithChildren<ProviderProps>;

// Modal's Layout Prop
export type ModalLayoutProps = PropsWithChildren<LayoutProps> & HTMLAttributes<HTMLElement>;

// Modal's Portal Prop
export type ModalPortalProps = PropsWithChildren<PortalProps> & HTMLAttributes<HTMLElement>;

// Modal's Trigger Prop
export type ModalTriggerProps = PropsWithChildren<TriggerProps> & HTMLAttributes<HTMLElement>;

// Modal's Header Prop
export type ModalHeaderProps = PropsWithChildren<HeaderProps> & HTMLAttributes<HTMLElement>;

// Modal's Body Prop
export type ModalBodyProps = PropsWithChildren<BodyProps> & HTMLAttributes<HTMLElement>;

// Modal's Footer Prop
export type ModalFooterProps = PropsWithChildren<FooterProps> & HTMLAttributes<HTMLElement>;

// Modal's All Props
export type ModalAllProps = ModalContextProps & ModalProviderProps & ModalPortalProps & ModalLayoutProps & ModalHeaderProps & ModalBodyProps & ModalFooterProps;
