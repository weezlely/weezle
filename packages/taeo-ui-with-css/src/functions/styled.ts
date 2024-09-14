/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentProps, ForwardedRef, JSXElementConstructor, NamedExoticComponent, PropsWithoutRef } from "react";
import { createElement, forwardRef } from "react";
import { CSSProperties } from "@vanilla-extract/css";

import type { Evaluatable, HTMLAnyElement } from "../types";

import mergeProps from "./mergeProps";
import evaluate from "./evaluate";

type ClassName<Props> = Evaluatable<string, [Props]>;
type Style<Props> = Evaluatable<CSSProperties, [Props]>;

/**
 * Combine a component with className and style, which can be static or computed from props.
 */
export default function styled<ExtraProps extends Record<string, any> | undefined, C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>(
  base: C,
  className?: ClassName<ComponentProps<C> & ExtraProps>,
  style?: Style<ComponentProps<C> & ExtraProps>
): NamedExoticComponent<PropsWithoutRef<ComponentProps<C> & ExtraProps>> {
  const StyledComponent = forwardRef((props: (ComponentProps<C> & ExtraProps) | any, ref) => {
    return createElement(
      base,
      mergeProps(props as ComponentProps<any>, {
        className: evaluate(className)(props),
        style: evaluate(style)(props),
        ref,
      })
    );
  });
  const name = (base as any).displayName ?? (base as any).name ?? base;
  StyledComponent.displayName = `styled(${name})`;
  return StyledComponent;
}

/* 
  const StyledComponent = <T extends HTMLAnyElement>(props: ComponentProps<C>, ref: ForwardedRef<T>) => {
    return createElement(
      base,
      mergeProps(props as ComponentProps<any>, {
        className: evaluate(className)(props),
        style: evaluate(style)(props),
        ref,
      })
    );
  };
  const name = (base as any).displayName ?? (base as any).name ?? base;
  const styledName = `styled(${name})`;

  StyledComponent.displayName = styledName;

  return forwardRef(StyledComponent); */
