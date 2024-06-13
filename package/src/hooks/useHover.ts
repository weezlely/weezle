import { useEffect, useRef, useState } from "react";

export default function useHover() {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const ref = useRef<HTMLElement | HTMLDivElement>(null);

  const mouseEvent = { over: () => setIsHovering(true), out: () => setIsHovering(false) };

  useEffect(() => {
    const node = ref.current;

    if (ref && node) {
      node.addEventListener("mouseover", mouseEvent.over);
      node.addEventListener("mouseout", mouseEvent.out);
    }

    return () => {
      node?.addEventListener("mouseover", mouseEvent.over);
      node?.addEventListener("mouseout", mouseEvent.out);
    };
  }, [ref.current]);

  return [ref, isHovering] as const;
}
