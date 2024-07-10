import type { CSSProperties, ReactNode } from "react";

import type { StrOrNum } from "./value.type";
import type { BackgroundColorPropsType, ColorPropsType, FontWeightPropsType, SizePropsType, VariantPropsType } from "./props.type";
import type { SizeWHObject, ColorObject, KeyAbleObject, ThemeObject, EventObject, SizeObject, FontWeightObject } from "./object.type";

// Values
export type Id = StrOrNum;

// Props
export type Variant = VariantPropsType;
export type Size = SizePropsType;
export type FontWeight = FontWeightPropsType;
export type Color = ColorPropsType;
export type BackgroundColor = BackgroundColorPropsType;
export type DefaultProps = { style?: CSSProperties; children: ReactNode };

// Objects
export type Colors = ColorObject; // Color Object type (Key-value)
export type FontWeights = FontWeightObject;
export type SizeWHs = SizeWHObject; // Size Object type
export type Sizes = SizeObject; // Size Object type (Key-value)
export type KeyAbles = KeyAbleObject; // Key able type (Key-value)
export type Themes = ThemeObject; // Theme
export type Events = EventObject; // Event
// Event
export type {
  DragEndInfo,
  DragEvent,
  MouseEventButton, // Mouse's button event
  MouseEventInput, // Mouse's input event
} from "./event.type";
// Functions
export type {
  DragEndEventHandler, // Drag 이벤트 핸들러
  CallbackEventHandler, // Callback 함수 이벤트 핸들러
  ButtonEventHandler, // Button 클릭 이벤트 핸들러
} from "./function.type";
