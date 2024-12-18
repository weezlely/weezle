import type { HTMLAttributes, PropsWithChildren } from "react";
import { forwardRef } from "react";

import { envConstant } from "@/shared/constants";

export type IconComponentElement = HTMLImageElement;

export interface IconProps extends HTMLAttributes<IconComponentElement>, PropsWithChildren {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
}

export const Icon = forwardRef<IconComponentElement, IconProps>((props, forwardedRef) => {
  const { loading = "lazy", src, alt, ...rest } = props;

  const iconUrl = `${envConstant.domain}${envConstant.port}/icons/${src}.svg`;

  return <img ref={forwardedRef} src={iconUrl} alt={alt} loading={loading} {...rest} />;
});
