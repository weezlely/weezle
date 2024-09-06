import type { PropsWithChildren } from "react";
import * as React from "react";
import { ComponentProps } from "../../types";

export type AccordionType = "single" | "multiple";
export type OpenIndexType = number | Set<number>;

interface HaveAccordionType {
  type: AccordionType;
}

interface HaveIndexProp {
  index?: number;
}

export interface AccordionContextProps extends HaveAccordionType {
  openIndex?: OpenIndexType;
  handleChangeIndex?: (index: number) => void;
}

export interface AccordionProviderProps extends HaveAccordionType, PropsWithChildren {}

export interface AccordionWrapperProps extends ComponentProps<HTMLElement>, HaveAccordionType {
  size: {
    w?: number;
    h?: number;
    width?: string;
    height?: string;
  };

  brandColor: string;
  fontFamily: string;
}

export interface AccordionItemProps extends ComponentProps<HTMLElement>, HaveIndexProp {}

export interface AccordionButtonProps extends ComponentProps<HTMLButtonElement>, HaveIndexProp {
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | React.ReactNode;
}

export interface AccordionPanelProps extends ComponentProps<HTMLElement>, HaveIndexProp {}
