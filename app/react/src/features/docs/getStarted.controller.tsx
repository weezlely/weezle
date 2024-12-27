import { uesPageWrapperStore } from "@/state";
import { useContentRefs } from "@/shared/lib";

import { GetStartedView } from "./getStarted.view";
import { useGetStartedService } from "./getStarted.service";

export const GetStartedController = () => {
  const { setRefs, setContentRefs, resetRefs } = uesPageWrapperStore();
  const { response, loading, error } = useGetStartedService();

  const refs = useContentRefs({
    dataset: response?.paragraphs,
    onUpdateRefs: setContentRefs,
    onCleanup: resetRefs,
    onSetRef: setRefs,
  });

  return <GetStartedView refs={refs} dataset={response} />;
};

/**
 * Optimized to maintain refs array even when re-rendering by managing refs array with useRef
 * useRef로 refs 배열을 관리하여 리렌더링 시에도 유지되도록 최적화 함
 */

// const refs = useMemo(() => {
//   if (!response?.paragraphs) return [];

//   return response.paragraphs.map((paragraph) => {
//     const parentRef = createRef<HTMLDivElement>();
//     return {
//       text: paragraph.title || "",
//       ref: parentRef,
//     };
//   });
// }, [response]);

// useEffect(() => {
//   if (!pageWrapperStores || !response) return;

//   pageWrapperStores.setContentRefs(refs);

//   return () => {
//     pageWrapperStores.resetRefs();
//   };
// }, [response]);
