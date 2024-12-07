import type { RefObject, Ref } from "react";
import { forwardRef } from "react";

import type { Columns, Data, Refs, TableComponent } from "@/types";
import { useTable, useTableOutSideClick } from "@/hooks";
import { RowTableHead, RowTableBody } from "@/components";

interface Props extends ReturnType<typeof useTable>, Refs {}

interface RowTableProps<T, D> extends Props, TableComponent, Columns<T>, Data<D> {}

// export const RowTable = forwardRef<HTMLTableElement, RowTableProps<T>>((props, forwardedRef) => {
const RowTableComponent = <T, D>(props: RowTableProps<T, D>, forwardedRef: Ref<HTMLTableElement>) => {
  const { columns, data, refs, tableClass, tableStyle, ...tableInstance } = props;

  const { caption, onClickOutSide } = tableInstance;

  useTableOutSideClick(forwardedRef as RefObject<HTMLElement & HTMLDivElement>, onClickOutSide, refs);
  return (
    <table {...{ className: tableClass, style: tableStyle }} ref={forwardedRef} role="table" aria-label="table">
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

export const RowTable = forwardRef(RowTableComponent);
