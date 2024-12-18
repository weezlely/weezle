import { createRef, useEffect, useMemo } from "react";

import { hooksUseTableResponse } from "@/_db";
import { uesPageWrapperStore } from "@/state";

import * as TableViews from "@/features/views/table";
import { useLocation } from "react-router-dom";

/**
 * @description [대메뉴 : table] / [중메뉴 : hooks]
 * @description path : /table/hooks/useTable
 * @returns
 */

export const HooksUseTableController = () => {
  const pageWrapperStores = uesPageWrapperStore();

  useEffect(() => {
    if (!pageWrapperStores) return;

    const mappedParagraphs = hooksUseTableResponse.paragraphs.map((paragraph, index) => ({
      text: paragraph.brief,
      ref: refs[index],
    }));

    pageWrapperStores.setRefs(refs);
    pageWrapperStores.setContentRefs(mappedParagraphs);

    return () => {
      pageWrapperStores.resetRefs();
    };
  }, [hooksUseTableResponse]);

  const refs = useMemo(() => {
    return hooksUseTableResponse.paragraphs.map(() => createRef<HTMLDivElement>());
  }, [hooksUseTableResponse]);

  return <TableViews.HooksUseThemeView refs={refs} responses={hooksUseTableResponse} />;
};

export default HooksUseTableController;
