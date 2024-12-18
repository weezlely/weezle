import { Accordion, Linker } from "@/shared/components";
import { Heading } from "@taeopia/ui-with-css";

export const LeftSidebar = () => {
  return (
    <aside className="side-bar left-bar">
      <nav className="side-bar-left">
        <Heading as="h3" className="p-10" style={{ color: "var(--text)" }}>
          Guide
        </Heading>
        <Accordion>
          {/* 첫 번째 Accordion 항목 */}
          <Accordion.Item initialValue>
            {({ isActive, toggle }) => (
              <>
                <div className="accordion-toggle" onClick={toggle}>
                  Components
                </div>
                <div className={`side-bar-content ${isActive ? "active" : ""}`}>
                  <Linker href={"/table/components/rowTable"}>RowTable</Linker>
                </div>
              </>
            )}
          </Accordion.Item>

          {/* 두 번째 Accordion 항목 */}
          <Accordion.Item initialValue>
            {({ isActive, toggle }) => (
              <>
                <div className="accordion-toggle" onClick={toggle}>
                  Hooks
                </div>
                <div className={`side-bar-content ${isActive ? "active" : ""}`}>
                  <Linker href={"/table/hooks/useTable"}>useTable</Linker>
                </div>
                <div className={`side-bar-content ${isActive ? "active" : ""}`}>
                  <Linker href={"/table/hooks/useTableOutSideClick"}>useTableOutSideClick</Linker>
                </div>
                <div className={`side-bar-content ${isActive ? "active" : ""}`}>
                  <Linker href={"/table/hooks/useTheme"}>useTheme</Linker>
                </div>
              </>
            )}
          </Accordion.Item>

          {/* 세 번째 Accordion 항목 */}
          <Accordion.Item initialValue>
            {({ isActive, toggle }) => (
              <>
                <div className="accordion-toggle" onClick={toggle}>
                  Module
                </div>
                <div className={`side-bar-content ${isActive ? "active" : ""}`}>
                  <Linker href={"/table/modules/tableManager"}>TableManger</Linker>
                </div>
              </>
            )}
          </Accordion.Item>
        </Accordion>
      </nav>
    </aside>
  );
};
