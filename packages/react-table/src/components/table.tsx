import type { PropsWithChildren, RefObject } from "react";
import { forwardRef, useEffect } from "react";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

import type { CreateTableColumns, TableComponent } from "@/types";
import { utils } from "@/lib";
import { useTableOutSideClick } from "@/hooks";
import { TableBodyComponent, TableHead } from "@/components";

interface ClassesStyles extends TableComponent {}

interface TableProps extends PropsWithChildren, ClassesStyles {
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
      console.log(selectedId);
      try {
        const foundRowData = utils.findRowDataById(data, selectedId);

        console.log("found row data : ", foundRowData);

        if (foundRowData) {
          handleRowClick(undefined, foundRowData);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error("Error 2 :", error);
        }
      }
    }
  }, [selectedId, data]);

  useTableOutSideClick(forwardedRef as RefObject<HTMLElement>, handleOutSideClick, refs);

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
