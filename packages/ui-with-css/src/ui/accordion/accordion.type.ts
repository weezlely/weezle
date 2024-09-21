import type { PropsWithChildren } from "react";
import * as React from "react";
import { ElementProps } from "../../types";

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

export interface AccordionWrapperProps extends ElementProps<HTMLElement>, HaveAccordionType {
  size: {
    w?: number;
    h?: number;
    width?: string;
    height?: string;
  };

  brandColor: string;
  fontFamily: string;
}

export interface AccordionItemProps extends ElementProps<HTMLElement>, HaveIndexProp {}

export interface AccordionButtonProps extends ElementProps<HTMLButtonElement>, HaveIndexProp {
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | React.ReactNode;
}

export interface AccordionPanelProps extends ElementProps<HTMLElement>, HaveIndexProp {}
