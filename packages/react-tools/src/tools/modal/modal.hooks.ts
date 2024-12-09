import type { FC } from "react";
import { useCallback, useContext } from "react";

import { utils } from "@/lib";
import { ModalContext } from "./modal.context";

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(`
      Error: This is not available.
       Modal's value is not validated.
       The current context does not exist.
      `);
  }

  return context;
};

export const useModal = (component: FC, props?: object) => {
  const { dispatch } = useModalContext();

  const open = useCallback(() => {
    const mId = utils.uuid().next().value;

    if (typeof mId === "string") {
      dispatch({
        type: "OPEN_MODAL",
        payload: {
          id: mId,
          component,
          props: {
            ...props,
            close,
            closeAll,
            actions: {
              close,
              closeAll,
            },
          },
        },
      });
    }

    document.body.style.overflow = "unset";
  }, [dispatch]);

  const close = useCallback(
    (mId: string) => {
      dispatch({ type: "CLOSE_MODAL", payload: { id: mId } });

      document.body.style.overflow = "unset";
    },
    [dispatch]
  );

  const closeAll = useCallback(() => {
    dispatch({ type: "CLOSE_MODAL_ALL", payload: {} });
  }, [dispatch]);

  return { open, close, closeAll };
};
