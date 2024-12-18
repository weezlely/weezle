import type { HTMLAttributes, PropsWithChildren } from "react";
import { forwardRef } from "react";

import { envConstant } from "@/shared/constants";

export type ImageComponentElement = HTMLImageElement;

export interface ImgProps extends HTMLAttributes<ImageComponentElement>, PropsWithChildren {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
}

export const Img = forwardRef<ImageComponentElement, ImgProps>((props, forwardedRef) => {
  const { loading = "lazy", src, alt, ...rest } = props;

  const ImgUrl = `${envConstant.domain}${envConstant.port}/images/${src}.png`;

  return <img ref={forwardedRef} src={ImgUrl} alt={alt} loading={loading} {...rest} />;
});
