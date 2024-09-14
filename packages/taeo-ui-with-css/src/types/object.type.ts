import { FontWeightPropsType } from "./props.type";
import { StrOrNum } from "./value.type";

/**
 * @description This is type for Object of any key-value
 * this is made up of "key-value"
 * "Key" type is "key in string" and "value" type is "string"
 */
export type KeyAbleObject = { [key in string]: any };

/**
 * @description This is type for Object of Size
 * this is made up of "key-value"
 * "Key" is made up of "w", "h", "width", "height"
 * "Value" is made up of "number"
 */
export type SizeWHObject = { w?: number; h?: number; width?: number; height?: number };

/**
 * @description This is type for Object of Size
 * this is made up of "key-value"
 * "Key" type is "key in string" and "value" type is "string"
 */
export type SizeObject = { [key in string]: string };

/**
 * @description This is type for Object of Color
 * this is made up of "key-value"
 * "Key" type is "key in string" and "value" type is string
 * this is made up of key in string
 * */
export type ColorObject = { [key in string]: string };

export type FontWeightObject = { [key in FontWeightPropsType]: StrOrNum } & KeyAbleObject;

/**
 * @description This is type for Object of Theme
 * this is made up of "key-value"
 * "Key" type is "key in string" and "value" type is "string"
 */
export type ThemeObject = { colors: ColorObject; sizes: SizeObject } & KeyAbleObject;

export type EventObject = { name: StrOrNum; value: StrOrNum } & KeyAbleObject;
