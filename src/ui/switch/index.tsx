import type { CSSProperties } from "react";

import { useSwitchContext } from "./context";
import { SwitchProvider } from "./provider";
import type { SwitchContainerProps, SwitchLabelProps, SwitchToggleProps } from "./type";
import * as styled from "./style";
import { colors, fontWeights } from "styles";

const SwitchContainer = ({
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

const SwitchToggle = ({ style, children, ...rest }: SwitchToggleProps) => {
  const { isOn } = useSwitchContext();

  const propsStyle: CSSProperties = {
    left: isOn ? "calc(100% - 27.5px)" : "2.5px",
    transition: "left 0.3s ease-in-out",
  };

  return (
    <div style={{ ...styled.toggleStyle, ...propsStyle, ...style }} {...rest}>
      {children}
    </div>
  );
};

const SwitchLabel = ({ style, children, ...rest }: SwitchLabelProps) => {
  return (
    <span style={{ ...styled.titleStyle, ...style }} {...rest}>
      {children}
    </span>
  );
};

const Switch = Object.assign(SwitchProvider, {
  Container: SwitchContainer,
  Toggle: SwitchToggle,
  Label: SwitchLabel,
});

export default Switch;
