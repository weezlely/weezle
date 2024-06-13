import { createPortal } from "react-dom";
import type { CSSProperties } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import { useClickOutSide, useToggle } from "../../hooks";
import { eventHandler } from "../../utils";

import { useModalContext } from "./index.context";
import { ModalProvider } from "./index.provider";
import * as styles from "./index.css";
import type {
  ModalContextProps,
  ModalProviderProps,
  ModalPortalProps,
  ModalLayoutProps,
  ModalTriggerProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalAllProps,
} from "./index.type";

export interface IModal extends ModalAllProps {}
// Modal's Container
const ModalContainer = ({ children }: ModalProviderProps) => {
  const { isOpen, onClose, onOpen } = useToggle();
  return (
    <ModalProvider isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
      {children}
    </ModalProvider>
  );
};

ModalContainer.propTypes = {
  children: PropTypes.node,
};

// Modal's Portal
const ModalPortal = ({ modalId = "root-modal", style, children, ...rest }: ModalPortalProps) => {
  const container = document.getElementById(modalId);
  if (container === null) return null;

  return createPortal(children, container);
};

ModalPortal.propTypes = {
  modalId: PropTypes.string.isRequired,
  children: PropTypes.node,
};

// Modal's Layout
const ModalLayout = ({ layoutStyle = undefined, dimmedStyle = undefined, children, ...rest }: ModalLayoutProps) => {
  const context = useModalContext();
  const ref = useClickOutSide<HTMLDivElement, ModalContextProps>(context.onClose, context);

  /**
   * @description static-change style depending on the Props
   */
  const staticDimmedStyle = [styles.dimmed];
  const staticLayoutStyle = [styles.layout];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicDimmedStyle: CSSProperties = { ...dimmedStyle };
  const dynamicLayoutStyle: CSSProperties = { ...layoutStyle };

  /**
   * @description classNames for static-change style
   */
  const dimmedCn = clsx("dimmed", ...staticDimmedStyle);
  const layoutCn = clsx("modal__layout", ...staticLayoutStyle);
  return (
    <div className={dimmedCn} style={dynamicDimmedStyle}>
      <div ref={ref} className={layoutCn} style={dynamicLayoutStyle} {...rest}>
        {children}
      </div>
    </div>
  );
};
ModalLayout.propTypes = {
  dimmedStyle: PropTypes.object,
  layoutStyle: PropTypes.object,
  children: PropTypes.node,
};

// Modal's Trigger
const ModalTrigger = ({ className = "", onClick = undefined, style, children, ...rest }: ModalTriggerProps) => {
  const context = useModalContext();

  const onToggle = () => (context.isOpen ? context.onClose : context.onOpen);

  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.trigger];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames = clsx(...staticStyle, className);

  return (
    <button className={classNames} onClick={(e) => eventHandler.handleClick(onClick, e, onToggle)} style={dynamicStyle} {...rest}>
      {children}
    </button>
  );
};
ModalTrigger.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

// Modal's Header
const ModalHeader = ({ className = "", style, children, ...rest }: ModalHeaderProps) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.header];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames = clsx(...staticStyle, className);
  return (
    <div className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};
ModalHeader.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};

// Modal's Body
const ModalBody = ({ className = "", style, children, ...rest }: ModalBodyProps) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.body];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames = clsx(...staticStyle, className);

  return (
    <div className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};
ModalBody.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};
// Modal's Footer
const ModalFooter = ({ className = "", style, children, ...rest }: ModalFooterProps) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.footer];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames = clsx(...staticStyle, className);
  return (
    <div className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};
ModalFooter.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
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
