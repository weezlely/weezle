import { useCallback, useState } from "react";

export default function useToggle() {
  const [isOpen, toggle] = useState<boolean>(false);

  const onOpen = useCallback(() => {
    toggle(true);
  }, []);

  const onClose = useCallback(() => {
    toggle(false);
  }, []);

  const onToggle = useCallback(() => {
    toggle(!isOpen);
  }, []);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
}
// const { isOpen, onClose, onOpen } = useToggle();
