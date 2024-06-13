import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import { OnDragEndEvent, OnDragEndInfo } from "../../types";
import { usePreviousValue } from "../../hooks";

export function use_bottom_sheet_controller() {
  const controls = useAnimation();
  const [isOpen, setIsOpen] = useState(true);
  const prevIsOpen = usePreviousValue(isOpen!) || false;

  const onDragEnd = (event: OnDragEndEvent, info: OnDragEndInfo) => {
    const shouldClose = info.point?.y > 20 || (info.point?.y >= 0 && info.point.y > 45);

    if (shouldClose) {
      controls.start("hidden");
      setIsOpen(false);
    } else {
      controls.start("full");
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (prevIsOpen !== null && prevIsOpen !== isOpen) {
      if (isOpen) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }
  }, [controls, isOpen, prevIsOpen]);

  return { onDragEnd, controls, setIsOpen, isOpen };
}
