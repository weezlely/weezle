import type { ReactNode, FC, CSSProperties, Ref } from "react";
import * as React from "react";
import clsx from "clsx";

import * as styles from "./styles.css";
import { InputProps } from "./index.type";

export interface IInput extends InputProps {
  style?: CSSProperties;
  children: ReactNode;
}

const Input: FC<IInput> = React.forwardRef<HTMLInputElement, IInput>(function Input(
  { type = "text", className = "input", style, children, ...rest },
  forwardedRef: Ref<HTMLInputElement>
) {
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

  return <input type={type} className={classNames} style={dynamicStyle} ref={forwardedRef} {...rest} />;
});

export default Input;
