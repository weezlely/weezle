import type { HTMLAttributes, PropsWithChildren } from "react";
import { forwardRef } from "react";

export interface TypographyProps extends HTMLAttributes<HTMLSpanElement>, PropsWithChildren {}

export const Typography = forwardRef<HTMLSpanElement, TypographyProps>((props, forwardedRef) => {
  const { className, style, children, ...rest } = props;

  return (
    <span ref={forwardedRef} className={className} style={style} {...rest}>
      {children}
    </span>
  );
});
