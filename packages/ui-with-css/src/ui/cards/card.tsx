import * as React from "react";
import { SimpleCardBodyProps, SimpleCardFooterProps, SimpleCardHeaderProps, SimpleCardWrapperProps } from "./card.type";

const SimpleCardWrapper = <T extends HTMLDivElement>(
  { className, style, children, ...rest }: SimpleCardWrapperProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  return (
    <div ref={forwardedRef} className={className} style={style} {...rest}>
      {children}
    </div>
  );
};

const SimpleCardHeader = <T extends HTMLDivElement>(
  { className, style, children, ...rest }: SimpleCardHeaderProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  return (
    <div ref={forwardedRef} className={className} style={style} {...rest}>
      {children}
    </div>
  );
};

const SimpleCardBody = <T extends HTMLDivElement>(
  { className, style, children, ...rest }: SimpleCardBodyProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  return (
    <div ref={forwardedRef} className={className} style={style} {...rest}>
      {children}
    </div>
  );
};

const SimpleCardFooter = <T extends HTMLDivElement>(
  { className, style, children, ...rest }: SimpleCardFooterProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  return (
    <div ref={forwardedRef} className={className} style={style} {...rest}>
      {children}
    </div>
  );
};

const SimpleCard = Object.assign(React.forwardRef(SimpleCardWrapper), {
  Header: React.forwardRef(SimpleCardHeader),
  Body: React.forwardRef(SimpleCardBody),
  Footer: React.forwardRef(SimpleCardFooter),
});
export default SimpleCard;
