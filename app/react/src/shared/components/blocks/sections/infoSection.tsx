import type { HTMLAttributes, PropsWithChildren } from "react";
import { forwardRef } from "react";

interface InfoSectionWrapperProps extends HTMLAttributes<HTMLElement>, PropsWithChildren {}

const InfoSectionWrapper = forwardRef<HTMLElement, InfoSectionWrapperProps>((props, forwardedRef) => {
  const { className, style, children, ...rest } = props;
  return (
    <section ref={forwardedRef} className={className} style={style} {...rest}>
      <div className="dflx_column gap_10">{children}</div>
    </section>
  );
});
