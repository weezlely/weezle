import type { CSSProperties } from "react";

type ClassName = string;

export interface FallbackComponent {
  fallbackClass?: ClassName;
  fallbackStyle?: CSSProperties;
}

export interface TableComponent {
  tableClass?: ClassName;
  tableStyle?: CSSProperties;
}

export interface ThComponent {
  thStyle?: CSSProperties;
  thClass?: ClassName;
}

export interface TrComponent {
  trStyle?: CSSProperties;
  trClass?: ClassName;
}

export interface TdComponent {
  tdStyle?: CSSProperties;
  tdClass?: ClassName;
}

export interface TheadComponent {
  theadStyle?: CSSProperties;
  theadClass?: ClassName;
}

export interface TbodyComponent {
  tbodyStyle?: CSSProperties;
  tbodyClass?: ClassName;
}
