import type { CSSProperties, PropsWithChildren } from "react";

import type { ElementProps } from "../../types";

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
export interface ModalLayoutProps extends ElementProps<HTMLElement> {
  layoutStyle?: CSSProperties;
  dimmedStyle?: CSSProperties;
}

// Modal's Portal Prop
export interface ModalPortalProps extends ElementProps<HTMLElement> {
  modalId?: string;
}
// Modal's Trigger Prop
export interface ModalTriggerProps extends ElementProps<HTMLElement> {}

// Modal's Header Prop
export interface ModalHeaderProps extends ElementProps<HTMLElement> {}

// Modal's Body Prop
export interface ModalBodyProps extends ElementProps<HTMLElement> {}

// Modal's Footer Prop
export interface ModalFooterProps extends ElementProps<HTMLElement> {}
