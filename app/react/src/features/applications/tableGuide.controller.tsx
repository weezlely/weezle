import { createRef, useEffect, useMemo } from "react";

import { uesPageWrapperStore } from "@/state";
import { TableGuideService } from "./tableGuide.service";
import { TableGuideView } from "./tableGuide.view";

export const TableGuideController = () => {
  const pageWrapperStores = uesPageWrapperStore();
  const { response, loading, error } = TableGuideService();

  const refs = useMemo(() => {
    if (!response) return;
    return response.paragraphs.map(() => createRef<HTMLDivElement>());
  }, [response]);

  useEffect(() => {
    if (!pageWrapperStores) return;
    if (!response) return;

    const mappedParagraphs = response!.paragraphs.map((paragraph, index) => ({
      text: paragraph.brief,
      ref: refs![index],
    }));

    console.log("레프", mappedParagraphs);

    pageWrapperStores.setRefs(refs!);
    pageWrapperStores.setContentRefs(mappedParagraphs);

    return () => {
      pageWrapperStores.resetRefs();
    };
  }, [response]);

  return <TableGuideView loading={loading} error={error} responses={response!} refs={refs!} />;
};
