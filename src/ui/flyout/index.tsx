import React, { CSSProperties } from "react";
import { FlyoutContainerProps, FlyoutHeaderProps, FlyoutItemProps, FlyoutListProps, FlyoutOverLayProps, FlyoutToggleProps } from "./index.type";
import { FlyoutProvider } from "./provider";

import * as styled from "./index.style";
import { useFlyoutContext } from "./context";

const FlyoutContainer = ({ isOpen, toggle, style, children, ...rest }: FlyoutContainerProps) => {
  return (
    <FlyoutProvider isOpen={isOpen} toggle={toggle}>
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
  if (!isOpen) return null;

  const propsStyle: CSSProperties = { backgroundColor };

  return (
    <div className="flyout__list" style={{ ...styled.listStyle, ...propsStyle, ...style }} {...rest}>
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
