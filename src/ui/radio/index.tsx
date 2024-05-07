import React, { ChangeEvent, Children, Ref, cloneElement } from "react";
import { eventHandler } from "utils";

import { useRadioContext } from "./context";
import { RadioProvider } from "./provider";
import { RadioGroupProps, RadioOptionProps } from "./type";
import * as styled from "./style";

const RadioGroup = ({ name = "radio-group", style, children, ...rest }: RadioGroupProps) => {
  return (
    <>
      {Children.map(children, (child) =>
        cloneElement(child as any, {
          name,
          ...rest,
        })
      )}
    </>
  );
};

const RadioOption = React.forwardRef(function (
  {
    /** Radio Option props */
    id = "",
    label = "",
    size = "md",
    value = "",
    name = "",
    defaultChecked = false,
    onChange = undefined,
    style,
    children,
    ...rest
  }: RadioOptionProps,
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

  return (
    <label id={id} htmlFor={label} style={{ ...styled.labelStyle, ...style }}>
      <input
        ref={forwardedRef}
        id={label}
        type="radio"
        value={value}
        name={name}
        checked={defaultChecked ? defaultChecked : selectedValue === value}
        onChange={handleRadioChange}
        style={{ ...styled.inputStyle }}
        {...rest}
      />
      <span style={{ ...styled.spanStyle }}>{children}</span>
    </label>
  );
});

const Radio = Object.assign(RadioProvider, {
  Group: RadioGroup,
  Option: RadioOption,
});
export default Radio;
