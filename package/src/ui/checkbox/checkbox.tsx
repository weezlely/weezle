import * as React from "react";
import clsx from "clsx";

import { eventHandler } from "../../functions";
import type { CheckBoxInputProps, CheckBoxTextProps, CheckBoxWrapperProps } from "./checkbox.type";
import { useCheckBoxContext } from "./checkbox.context";
import { CheckBoxProvider } from "./checkbox.provider";
import * as styles from "./styles.css";

// Checkbox Container
const CheckBoxContainer = <T extends HTMLLabelElement>(
  { style, children, ...rest }: CheckBoxWrapperProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.baseLabel];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: React.CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(...staticStyle);

  return (
    <label ref={forwardedRef} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </label>
  );
};

// Checkbox Check
const CheckBoxInput = <T extends HTMLInputElement>(
  {
    id = undefined,
    value,
    className = "",
    checkColor = "white",
    backgroundColor = "limegreen",
    onClick = () => {},
    style,
    children,
    ...rest
  }: CheckBoxInputProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  const checkImageUrl = `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='${checkColor}' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e"`;

  const { checkedValue, setCheckedValue } = useCheckBoxContext();

  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.baseInput, { [styles.baseChecked]: checkedValue === value }];

  /**
   * @description dynamic-change style depending on the Props
   */

  const dynamicStyle: React.CSSProperties = {
    backgroundColor: checkedValue === value ? backgroundColor : "transparent",
    backgroundImage: checkedValue === value ? checkImageUrl : "none",
    ...style,
  };

  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(...staticStyle);

  return (
    <input
      ref={forwardedRef!}
      id={id}
      type="checkbox"
      className={classNames}
      style={dynamicStyle}
      onClick={(e) => eventHandler.funcExecuteChecker(onClick, e, () => setCheckedValue(value))}
      {...rest}
    />
  );
};

// Checkbox Text about Paragraph
const CheckBoxText = <T extends HTMLParagraphElement>(
  { style, children, ...rest }: CheckBoxTextProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.baseP];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: React.CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(...staticStyle);

  return (
    <p ref={forwardedRef} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </p>
  );
};

const CheckBox = Object.assign(React.forwardRef(CheckBoxProvider), {
  Container: React.forwardRef(CheckBoxContainer),
  Check: React.forwardRef(CheckBoxInput),
  Text: React.forwardRef(CheckBoxText),
});

export default CheckBox;
