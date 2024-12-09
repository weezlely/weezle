import type { CreateTableColumns, Refs } from "@taeopia/react-table";
import { Button, Flex } from "@taeopia/ui-with-css";
import { RowTable, TableManager, useTable, useTheme } from "@taeopia/react-table";
import { useMemo, useRef } from "react";
// import { useTheme } from "@/pages/useTheme";

interface ExampleTable extends CreateTableColumns<5> {}

const exampleTable = new TableManager(["id", "No.", "name", "dept", "phone"]);

interface Props extends Refs {}

export const TaeopiaTable = (props: Props) => {
  const tableRef = useRef<HTMLTableElement>(null);
  // const themes = useTheme("taeopia-theme", "table-wrapper");
  const themes = useTheme();

  const data = useMemo<ExampleTable[]>(() => (exampleTable.getTestData(10) as ExampleTable[]) || [], [exampleTable]);

  const columns = useMemo(() => exampleTable.getColumns(), []);

  const tableInstance = useTable({
    columns,
    data,
    queryKey: { col0: "id", col1: "no", col2: "name" },
    options: {
      caption: {
        text: "Example Table",
        blind: true,
      },
    },
  });

  return (
    <Flex dir="column" gap={8} style={{ padding: "8px" }}>
      <Button variant="secondary" size="md" onClick={themes.toggleTheme}>
        {themes.theme} 모드
      </Button>
      <div className="table-wrapper">
        <RowTable<ExampleTable, ExampleTable>
          // Ref
          ref={tableRef}
          // Anti click refs..
          refs={props.refs}
          // Table className
          tableClass="taeopia_table md"
          // Columns..
          columns={columns as any}
          // Data
          data={data}
          {...tableInstance}
        />
      </div>
    </Flex>
  );
};
