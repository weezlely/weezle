import type { CSSProperties } from "react";
/** Context */
import { useFlyoutContext } from "./context";
/** Provider */
import { FlyoutProvider } from "./provider";
/** Types */
import { FlyoutContainerProps, FlyoutHeaderProps, FlyoutItemProps, FlyoutListProps, FlyoutOverLayProps, FlyoutToggleProps } from "./index.type";
/** Styles */
import * as styled from "./index.style";
/** Hooks */
import { useHover } from "hooks";

const FlyoutContainer = ({ style, children, ...rest }: FlyoutContainerProps) => {
  return (
    <FlyoutProvider>
      <div className="flyout__wrapper" style={{ ...styled.containerStyle, ...style }} {...rest}>
        {children}
      </div>
    </FlyoutProvider>
  );
};

const FlyoutOverlay = ({ style, children, ...rest }: FlyoutOverLayProps) => {
  const { isOpen, toggle } = useFlyoutContext();
  if (!isOpen) return null;

  return (
    <div onClick={() => toggle(false)} className="flyout__overlay" style={{ ...styled.overlayStyle, ...style }} {...rest}>
      {children}
    </div>
  );
};
const FlyoutToggle = ({ style, children, ...rest }: FlyoutToggleProps) => {
  const { isOpen, toggle } = useFlyoutContext();

  return (
    <div className="flyout__toggle" onClick={() => toggle(!isOpen)} style={{ ...styled.toggleStyle, ...style }} {...rest}>
      {children}
    </div>
  );
};
const FlyoutHeader = ({ style, children, ...rest }: FlyoutHeaderProps) => {
  return (
    <div className="flyout__header" style={{ ...styled.headerStyle, ...style }} {...rest}>
      {children}
    </div>
  );
};

const FlyoutList = ({ backgroundColor = "#fff", style, children, ...rest }: FlyoutListProps) => {
  const { isOpen } = useFlyoutContext();

  if (!isOpen) return null; // Early return

  const [targetRef, isHovering] = useHover();

  const propsStyle: CSSProperties = {
    backgroundColor,
    boxShadow: isHovering ? "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)" : "none",
  };

  return (
    <div ref={targetRef as React.MutableRefObject<null>} className="flyout__list" style={{ ...styled.listStyle, ...propsStyle, ...style }} {...rest}>
      {children}
    </div>
  );
};
const FlyoutItem = ({ id = undefined, color = "#000", style, children, ...rest }: FlyoutItemProps) => {
  const propsStyle: CSSProperties = { color };

  return (
    <div className={`flyout__item--${id}`} style={{ ...styled.itemStyle, ...propsStyle, ...style }} {...rest}>
      {children}
    </div>
  );
};

const Flyout = Object.assign(FlyoutContainer, {
  Overlay: FlyoutOverlay,
  Toggle: FlyoutToggle,
  Header: FlyoutHeader,
  List: FlyoutList,
  Item: FlyoutItem,
});

export default Flyout;
