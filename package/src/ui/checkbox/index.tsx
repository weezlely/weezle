import { type CSSProperties, type Ref, forwardRef } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import { useCheckBoxContext } from "./index.context";
import { CheckBoxProvider } from "./index.provider";
import { CheckBoxInputProps, CheckBoxTextProps, CheckBoxWrapperProps } from "./index.type";
import * as styles from "./index.css";
import { eventHandler } from "functions";

/** Checkbox Container */
const CheckBoxContainer = ({ style, children, ...rest }: CheckBoxWrapperProps) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.label];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(...staticStyle);

  return (
    <label className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </label>
  );
};
CheckBoxContainer.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

/** Checkbox input */
const CheckBoxInput = forwardRef(function CheckBoxInput(
  {
    // Props
    id = undefined,
    className = "",
    checkColor = "white",
    backgroundColor = "limegreen",
    onClick = () => {},
    style,
    children,
    ...rest
  }: CheckBoxInputProps,
  forwardedRef: Ref<HTMLInputElement>
) {
  const { isChecked, setIsChecked } = useCheckBoxContext();

  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.input, { [styles.checked]: isChecked }];

  /**
   * @description dynamic-change style depending on the Props
   */

  const dynamicStyle: CSSProperties = {
    backgroundColor: isChecked ? backgroundColor : "transparent",
    backgroundImage: isChecked
      ? `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='${checkColor}' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`
      : "none",
    ...style,
  };
  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(...staticStyle);

  return (
    <input
      // Props
      id={id}
      type="checkbox"
      ref={forwardedRef!}
      className={classNames}
      style={dynamicStyle}
      onClick={(e) => eventHandler.handleClick(onClick, e, () => setIsChecked(!isChecked))}
      {...rest}
    />
  );
});
CheckBoxInput.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  checkColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

/** 체크 박스 - Paragraph */
const CheckBoxText = ({ style, children, ...rest }: CheckBoxTextProps) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.p];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(...staticStyle);

  return (
    <p className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </p>
  );
};

CheckBoxText.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

const CheckBox = Object.assign(CheckBoxProvider, {
  Container: CheckBoxContainer,
  Check: CheckBoxInput,
  Text: CheckBoxText,
});

export default CheckBox;

// Checkbox's all Props
export interface ICheckbox {
  container: typeof CheckBox.Container;
  check: typeof CheckBox.Check;
  text: typeof CheckBox.Text;
}
