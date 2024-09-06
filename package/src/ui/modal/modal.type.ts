import type { CSSProperties, PropsWithChildren } from "react";

import type { ComponentProps } from "../../types";

type ModalContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

// Modal's Context Prop
export interface ModalContextProps extends ModalContextType {}

// Modal's Provider Prop
export interface ModalProviderProps extends PropsWithChildren<ModalContextType> {}

// Modal's Layout Prop
export interface ModalLayoutProps extends ComponentProps<HTMLElement> {
  layoutStyle?: CSSProperties;
  dimmedStyle?: CSSProperties;
}

// Modal's Portal Prop
export interface ModalPortalProps extends ComponentProps<HTMLElement> {
  modalId?: string;
}
// Modal's Trigger Prop
export interface ModalTriggerProps extends ComponentProps<HTMLElement> {}

// Modal's Header Prop
export interface ModalHeaderProps extends ComponentProps<HTMLElement> {}

// Modal's Body Prop
export interface ModalBodyProps extends ComponentProps<HTMLElement> {}

// Modal's Footer Prop
export interface ModalFooterProps extends ComponentProps<HTMLElement> {}
