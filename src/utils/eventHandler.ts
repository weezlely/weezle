/**
 * 이벤트 핸들러
 * @param handler
 * @param event
 */
const handleButton = (handler: Function | undefined, event: ButtonEvent) => {
  if (handler && typeof handler === "function") {
    handler(event);
  }
};

export default { handleButton };
