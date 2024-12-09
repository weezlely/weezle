import { useCallback, useMemo } from "react";
import { flexRender } from "@tanstack/react-table";

import type { CreateTableColumns, Fallback, FallbackComponent, TbodyComponent, TdComponent, TrComponent } from "@/types";
import { useTable } from "@/hooks";

interface Props extends ReturnType<typeof useTable>, Fallback {}

interface ClassesStyles extends TbodyComponent, TrComponent, TdComponent, FallbackComponent {}

interface RowTableBodyProps extends Props, ClassesStyles {}

export const RowTableBody = (props: RowTableBodyProps) => {
  const {
    /**
     *  These are props for Styles and Props...
     */
    tbodyClass,
    tbodyStyle,
    tdClass,
    tdStyle,
    trClass,
    trStyle,
    fallbackClass,
    fallbackStyle,
    fallbackMessage = "No data available",
    /**
     * This is a props for returns of useTable
     */

    ...tableInstance
  } = props;

  const { getRowModel, onClickRow, onClickNavigate, getVisibleLeafColumns } = tableInstance;
  const rows = getRowModel().rows;

  const classesStyles = useMemo(
    () => ({
      tbody: { className: tbodyClass, style: tbodyStyle },
      tr: { className: trClass, style: trStyle },
      td: { className: tdClass, style: tdStyle },
      fallback: { className: fallbackClass, style: fallbackStyle },
    }),
    [tbodyClass, tbodyStyle, trClass, trStyle, tdClass, tdStyle, fallbackClass, fallbackStyle]
  );

  const handleRowClick = useCallback(
    (e: React.MouseEvent<HTMLTableRowElement>, row: CreateTableColumns<number>) => {
      onClickRow(e, row);
    },
    [onClickRow]
  );

  const handleNavigateClick = useCallback(
    (rowId: string) => {
      onClickNavigate(rowId);
    },
    [onClickNavigate]
  );

  return (
    <tbody {...classesStyles.tbody} role="rowgroup">
      {rows.length === 0 ? (
        <tr {...classesStyles.tr}>
          <td {...classesStyles.td} colSpan={getVisibleLeafColumns().length}>
            <div {...classesStyles.fallback}>{fallbackMessage}</div>
          </td>
        </tr>
      ) : (
        rows.map((row) => (
          <tr {...classesStyles.tr} key={row.id} data-row={JSON.stringify(row.original)} onClick={(e) => handleRowClick(e, row.original as CreateTableColumns<number>)} role="row" tabIndex={0}>
            {row.getVisibleCells().map((cell) => (
              <td
                {...classesStyles.td}
                key={cell.id}
                role="cell"
                //  onClick={() => handleNavigateClick(row.id)}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))
      )}
    </tbody>
  );
};

// // Function that returns UI when there is no data
// const renderEmptyState = () => (
//   <tr {...classStyles.tr}>
//     <td {...classStyles.td} colSpan={tableInstance.getVisibleLeafColumns().length}>
//       {typeof emptyStateMessage === "string" ? <div>{emptyStateMessage}</div> : emptyStateMessage}
//     </td>
//   </tr>
// );

// // Function that returns the UI when there is data
// const renderRow = (row: (typeof rows)[number]) => (
//   <tr
//     {...classStyles.tr}
//     key={row.id}
//     data-row={JSON.stringify(row.original)}
//     onClick={(e) => {
//       tableInstance.onClickRow(e, row.original as CreateTableColumns<number>);
//     }}
//     role="row"
//     tabIndex={0}
//   >
//     {row.getVisibleCells().map((cell) => (
//       <td {...classStyles.td} key={cell.id} role="cell" onClick={() => tableInstance.onClickNavigate(row.id)}>
//         {flexRender(cell.column.columnDef.cell, cell.getContext())}
//       </td>
//     ))}
//   </tr>
// );
