import React, { Children, Ref, cloneElement } from "react";

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
        })
      )}
    </>
  );
};

const RadioOption = React.forwardRef(function (
  {
    /** Radio Option props */
    id = "",
    size = "md",
    value = "",
    name = "",
    defaultChecked = false,
    checked = false,
    style,
    children,
    ...rest
  }: RadioOptionProps,
  forwardedRef: Ref<HTMLInputElement>
) {
  const { value: selectedValue } = useRadioContext();

  return (
    <label htmlFor={id} style={{ ...styled.labelStyle, ...style }}>
      <input
        ref={forwardedRef}
        id={id}
        type="radio"
        value={value}
        name={name}
        checked={checked ? checked : selectedValue === value}
        defaultChecked={defaultChecked}
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
