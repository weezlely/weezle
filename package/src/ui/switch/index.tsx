import type { CSSProperties } from "react";
import clsx from "clsx";

// import { colors, fontWeights } from "../../styles";

import { useSwitchContext } from "./index.context";
import { SwitchProvider } from "./index.provider";
import type { SwitchContainerProps, SwitchLabelProps, SwitchToggleProps, SwitchAllProps } from "./index.type";
import * as styles from "./styles.css";

export interface ISwitch extends SwitchAllProps {}
const SwitchContainer = ({
  primary = "",
  secondary = "",
  fontColor = "#fff",
  fontWeight = "bold",
  className,
  style,
  children,
  ...rest
}: SwitchContainerProps) => {
  const { isOn, toggle } = useSwitchContext();

  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.container];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { backgroundColor: isOn ? primary : secondary, color: fontColor, fontWeight: fontWeight, ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(...staticStyle, className);

  return (
    <div className={classNames} onClick={() => toggle(!isOn)} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};

const SwitchToggle = ({ className, style, children, ...rest }: SwitchToggleProps) => {
  const { isOn } = useSwitchContext();

  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.toggle];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { left: isOn ? "calc(100% - 27.5px)" : "2.5px", transition: "left 0.3s ease-in-out", ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(...staticStyle, className);

  return (
    <div className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};

const SwitchLabel = ({ className, style, children, ...rest }: SwitchLabelProps) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.title];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(...staticStyle, className);

  return (
    <span className={classNames} style={dynamicStyle} {...rest}>
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
