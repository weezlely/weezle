import type { Ref, CSSProperties } from "react";
import React from "react";
import { ITypography } from "interfaces/typography.interface";

const typographyStyle: CSSProperties = {};

const Typography = React.forwardRef(function Typography({ id = undefined, style, children, ...rest }: ITypography, forwardRef: Ref<TypographyElement>) {
  const propsStyle: CSSProperties = {};

  return (
    <span id={id} ref={forwardRef} style={{ ...typographyStyle, ...propsStyle, ...style }} {...rest}>
      {children}
    </span>
  );
});
export default Typography;
