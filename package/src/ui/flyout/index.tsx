import type { CSSProperties, MutableRefObject } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import { useHover } from "../../hooks"; // Hooks
import { useFlyoutContext } from "./index.context"; // Context
import { FlyoutProvider } from "./index.provider"; // Provider
import type { FlyoutContainerProps, FlyoutHeaderProps, FlyoutItemProps, FlyoutListProps, FlyoutOverLayProps, FlyoutToggleProps } from "./index.type"; // Types
import * as styles from "./styles.css"; // Styles

// Container
const FlyoutContainer = ({ w = 200, h = 200, style, children, ...rest }: FlyoutContainerProps) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.container];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { width: String(w) + "px", height: String(h) + "px", ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(staticStyle);
  return (
    <FlyoutProvider>
      <div className={classNames} style={dynamicStyle} {...rest}>
        {children}
      </div>
    </FlyoutProvider>
  );
};

FlyoutContainer.propTypes = {
  w: PropTypes.number,
  h: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

// Overlay
const FlyoutOverlay = ({ zIndex = 9, style, children, ...rest }: FlyoutOverLayProps) => {
  const { isOpen, toggle } = useFlyoutContext();
  if (!isOpen) return null;
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.overlay];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { zIndex, ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(staticStyle);

  return (
    <div className={classNames} style={dynamicStyle} onClick={() => toggle(false)} {...rest}>
      {children}
    </div>
  );
};

FlyoutOverlay.prototype = {
  zIndex: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

// Toggle
const FlyoutToggle = ({ style, children, ...rest }: FlyoutToggleProps) => {
  const { isOpen, toggle } = useFlyoutContext();
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.toggle];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(staticStyle);
  return (
    <div className={classNames} onClick={() => toggle(!isOpen)} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};

FlyoutToggle.prototype = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

// Header
const FlyoutHeader = ({ style, children, ...rest }: FlyoutHeaderProps) => {
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
  const classNames: string = clsx(staticStyle);
  return (
    <div className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};

// List
const FlyoutList = ({ position = "relative", w = 200, h = 300, direction = "column", backgroundColor = "#fff", style, children, ...rest }: FlyoutListProps) => {
  const { isOpen } = useFlyoutContext();

  const [targetRef, isHovering] = useHover();

  const propsStyle: CSSProperties = {
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
  const dynamicStyle: CSSProperties = { ...propsStyle, width: String(w) + "px", height: String(h) + "px", ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(staticStyle);

  if (!isOpen) return null;

  return (
    <div ref={targetRef as MutableRefObject<null>} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};

FlyoutList.prototype = {
  position: PropTypes.oneOf(Object.keys(styles.positionVariants)),
  direction: PropTypes.oneOf(Object.keys(styles.directionVariants)),
  backgroundColor: PropTypes.string,
  w: PropTypes.number,
  h: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

// Item
const FlyoutItem = ({ id = undefined, color = "#000", style, children, ...rest }: FlyoutItemProps) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.item];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { color, ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(staticStyle);
  return (
    <div id={id} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};
FlyoutItem.prototype = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

const Flyout = Object.assign(FlyoutContainer, {
  Overlay: FlyoutOverlay,
  Toggle: FlyoutToggle,
  Header: FlyoutHeader,
  List: FlyoutList,
  Item: FlyoutItem,
});

export default Flyout;

// Flyout's Props
export interface IFlyout {
  container: typeof FlyoutContainer;
  overlay: typeof FlyoutOverlay;
  toggle: typeof FlyoutToggle;
  header: typeof FlyoutHeader;
  list: typeof FlyoutList;
  item: typeof FlyoutItem;
}
