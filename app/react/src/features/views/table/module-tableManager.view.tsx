import { createRef, useEffect, useMemo } from "react";

import { modulesTableManagerResponse } from "@/_db";
import { uesPageWrapperStore } from "@/state";
import { GuideTemplate } from "@/shared";

export const ModulesTableManagerView = () => {
  const pageWrapperStores = uesPageWrapperStore();

  useEffect(() => {
    if (!pageWrapperStores) return;

    const mappedParagraphs = modulesTableManagerResponse.paragraphs.map((paragraph, index) => ({
      text: paragraph.brief,
      ref: refs[index],
    }));

    pageWrapperStores.setRefs(refs);
    pageWrapperStores.setContentRefs(mappedParagraphs);

    return () => {
      pageWrapperStores.resetRefs();
    };
  }, [modulesTableManagerResponse]);

  const refs = useMemo(() => {
    return modulesTableManagerResponse.paragraphs.map(() => createRef<HTMLDivElement>());
  }, [modulesTableManagerResponse]);

  return <GuideTemplate responses={modulesTableManagerResponse} refs={refs} />;
};

export default ModulesTableManagerView;
