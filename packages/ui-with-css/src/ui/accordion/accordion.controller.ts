import React from "react";

import type { OpenIndexType } from "./accordion.type";

export function useAccordionController<AccordionType>(type: AccordionType) {
  const [openIndex, setOpenIndex] = React.useState<OpenIndexType>(type === "single" ? 0 : new Set());

  const handleChangeIndex = React.useCallback(
    (index?: number) => {
      if (typeof index === "undefined") return;

      if (type === "single") {
        if (openIndex === index) {
          setOpenIndex(0);
          return;
        }
        setOpenIndex(index);
        return;
      }
      if (type === "multiple") {
        const newOpenIndex = new Set(openIndex as Set<number>);

        if (newOpenIndex.has(index)) {
          newOpenIndex.delete(index);
        } else {
          newOpenIndex.add(index);
        }

        setOpenIndex(newOpenIndex);
      }
    },
    [openIndex, type]
  );

  return { type, openIndex, handleChangeIndex };
}
