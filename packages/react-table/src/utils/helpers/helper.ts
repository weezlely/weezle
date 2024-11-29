import { CreateTableColumns } from "@/types";

// Helper function to find row data by ID
function findRowDataById(
  // Table's column. ex) col0, col1, ...
  data: CreateTableColumns<number>[],
  //
  selectedId: string | number | undefined
): CreateTableColumns<number> | undefined {
  if (!selectedId) return undefined;

  const foundRowData = data.find((row) => row.col0 === selectedId || row.col0 === Number(selectedId));

  if (!foundRowData) {
    throw new Error("Error 1 : Current table data cannot be found.");
  }

  return foundRowData;
}

export const helper = {
  findRowDataById,
};
