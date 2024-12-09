// Thirds Party Types...
import type { MouseEvent } from "react";
import type { VisibilityState } from "@tanstack/react-table";
// Thirds Party...
import { useState } from "react";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
// Inner Types...
import type { ColumnsType, CreateTableColumns, DataType } from "@/types";
// Utils...
import { utils } from "@/lib";

export interface UseTableProps {
  columns: ColumnsType<any>;
  data: DataType[]; // 기본적으로 키-값 구조의 객체

  queryKey?: CreateTableColumns<number>;

  options: {
    caption?: {
      text?: string;
      blind?: boolean;
    };
    columnVisibility?: VisibilityState;
  };
}

export const useTable = (props: UseTableProps) => {
  const { columns, data, queryKey, options } = props;
  const { columnVisibility = { col0: false }, caption, ...restOptions } = options;

  const state = { columnVisibility, ...restOptions };

  // @tanstack/react-table's table instance
  const tanstackReactTableInstance = useReactTable({ columns, data, state, getCoreRowModel: getCoreRowModel() });

  // When it comes to selected row 'State'
  const [selectedRow, setSelectedRow] = useState<CreateTableColumns<number>>({});

  const parsingRowData = (e: React.MouseEvent) => {
    const parsedData = utils.getRowDataByClick(e);
    setSelectedRow(parsedData);
    return parsedData;
  };

  // A Functions when it clicked table row
  const onClickRow = (e?: MouseEvent, rawData?: CreateTableColumns<number>) => {
    let parsedRowData: CreateTableColumns<number>;

    if (!e) {
      parsedRowData = rawData!;
    } else {
      parsedRowData = parsingRowData(e);
    }

    if (!parsedRowData) return;

    const parsedUrl = utils.getParsedUrl(window.location.href);

    const newSearchParams = {
      ...parsedUrl.query,
      ...Object.keys(queryKey!)
        .filter((key) => key.startsWith("col")) // "col"로 시작하는 키 필터링
        .reduce((acc, key) => {
          const colKey = queryKey![key as keyof typeof queryKey]; // queryKey의 값
          const colValue = parsedRowData[key as keyof typeof parsedRowData]; // row 데이터
          if (colValue !== undefined) {
            acc[colKey] = colValue; // 동적으로 키와 값을 추가
          }
          return acc;
        }, {} as Record<string, any>),
    };

    const params = new URLSearchParams(newSearchParams);

    utils.navigate(`?${params.toString()}`, { replace: true, state: parsedRowData });
  };

  const onClickOutSide = () => {
    utils.navigate("", { replace: true, state: {} });
  };

  const onClickNavigate = (param: string) => {
    console.log("Click Navigate", param);
    utils.navigate(param, { replace: true, state: {} });
  };

  return {
    selectedRow,
    caption,

    onClickRow,
    onClickNavigate,
    onClickOutSide,

    ...tanstackReactTableInstance,
  };
};
