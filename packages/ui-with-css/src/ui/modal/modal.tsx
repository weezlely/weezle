import * as R from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

import { useClickOutSide, useToggle } from "../../hooks";
import { eventHandler } from "../../functions";
import { useModalContext } from "./modal.context";
import { ModalProvider } from "./modal.provider";
import * as styles from "./styles.css";
import type {
  ModalContextProps,
  ModalProviderProps,
  ModalPortalProps,
  ModalLayoutProps,
  ModalTriggerProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
} from "./modal.type";

// Modal's Container
const ModalContainer: R.FC<ModalProviderProps> = ({ children }) => {
  const { isOpen, onClose, onOpen } = useToggle();
  return (
    <ModalProvider isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
      {children}
    </ModalProvider>
  );
};

// ModalContainer.propTypes = {
//   children: PropTypes.node,
// };

// Modal's Portal
const ModalPortal: R.FC<ModalPortalProps> = ({ modalId = "root-modal", style, children, ...rest }) => {
  const container = document.getElementById(modalId);
  if (container === null) return null;

  return createPortal(children, container);
};

// Modal's Layout
const ModalLayout = <T extends HTMLDivElement>(
  { layoutStyle = undefined, dimmedStyle = undefined, children, ...rest }: ModalLayoutProps,

  forwardedRef: R.ForwardedRef<T>
) => {
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
  const dynamicDimmedStyle: R.CSSProperties = { ...dimmedStyle };
  const dynamicLayoutStyle: R.CSSProperties = { ...layoutStyle };

  /**
   * @description classNames for static-change style
   */
  const dimmedCn = clsx("dimmed", ...staticDimmedStyle);
  const layoutCn = clsx("modal__layout", ...staticLayoutStyle);
  return (
    <div ref={forwardedRef} className={dimmedCn} style={dynamicDimmedStyle}>
      <div ref={ref} className={layoutCn} style={dynamicLayoutStyle} {...rest}>
        {children}
      </div>
    </div>
  );
};

// Modal's Trigger
const ModalTrigger = <T extends HTMLButtonElement>(
  { className = "", onClick = undefined, style, children, ...rest }: ModalTriggerProps,

  forwardedRef: R.ForwardedRef<T>
) => {
  const { isOpen, onOpen, onClose } = useModalContext();

  const onToggle = () => (isOpen ? onClose() : onOpen());

  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.trigger];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: R.CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames = clsx(...staticStyle, className);

  return (
    <button ref={forwardedRef} className={classNames} onClick={(e) => eventHandler.funcExecuteChecker(onClick, e, onToggle)} style={dynamicStyle} {...rest}>
      {children}
    </button>
  );
};

// Modal's Header
const ModalHeader = <T extends HTMLDivElement>(
  { className = "", style, children, ...rest }: ModalHeaderProps,

  forwardedRef: R.ForwardedRef<T>
) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.header];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: R.CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames = clsx(...staticStyle, className);
  return (
    <div ref={forwardedRef} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};

// Modal's Body
const ModalBody = <T extends HTMLDivElement>(
  { className = "", style, children, ...rest }: ModalBodyProps,

  forwardedRef: R.ForwardedRef<T>
) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.body];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: R.CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames = clsx(...staticStyle, className);

  return (
    <div ref={forwardedRef} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};

// Modal's Footer
const ModalFooter = <T extends HTMLDivElement>(
  { className = "", style, children, ...rest }: ModalFooterProps,

  forwardedRef: R.ForwardedRef<T>
) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.footer];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: R.CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames = clsx(...staticStyle, className);
  return (
    <div ref={forwardedRef} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};

const Modal = Object.assign(ModalContainer, {
  Portal: ModalPortal,
  Layout: R.forwardRef(ModalLayout),
  Trigger: R.forwardRef(ModalTrigger),
  Header: R.forwardRef(ModalHeader),
  Body: R.forwardRef(ModalBody),
  Footer: R.forwardRef(ModalFooter),
});
export default Modal;
