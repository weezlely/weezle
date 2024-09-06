import * as React from "react";
import clsx from "clsx";

import { useHover } from "../../hooks"; // Hooks
import type { FlyoutContainerProps, FlyoutHeaderProps, FlyoutItemProps, FlyoutListProps, FlyoutOverLayProps, FlyoutToggleProps } from "./flyout.type";
import { useFlyoutContext } from "./flyout.context"; // Context
import { FlyoutProvider } from "./flyout.provider"; // Provider
import * as styles from "./styles.css"; // Styles

// Flyout's Container
const FlyoutContainer = <T extends HTMLDivElement>(
  { w = 200, h = 200, style, children, ...rest }: FlyoutContainerProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.container];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: React.CSSProperties = { width: String(w) + "px", height: String(h) + "px", ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(staticStyle);
  return (
    <FlyoutProvider>
      <div ref={forwardedRef} className={classNames} style={dynamicStyle} {...rest}>
        {children}
      </div>
    </FlyoutProvider>
  );
};

// Flyout's Overlay
const FlyoutOverlay = <T extends HTMLDivElement>(
  { zIndex = 9, style, children, ...rest }: FlyoutOverLayProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  const { isOpen, toggle } = useFlyoutContext();
  if (!isOpen) return null;
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.overlay];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: React.CSSProperties = { zIndex, ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(staticStyle);

  return (
    <div ref={forwardedRef} className={classNames} style={dynamicStyle} onClick={() => toggle(false)} {...rest}>
      {children}
    </div>
  );
};

// Flyout's Toggle
const FlyoutToggle = <T extends HTMLDivElement>(
  { style, children, ...rest }: FlyoutToggleProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  const { isOpen, toggle } = useFlyoutContext();
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.toggle];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: React.CSSProperties = { ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(staticStyle);
  return (
    <div ref={forwardedRef} className={classNames} onClick={() => toggle(!isOpen)} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};

// Flyout's Header
const FlyoutHeader = <T extends HTMLDivElement>(
  { style, children, ...rest }: FlyoutHeaderProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.header];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: React.CSSProperties = { ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(staticStyle);
  return (
    <div ref={forwardedRef} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};

// Flyout's List
const FlyoutList = ({ position = "relative", w = 200, h = 300, direction = "column", backgroundColor = "#fff", style, children, ...rest }: FlyoutListProps) => {
  const { isOpen } = useFlyoutContext();

  const [targetRef, isHovering] = useHover();

  const propsStyle: React.CSSProperties = {
    backgroundColor,
    boxShadow: isHovering ? "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)" : "none",
  };

  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.list, styles.positionVariants[position], styles.directionVariants[direction]];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: React.CSSProperties = { ...propsStyle, width: String(w) + "px", height: String(h) + "px", ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(staticStyle);

  if (!isOpen) return null;

  return (
    <div ref={targetRef as React.MutableRefObject<null>} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};

// Flyout's Item
const FlyoutItem = <T extends HTMLDivElement>(
  { id = undefined, color = "#000", style, children, ...rest }: FlyoutItemProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.item];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: React.CSSProperties = { color, ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(staticStyle);
  return (
    <div ref={forwardedRef} id={id} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};

const Flyout = Object.assign(React.forwardRef(FlyoutContainer), {
  Overlay: React.forwardRef(FlyoutOverlay),
  Toggle: React.forwardRef(FlyoutToggle),
  Header: React.forwardRef(FlyoutHeader),
  List: FlyoutList,
  Item: React.forwardRef(FlyoutItem),
});

export default Flyout;
