import type { Ref, CSSProperties } from "react";
import React from "react";
import { ITypography } from "interfaces/typography.interface";
import { fontSizes } from "styles";

const typographyStyle: CSSProperties = {
  fontWeight: "700",
  width: "100%",
};

const Typography = React.forwardRef(function Typography(
  { id = undefined, color = "black", size = "md", textAlign = "center", style, children, ...rest }: ITypography,
  forwardRef: Ref<TypographyElement>
) {
  const propsStyle: CSSProperties = {
    color,
    textAlign,
    fontSize: `${fontSizes[size]}px`,
  };

  return (
    <span id={id} ref={forwardRef} style={{ ...typographyStyle, ...propsStyle, ...style }} {...rest}>
      {children}
    </span>
  );
});
export default Typography;
