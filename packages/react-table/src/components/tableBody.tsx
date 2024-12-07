import * as React from "react";
import { flexRender, useReactTable } from "@tanstack/react-table";

import type { CreateTableColumns, TbodyComponent, TdComponent, TrComponent } from "@/types";

interface ClassesStyles extends TdComponent, TrComponent, TbodyComponent {}

interface TableBodyComponentProps extends ClassesStyles {
  emptyStateMessage?: string | React.ReactNode;
  tableInstance: ReturnType<typeof useReactTable>;
  handleNavigate: (param: string) => void;
  handleRowClick: (e?: React.MouseEvent, rawData?: CreateTableColumns<number>) => void;
}

export const TableBodyComponent = (props: TableBodyComponentProps) => {
  const {
    // Table Body's props...
    tableInstance,
    emptyStateMessage = "데이터가 없습니다.",

    handleNavigate,
    handleRowClick = () => {},
    ...rest
  } = props;

  const rows = tableInstance.getRowModel().rows;

  // Function that returns UI when there is no data
  const renderEmptyState = () => (
    <tr>
      <td colSpan={tableInstance.getVisibleLeafColumns().length}>
        {/* No Data */}
        {typeof emptyStateMessage === "string" ? <div>{emptyStateMessage}</div> : emptyStateMessage}
      </td>
    </tr>
  );

  // Function that returns the UI when there is data
  const renderRow = (row: (typeof rows)[number]) => (
    <tr key={row.id} data-row={JSON.stringify(row.original)} onClick={(e) => handleRowClick(e, row.original as CreateTableColumns<number>)} role="row" tabIndex={0}>
      {row.getVisibleCells().map((cell) => (
        <td key={cell.id} role="cell" onClick={() => handleNavigate(row.id)}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  );

  return (
    <tbody className={rest.tbodyClass} role="rowgroup">
      {rows.length === 0 ? renderEmptyState() : rows.map(renderRow)}
    </tbody>
  );
};
