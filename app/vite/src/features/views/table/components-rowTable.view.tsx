import { createRef, useEffect, useMemo } from "react";

import { componentsRowTableResponse } from "@/_db";
import { uesPageWrapperStore } from "@/state";
import { GuideTemplate } from "@/shared";

export const ComponentRowTableView = () => {
  const refs = useMemo(() => componentsRowTableResponse.paragraphs.map(() => createRef<HTMLDivElement>()), [componentsRowTableResponse]);

  const pageWrapperStores = uesPageWrapperStore();

  useEffect(() => {
    if (!pageWrapperStores) return;

    const mappedParagraphs = componentsRowTableResponse.paragraphs.map((paragraph, index) => ({
      text: paragraph.brief,
      ref: refs[index],
    }));

    pageWrapperStores.setRefs(refs);
    pageWrapperStores.setContentRefs(mappedParagraphs);

    return () => {
      pageWrapperStores.resetRefs();
    };
  }, [componentsRowTableResponse]);

  return <GuideTemplate refs={refs} responses={componentsRowTableResponse} />;
};

export default ComponentRowTableView;
