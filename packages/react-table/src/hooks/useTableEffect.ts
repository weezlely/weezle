import { useEffect } from "react";

export function useTableEffect() {
  return useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      console.log("State changed:", event.state);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
}
