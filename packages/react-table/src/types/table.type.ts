import type { ColumnDef } from "@tanstack/react-table";

/**
 * @description Table's Columns value type
 */

export type TableColumnValue = string | number;

/**
 * @description This is a type that represents the number of table columns
 * @example 
 * 
 * ```js or jsx
 * type Columns3 = CreateTableColumns<3>; // Example usage: Create a column of length 3
 * 
 *
 * const tableColumns: Columns3 = {
    col0: "Apple",
    col1: 42,
    col2: "Banana",
    col3: "Extra" // Error occurred: 'col3' is an undefined key.
  };
 *  
 * ```
 */

export type CreateTableColumns<L extends number | undefined> = {
  [key in `col${number & keyof [...Array<L extends number ? L : 0>]}`]: TableColumnValue;
};

// TData는 테이블에 표시될 데이터의 타입
export type ColumnsType<TData> = ColumnDef<TData>[];

// 기본적으로 키-값 구조의 객체
export type DataType = Record<string, any>;

export type DataArray<TData> = TData[];
