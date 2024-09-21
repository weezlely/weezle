import type { ChangeEvent, MouseEvent } from "react";
import { CallbackEventHandler, MouseEventButton, MouseEventInput } from "../types";

const funcExecuteChecker = (handler: Function | undefined, event: MouseEvent, callback?: CallbackEventHandler): void => {
  // if basic event handler, it is init
  if (handler && typeof handler === "function") {
    handler(event);
  }
  // if callback is being, it is init
  if (callback && typeof callback === "function") {
    callback();
  }
};

/**
 * 이벤트 핸들러
 * @param1 handler
 * @param2 event
 * @param3 callback
 */
const handleClick = (handler: Function | undefined, event: MouseEvent, callback?: CallbackEventHandler): void => {
  if (handler && typeof handler === "function") {
    handler(event);
  }
  // callback이 주어진 경우에만 실행
  if (callback && typeof callback === "function") {
    callback();
  }
};
/**
 * 이벤트 핸들러
 * @param1 handler
 * @param2 event
 * @param3 callback
 */
const handleHover = (handler: Function | undefined, event: MouseEvent, callback?: CallbackEventHandler): void => {
  if (handler && typeof handler === "function") {
    handler(event);
  }
  if (callback && typeof callback === "function") {
    callback();
  }
};
/**
 * onChange 이벤트 핸들러
 * @param1 handler
 * @param2 event
 * @param3 callback
 */
const handleChange = (handler: Function | undefined, event: ChangeEvent, callback?: Function | undefined): void => {
  if (handler && typeof handler === "function") {
    handler(event);
  }
  if (callback && typeof callback === "function") {
    callback(event);
  }
};

export default { funcExecuteChecker, handleClick, handleHover, handleChange };
