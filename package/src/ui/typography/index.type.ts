import type { CSSProperties, HTMLAttributes, PropsWithChildren } from "react";

import { Color } from "../../types";
import * as styles from "./styles.css";

/**
 * @type Typography Props Type
 *
 * @prop as?: "span" | "p";
 * @description 이 Prop은 Typography의 element tag를 설정하도록 합니다.
 *
 * @prop size? : "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"
 * @description 이 Prop은 Typography의 컴포넌트의 크기를 동적 변경 합니다.
 *
 * @prop textAlign? : "left" | "right" | "center" | "end" | "start" | "justify" | "match-parent"
 * @description 이 Prop은 Typography의 텍스트의 정렬을 동적 변경을 합니다.
 *
 * @prop color
 * @description 이 Prop은 Typography의 텍스트 색상을 변경하도록 합니다.
 *
 * @prop backgroundColor
 * @description 이 Prop은 Typography의 배경색을 변경하도록 합니다.
 *
 */
export type TypographyAs = "span" | "p";

type Props = {
  as?: TypographyAs;
  size?: keyof typeof styles.fontSize;
  textAlign?: keyof typeof styles.textAlign;
  color?: CSSProperties["color"] | Color;
  backgroundColor?: CSSProperties["color"] | Color;
};
export type TypographyElement = HTMLSpanElement | HTMLParagraphElement;

export type TypographyProps = PropsWithChildren<Props> & HTMLAttributes<TypographyElement>;
