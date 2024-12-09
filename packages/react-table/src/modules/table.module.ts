type TableManageColumnAble = {
  [key: string]: string | number | string[] | number[] | Date | unknown;
};

export class TableManager {
  private columns: TableManageColumnAble[] = [];

  constructor(initialHeaders: (string | unknown)[] = []) {
    if (initialHeaders.length > 0) {
      this.createTableColumns(initialHeaders);
    }
  }

  // Method to create columns (열 생성 메서드)
  createTableColumns(headers: (string | unknown)[]): TableManageColumnAble[] {
    if (!headers || headers.length === 0) {
      throw new Error("⚠️ Unable to create table. - Please check the header settings again. ⚠️");
    }

    headers.forEach((header, index) => {
      const column: TableManageColumnAble = {
        header,
        accessorKey: `col${index}`,
      };

      this.columns.push(column);
    });

    return this.columns;
  }
  // Method to update general column properties. (열의 일반 형식 업데이트 메서드)
  updateTableColumn(key: string, options: Partial<TableManageColumnAble> = {}): void {
    const foundIndex = this.columns.findIndex((column) => column.accessorKey === key);

    if (foundIndex < 0) {
      throw new Error("⚠️ The table cannot be updated. - Please check the key value again. ⚠️ ");
    }

    const snapshot = this.columns[foundIndex];
    this.columns[foundIndex] = { ...snapshot, ...options };
  }

  // Method to update the column component (열 구성 요소를 업데이트)
  updateTableColumnComponent<T>(key: string, Component: T): void {
    const foundIndex = this.columns.findIndex((column) => column.accessorKey === key);

    if (foundIndex < 0) {
      throw new Error("⚠️ The table cannot be updated. - Please check the key value again. ⚠️ ");
    }

    const snapshot = this.columns[foundIndex];
    this.columns[foundIndex] = { ...snapshot, ...{ cell: Component } };
  }

  // Method to generate test data (열 반환 메서드)
  getColumns(): TableManageColumnAble[] {
    return this.columns;
  }

  // Method to generate test data (테스트 데이터 생성 메서드)
  getTestData(length: number = 5, options = { col: "", data: "" }) {
    const dataColumns = this.columns.map((column) => column.accessorKey);

    const column = dataColumns
      .map((data, index) => {
        if (data === "col0") {
          return {
            col0: "",
          };
        } else {
          return {
            [data as string]: `mock-${index}`,
            [options.col]: options.data,
          };
        }
      })
      .reduce((accumulator, current) => {
        return { ...accumulator, ...current };
      }, {});

    return Array.from({ length }, (_, index) => ({
      ...column,
      col0: index + 1,
    }));
  }

  // Method to clean up columns (컬럼의 clean-up 메서드)
  cleanup(): void {
    this.columns = [];
  }
}
