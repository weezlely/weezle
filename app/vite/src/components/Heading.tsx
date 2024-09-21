import * as React from "react";
import { HeadingProps, Heading as TaeoUiHeading } from "@weezle/taeo-ui-with-css";

// eslint-disable-next-line react-refresh/only-export-components
export default React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = "h3", id, color = "#fff", backgroundColor = "#000", style, children, ...rest }, forwardedRef) => {
    return (
      <TaeoUiHeading ref={forwardedRef} as={as} id={id} color={color} backgroundColor={backgroundColor} style={style} {...rest}>
        {children}
      </TaeoUiHeading>
    );
  }
);
