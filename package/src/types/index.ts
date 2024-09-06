import type { CSSProperties, HtmlHTMLAttributes, PropsWithChildren, ReactNode } from "react";

import type { StrOrNum } from "./value.type";
import type { BackgroundColorPropsType, ColorPropsType, FontWeightPropsType, SizePropsType, VariantPropsType } from "./props.type";
import type { SizeWHObject, ColorObject, KeyAbleObject, ThemeObject, EventObject, SizeObject, FontWeightObject } from "./object.type";
import { BackgroundColorProps, BorderColorProps, ColorProps } from "./css.type";

// Values
export type Id = StrOrNum;

// Props
export type Variant = VariantPropsType;
export type Size = SizePropsType;
export type FontWeight = FontWeightPropsType;
export type Color = ColorProps;
export type BackgroundColor = BackgroundColorProps;
export type BorderColor = BorderColorProps;

// Objects
export type Colors = ColorObject; // Color Object type (Key-value)
export type FontWeights = FontWeightObject;
export type SizeWHs = SizeWHObject; // Size Object type
export type Sizes = SizeObject; // Size Object type (Key-value)
export type KeyAbles = KeyAbleObject; // Key able type (Key-value)
export type Themes = ThemeObject; // Theme
export type Events = EventObject; // Event

/**
 * Event.0
  MouseEventButton = Mouse's button event
  MouseEventInput = Mouse's input event
 */
export type { DragEndInfo, DragEvent, MouseEventButton, MouseEventInput } from "./event.type";

/**
 * Functions
  DragEndEventHandler = Drag 이벤트 핸들러
  CallbackEventHandler = Callback 함수 이벤트 핸들러
  ButtonEventHandler = Button 클릭 이벤트 핸들러
 */
export type { DragEndEventHandler, CallbackEventHandler, ButtonEventHandler, Evaluatable } from "./function.type";

export interface ComponentProps<E> extends HtmlHTMLAttributes<E>, PropsWithChildren {}

// export interface ProviderProps<P> extends PropsWithChildren<P | unknown> {}
export interface ProviderProps extends PropsWithChildren {}
