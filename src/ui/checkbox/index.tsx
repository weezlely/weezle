import { type CSSProperties, type Ref, forwardRef } from "react";

import { useCheckBoxContext } from "./context";
import { CheckBoxProvider } from "./provider";
import { eventHandler } from "utils";

import { CheckBoxInputProps, CheckBoxTextProps, CheckBoxWrapperProps } from "./index.type";
import * as styled from "./index.style";

/** 체크 박스 - Label */
const CheckBoxWrapper = ({ style, children, ...rest }: CheckBoxWrapperProps) => {
  return (
    <label style={{ ...styled.labelStyle, ...style }} {...rest}>
      {children}
    </label>
  );
};

/** 체크 박스 - INPUT */
const CheckBoxInput = forwardRef(function CheckBoxInput(
  { id = undefined, className = "", checkColor = "white", onClick = () => {}, style, children, ...rest }: CheckBoxInputProps,
  forwardedRef: Ref<HTMLInputElement>
) {
  const { isChecked, setIsChecked } = useCheckBoxContext();

  const checkedStyle: CSSProperties = {
    borderColor: "transparent",
    backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill="${checkColor}" xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
    backgroundSize: "100% 100%",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    backgroundColor: "limegreen",
  };

  return (
    <input
      id={id}
      type="checkbox"
      ref={forwardedRef}
      className={`checkbox ${className}`}
      onClick={(e) => eventHandler.handleClick(onClick, e, () => setIsChecked(!isChecked))}
      style={{ ...styled.inputStyle, ...(isChecked && checkedStyle), ...style }}
      {...rest}
    />
  );
});

/** 체크 박스 - Paragraph */
const CheckBoxText = ({ style, children, ...rest }: CheckBoxTextProps) => {
  return (
    <p style={{ ...styled.pStyle, ...style }} {...rest}>
      {children}
    </p>
  );
};

const CheckBox = Object.assign(CheckBoxProvider, {
  Wrapper: CheckBoxWrapper,
  Check: CheckBoxInput,
  Text: CheckBoxText,
});

export default CheckBox;
