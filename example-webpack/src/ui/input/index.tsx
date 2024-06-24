import type { CSSProperties, Ref } from "react";
import { forwardRef } from "react";
import clsx from "clsx";

import * as styles from "./index.styles";
import { InputProps } from "./index.type";

export interface IInput extends InputProps {}
const Input = forwardRef(function Input({ type = "text", className = "input", style, children, ...rest }: InputProps, forwardedRef: Ref<HTMLInputElement>) {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.baseInput];

  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };

  /**
   * @description classNames for static-change style
   */
  const classNames = clsx(className, ...staticStyle);

  return <input type={type} className={classNames} style={dynamicStyle} ref={forwardedRef} />;
});

export default Input;
