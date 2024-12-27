import { forwardRef } from "react";
import { Typography, TypographyProps } from "./typography";

interface StyledTypography extends TypographyProps {
  styled: string[];
}

export const StyledTypography = forwardRef<HTMLSpanElement, StyledTypography>((props, forwardedRef) => {
  const { styled, className, children, ...rest } = props;

  const combinedClassName = [className, ...styled].filter(Boolean).join(" ");

  return (
    <Typography ref={forwardedRef} className={combinedClassName} {...rest}>
      {children}
    </Typography>
  );
});
