import { flexRender, useReactTable } from "@tanstack/react-table";

import type { TableHeadComponentClass } from "@/types";

export interface TableHeadProps extends TableHeadComponentClass {
  tableInstance: ReturnType<typeof useReactTable>;
}
export const TableHead = (props: TableHeadProps) => {
  const { tableInstance, tableHeadClass, thClass } = props;

  return (
    <thead className={tableHeadClass}>
      {tableInstance.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} role="row">
          {headerGroup.headers.map((header) => (
            <th
              // th props
              key={header.id}
              className={thClass}
              role="columnheader"
              scope="col"
              style={{ width: header.getSize() || "auto" }}
            >
              {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
