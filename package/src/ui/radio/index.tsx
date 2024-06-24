import type { CSSProperties, ChangeEvent, Ref } from "react";
import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import type { RadioGroupProps, RadioItemProps, RadioInputProps, RadioLabelProps } from "./index.type";
import { useRadioContext } from "./index.context";
import { RadioProvider } from "./index.provider";
import * as styles from "./styles.css";

const RadioGroup = ({ name = "radio-group", style, children, ...rest }: RadioGroupProps) => {
  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as any, {
          name,
          ...rest,
        })
      )}
    </>
  );
};
RadioGroup.propTypes = {
  name: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

const RadioLabel = React.forwardRef(function Label(
  {
    /** @description RadioGroup's label Props */
    id = "",
    label = "",
    checked = true,
    circleColor = "#f86480",
    backgroundColor = "#f86480",
    style,
    children,
    ...rest
  }: RadioLabelProps,
  forwardedRef: Ref<HTMLLabelElement>
) {
  /**
   * @description static-change style depending on the Props
   */
  const labelStaticStyle = [styles.label];
  const spanStaticStyle = [styles.on, { [styles.checked]: checked }];
  /**
   * @description dynamic-change style depending on the Props
   */

  const dynamicCircleStyle: CSSProperties = {
    background: backgroundColor,
    ...style,
  };

  /**
   * @description classNames for static-change style
   */
  const labelClassNames: string = clsx(...labelStaticStyle);
  const spanClassNames: string = clsx(...spanStaticStyle);
  return (
    <label id={id} ref={forwardedRef} htmlFor={label} className={labelClassNames} style={style} {...rest}>
      {children}
      <span className={spanClassNames} style={dynamicCircleStyle} />
      {label}
    </label>
  );
});

RadioLabel.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  circleColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

const RadioInput = React.forwardRef(function Input(
  {
    /** @description RadioGroup's input Props */
    id = undefined,
    name = undefined,
    value = undefined,
    checked = true,
    disabled = false,
    onChange = undefined,
    style,
    ...rest
  }: RadioInputProps,
  forwardedRef: Ref<HTMLInputElement>
) {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.hiddenRadio];

  /**
   * @description dynamic-change style depending on the Props
   */

  const dynamicStyle: CSSProperties = { ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames = clsx(staticStyle);

  return (
    <input
      ref={forwardedRef}
      id={id}
      type="radio"
      className={classNames}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      style={dynamicStyle}
      disabled={disabled}
      {...rest}
    />
  );
});

RadioInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

const RadioOption = React.forwardRef(function (
  {
    /** Radio Option props */
    id = "",
    label = "",
    value = "",
    name = "",
    defaultChecked = false,
    onChange = undefined,
    circleColor,
    backgroundColor,
    style,
    children,
    ...rest
  }: RadioItemProps,
  forwardedRef: Ref<HTMLInputElement>
) {
  const { value: selectedValue, handleChange, propsOnChange } = useRadioContext();

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    if (handleChange && typeof handleChange === "function" && value) {
      handleChange(value);
    }

    if (onChange && typeof onChange === "function") {
      onChange(event);
    }

    if (propsOnChange && typeof propsOnChange === "function") {
      propsOnChange({ value, name });
    }
  };

  const memorizeChecked = React.useMemo(() => (defaultChecked ? defaultChecked : selectedValue === value), [selectedValue]);

  return (
    <RadioLabel id={id} label={label} checked={memorizeChecked} style={style} circleColor={circleColor} backgroundColor={backgroundColor}>
      <RadioInput id={label} ref={forwardedRef} value={value} checked={memorizeChecked} onChange={handleRadioChange} {...rest} />
    </RadioLabel>
  );
});

RadioOption.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  circleColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

const Radio = Object.assign(RadioProvider, {
  Group: RadioGroup,
  Option: RadioOption,
});
export default Radio;

export interface IRadio {
  group: typeof RadioGroup;
  option: typeof RadioOption;
}
