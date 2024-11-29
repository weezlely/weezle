import type { PropsWithChildren, RefObject } from "react";
import { forwardRef, useEffect } from "react";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

import type { CreateTableColumns, TableBodyComponentClass, TableComponentClass, TableHeadComponentClass } from "@/types";
import { useOutSideClick } from "@/utils";
import { TableBodyComponent, TableHead } from "@/components";
import { helper } from "@/utils/helpers";

interface TableProps extends PropsWithChildren, TableHeadComponentClass, TableBodyComponentClass, TableComponentClass {
  columns: any;
  data: any;
  refs?: RefObject<HTMLElement | HTMLDivElement>[];
  selectedId?: string | number;

  caption?: string;
  captionShow?: boolean;

  handleNavigate?: (param: string) => void;
  handleOutSideClick?: () => void;
  handleRowClick?: (e?: React.MouseEvent, rawData?: CreateTableColumns<number>) => void;
}

export const Table = forwardRef<HTMLTableElement, TableProps>((props, forwardedRef) => {
  const {
    columns,
    data,
    refs,
    selectedId,

    caption,
    captionShow = false,

    handleNavigate = () => {},
    handleOutSideClick = () => {},
    handleRowClick = () => {},

    ...rest
  } = props;

  const tableInstance = useReactTable({
    columns,
    data,
    state: { columnVisibility: { col0: false } },
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    if (selectedId) {
      try {
        const foundRowData = helper.findRowDataById(data, selectedId);
        handleRowClick(undefined, foundRowData);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error("Error 2 :", error);
        }
      }
    }
  }, [selectedId, data]);

  useOutSideClick(forwardedRef as RefObject<HTMLElement>, handleOutSideClick, refs);

  return (
    <table ref={forwardedRef} className={rest.tableClass} role="table" aria-label="table">
      <caption className={captionShow ? "blind" : ""}>{caption}</caption>
      {/* Table Head */}
      <TableHead tableInstance={tableInstance} {...rest} />
      {/* Table Head */}

      {/* Table Body */}
      <TableBodyComponent tableInstance={tableInstance} handleNavigate={handleNavigate} handleRowClick={handleRowClick} {...rest} />
      {/* Table Body */}
    </table>
  );
});
