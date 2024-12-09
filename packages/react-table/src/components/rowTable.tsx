import type { RefObject, Ref, CSSProperties } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import { forwardRef, useRef } from "react";

import type { ClassName, TableComponent } from "@/types";
import { useTable, useTableOutSideClick } from "@/hooks";
import { RowTableHead, RowTableBody } from "@/components";

// interface Props extends ReturnType<typeof useTable>, Refs, TableComponent, HTMLAttributes<HTMLTableElement> {}

interface RowTableProps<TData, Data> extends ReturnType<typeof useTable> {
  refs?: RefObject<HTMLElement & HTMLDivElement>[];
  tableClass?: ClassName;
  tableStyle?: CSSProperties;
  columns: ColumnDef<TData, unknown>[];
  data: Data[];
}

// export const RowTable = forwardRef<HTMLTableElement, RowTableProps<T>>((props, forwardedRef) => {
export const RowTableComponent = <T, D>(
  props: RowTableProps<T, D>,

  forwardedRef: Ref<HTMLTableElement>
) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const { refs, columns, data, tableClass, tableStyle, ...tableInstance } = props;

  const { caption, onClickOutSide } = tableInstance;

  useTableOutSideClick((forwardedRef as RefObject<HTMLTableElement>) || tableRef, onClickOutSide, refs);
  return (
    <table {...{ className: tableClass, style: tableStyle }} ref={forwardedRef || tableRef} role="table" aria-label="table">
      {/*  < Caption > */}
      <caption className={caption?.blind ? "blind" : ""}>{caption?.text}</caption>
      {/*  </ Caption > */}

      {/* < Table Head > */}
      <RowTableHead {...tableInstance} />
      {/* </ Table Head >  */}

      {/* < Table Body > */}
      <RowTableBody {...tableInstance} />
      {/* </ Table Body > */}
    </table>
  );
};

export const RowTable = forwardRef(RowTableComponent) as <T, D>(
  props: RowTableProps<T, D> & {
    ref?: Ref<HTMLTableElement>;
  }
) => ReturnType<typeof RowTableComponent>;
