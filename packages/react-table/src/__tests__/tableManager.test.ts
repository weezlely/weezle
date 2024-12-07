import { TableManager } from "../modules/table.module";

describe("TableManger Class init", () => {
  let tableManager: TableManager;

  beforeEach(() => {
    tableManager = new TableManager(["id", "No.", "name", "dept", "phone"]);
  });

  // 생성자가 제대로 동작하는지 확인
  it("should initialize with the provided headers", () => {
    const columns = tableManager.getColumns();
    expect(columns.length).toBe(5); // "id", "No.", "name", "dept", "phone" 5개의 열이 있어야 함
    expect(columns[0].header).toBe("id"); // 첫 번째 열의 header가 "id"여야 함
    expect(columns[1].header).toBe("No."); // 두 번째 열의 header가 "No."여야 함
  });

  // 기본값으로 빈 배열을 전달하면 테이블 열이 생성되지 않아야 한다는 테스트
  it("should initialize with empty columns when no headers are provided", () => {
    tableManager = new TableManager();
    const columns = tableManager.getColumns();
    expect(columns.length).toBe(0); // 열이 생성되지 않아야 함
  });
});
