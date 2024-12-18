import { scrollToSection, useScrollSpy } from "@taeopia/react-tool";
import { Heading } from "@taeopia/ui-with-css";

import { uesPageWrapperStore } from "@/state";

export const ScrollSidebar = () => {
  const pageWrapperStores = uesPageWrapperStore();

  const activeSection = useScrollSpy({ refs: pageWrapperStores.refs });

  if (!pageWrapperStores.contentRefs.length) return null;
  return (
    <aside className="side-bar right-bar">
      <div className="scroll-side-bar">
        {pageWrapperStores.contentRefs.map(({ ref, text }, index) => (
          <Heading
            key={index}
            as="h6"
            fontColor="black"
            onClick={() => scrollToSection(ref)}
            style={{
              padding: "10px",
              color: activeSection === index ? "#195774" : "var(--text)",
              cursor: "pointer",
              width: "100%",
            }}
          >
            {text}
          </Heading>
        ))}
      </div>
    </aside>
  );
};
