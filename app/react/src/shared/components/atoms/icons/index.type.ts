import type { Theme } from "@/types";

export interface IconProps extends React.HtmlHTMLAttributes<HTMLOrSVGElement> {
  theme: Theme;
}
