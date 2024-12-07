import { useMemo } from "react";
import { flexRender } from "@tanstack/react-table";

import type { ThComponent, TheadComponent, TrComponent } from "@/types";
import { useTable } from "@/hooks";

interface ClassesStyles extends TheadComponent, ThComponent, TrComponent {}

export interface RowTableHeadProps extends ClassesStyles, ReturnType<typeof useTable> {}

export const RowTableHead = (props: RowTableHeadProps) => {
  const {
    /**
     *  These are props for styles and classes.
     */
    theadClass,
    theadStyle,
    trClass,
    trStyle,
    thClass,
    thStyle,

    /**
     * This is a props for returns of useTable
     */

    ...tableInstance
  } = props;

  // Memoize class and style configurations
  const classesStyles = useMemo(
    () => ({
      thead: { className: thClass, style: thStyle },
      tr: { className: trClass, style: trStyle },
      th: { className: thClass, style: thStyle },
    }),
    [trClass, trStyle, thClass, thStyle, theadClass, theadStyle]
  );

  return (
    <thead {...classesStyles.thead}>
      {tableInstance.getHeaderGroups().map((headerGroup) => (
        <tr {...classesStyles.tr} key={headerGroup.id} role="row">
          {headerGroup.headers.map((header) => (
            <th {...classesStyles.th} key={header.id} style={{ width: header.getSize() || "auto", ...thStyle }} role="columnheader" scope="col">
              {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
