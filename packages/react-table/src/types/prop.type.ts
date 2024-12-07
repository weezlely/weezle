import type { ColumnDef } from "@tanstack/react-table";
import type { RefObject, ReactNode } from "react";

export interface Refs {
  refs?: RefObject<HTMLElement & HTMLDivElement>[];
}

export interface Fallback {
  fallbackMessage?: string | ReactNode;
}

export interface Columns<TData> {
  columns: ColumnDef<TData, unknown>[];
}

export interface Data<TData> {
  data: TData[];
}
