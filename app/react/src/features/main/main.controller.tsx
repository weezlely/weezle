import { useAppStore } from "@/state";
import { useElementOnScreen, usePageNavigation } from "@/shared/lib";
import { MainView } from "./main.view";

export const MainController = () => {
  const { goToPage } = usePageNavigation();
  const { setIsEntry } = useAppStore();
  const { ref } = useElementOnScreen({
    root: null, // 뷰포트 기준으로 관찰
    rootMargin: "0px",
    threshold: 0.1, // 50% 이상 노출 시 "보임" 처리
    callback: setIsEntry,
  });

  return (
    <MainView
      {...{
        // Refs
        entryRef: ref,

        // Navigation Event
        goToPage,
      }}
    />
  );
};
