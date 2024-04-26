import * as React from "react";
import { createPortal } from "react-dom";
// Context
import { useModalContext } from "./context";
// Provider
import { ModalProvider } from "./provider";
// Hooks
import { useClickOutSide, useToggle } from "hooks";
// Types
import type { ModalBodyProps, ModalContextType, ModalFooterProps, ModalHeaderProps, ModalLayoutProps, ModalPortalProps, ModalTriggerProps } from "./index.type";
// Style
import * as styled from "./index.style";
import { eventHandler } from "utils";

/** Modal Container */
const ModalContainer = () => {
  const { isOpen, onClose, onOpen } = useToggle();
  return <ModalProvider context={{ isOpen, onClose, onOpen }}></ModalProvider>;
};

/** Modal Portal */
const ModalPortal = ({ modalId = "root-modal", style, children, ...rest }: ModalPortalProps) => {
  const container = document.getElementById(modalId);
  if (container === null) return null;
  return createPortal(children, container);
};

/** Modal Layout */
const ModalLayout = ({ layoutStyle = undefined, dimmedStyle = undefined, children, ...rest }: ModalLayoutProps) => {
  const context = useModalContext();
  const ref = useClickOutSide<HTMLDivElement, ModalContextType>(context.onClose, context);

  return (
    <div style={{ ...styled.dimmedStyle, ...dimmedStyle }}>
      <div ref={ref} style={{ ...styled.layoutStyle, ...layoutStyle }} {...rest}>
        {children}
      </div>
    </div>
  );
};

/** Modal Trigger */
const ModalTrigger = ({ onClick = undefined, style, children, ...rest }: ModalTriggerProps) => {
  const context = useModalContext();

  const onToggle = () => (context.isOpen ? context.onClose : context.onOpen);

  return (
    <button onClick={(e) => eventHandler.handleClick(onClick, e, onToggle)} style={{ ...style }} {...rest}>
      {children}
    </button>
  );
};

/** Modal Header */
const ModalHeader = ({ style, children, ...rest }: ModalHeaderProps) => {
  return (
    <div style={{ ...styled.headerStyle, ...style }} {...rest}>
      {children}
    </div>
  );
};

/** Modal Body */
const ModalBody = ({ style, children, ...rest }: ModalBodyProps) => {
  return (
    <div style={{ ...styled.bodyStyle, ...style }} {...rest}>
      {children}
    </div>
  );
};

/** Modal Footer */
const ModalFooter = ({ style, children, ...rest }: ModalFooterProps) => {
  return (
    <div style={{ ...styled.footerStyle, ...style }} {...rest}>
      {children}
    </div>
  );
};

const Modal = Object.assign(ModalContainer, {
  Portal: ModalPortal,
  Layout: ModalLayout,
  Trigger: ModalTrigger,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
export default Modal;
