import type { CSSProperties } from "react";
import { useSwitchContext } from "./context";
import { SwitchProvider } from "./provider";

import { SwitchContainerProps, SwitchLabelProps, SwitchToggleProps } from "./index.type";
import * as styled from "./index.style";

import { colors, fontWeights } from "styles";

const SwitchButtonContainer = ({
  primary = colors.primary_50,
  secondary = colors.secondary_50,
  fontWeight = "bold",
  style,
  children,
  ...rest
}: SwitchContainerProps) => {
  const { isOn, toggle } = useSwitchContext();

  const propsStyle: CSSProperties = {
    backgroundColor: isOn ? primary : secondary,
    color: colors.white,
    fontWeight: fontWeights[fontWeight],
  };
  return (
    <div onClick={() => toggle(!isOn)} style={{ ...styled.containerStyle, ...propsStyle, ...style }} {...rest}>
      {children}
    </div>
  );
};

const SwitchButtonToggle = ({ style, children, ...rest }: SwitchToggleProps) => {
  const { isOn } = useSwitchContext();

  const propsStyle = (isOn: boolean): CSSProperties => {
    return {
      left: isOn ? "calc(100%-27.5px)" : "2.5px",
      transition: "left 0.3s ease-in-out",
    };
  };

  return (
    isOn && (
      <div style={{ ...styled.toggleStyle, ...propsStyle(isOn), ...style }} {...rest}>
        {children}
      </div>
    )
  );
};

const SwitchButtonLabel = ({ style, children, ...rest }: SwitchLabelProps) => {
  return (
    <span style={{ ...styled.titleStyle, ...style }} {...rest}>
      {children}
    </span>
  );
};

const SwitchButton = Object.assign(SwitchProvider, {
  Container: SwitchButtonContainer,
  Toggle: SwitchButtonToggle,
  Label: SwitchButtonLabel,
});

export default SwitchButton;
