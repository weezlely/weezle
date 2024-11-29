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
