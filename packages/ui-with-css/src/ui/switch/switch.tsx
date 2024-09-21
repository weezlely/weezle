import * as React from "react";

import type { CSSProperties } from "react";
import clsx from "clsx";

// import { colors, fontWeights } from "../../styles";

import { useSwitchContext } from "./switch.context";
import { SwitchProvider } from "./switch.provider";
import type { SwitchContainerProps, SwitchLabelProps, SwitchToggleProps } from "./switch.type";
import * as styles from "./styles.css";

const SwitchContainer = <T extends HTMLDivElement>(
  { primary = "", secondary = "", fontColor = "#fff", fontWeight = "bold", className, style, children, ...rest }: SwitchContainerProps,

  forwardedRef: React.ForwardedRef<T>
) => {
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
    <div ref={forwardedRef} className={classNames} onClick={() => toggle(!isOn)} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};

const SwitchToggle = <T extends HTMLDivElement>(
  { className, style, children, ...rest }: SwitchToggleProps,

  forwardedRef: React.ForwardedRef<T>
) => {
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
    <div ref={forwardedRef} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};

const SwitchLabel = <T extends HTMLElement>(
  { className, style, children, ...rest }: SwitchLabelProps,

  forwardedRef: React.ForwardedRef<T>
) => {
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
    <span ref={forwardedRef} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </span>
  );
};

const Switch = Object.assign(SwitchProvider, {
  Container: React.forwardRef(SwitchContainer),
  Toggle: React.forwardRef(SwitchToggle),
  Label: React.forwardRef(SwitchLabel),
});

export default Switch;
