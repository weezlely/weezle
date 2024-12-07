import { useEffect } from "react";

import type { CreateTableColumns, DataType } from "@/types";
import { utils } from "@/lib";

export interface UseTableQuery {
  selectedId?: string | number;
  data: DataType[];
  onRowClick?: (e?: MouseEvent, rawData?: CreateTableColumns<number>) => void;
}

export function useTableSideEffect(props: UseTableQuery) {
  const { selectedId, data, onRowClick } = props;

  return useEffect(() => {
    if (selectedId) {
      try {
        const foundRowData = utils.findRowDataById(data, selectedId);

        if (onRowClick && foundRowData) {
          onRowClick(undefined, foundRowData);
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
}
