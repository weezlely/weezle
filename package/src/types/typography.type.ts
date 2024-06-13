import type { CSSProperties } from "react";

/**
 * @type Typography Props Type
 *
 * @description  size            {Size}                         = 컴포넌트의 크기를 나타내는 사이즈 타입
 * @description  textAlign       {CSSProperties["textAlign"]}   = 텍스트의 정렬 옵션을 위한 타입
 * @description  color           {Color}                        = 텍스트 색상을 나타내는 타입
 * @description  backgroundColor {Color}                        = 텍스트의 배경색을 나타내는 타입
 *
 * @example Size 타입은 다음과 같이 있습니다.
 * - "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl"
 */

export type TypographyProps = {
  size?: Size;
  textAlign?: CSSProperties["textAlign"];
  color?: Color;
  backgroundColor?: Color;
};
