import type { MouseEvent } from "react";

/**
 * 주어진 키에 해당하는 속성 값을 가져오는 함수
 * @param {MouseEvent} e - React의 MouseEvent 객체
 * @param {string} key - 가져오려는 속성의 이름 (예: "data-id", "href")
 * @returns 속성 값 (string | null)
 */
function getRawData(e: MouseEvent, key: string) {
  return e.currentTarget.getAttribute(key);
}

/**
 *
 * @param {MouseEvent} e
 * @param {string} dataKey
 * @returns
 */

function getDataAttribute<T = string>(e: MouseEvent, dataKey: string): T | null {
  const value = e.currentTarget.getAttribute(`data-${dataKey}`);
  return value as T | null;
}

/**
 * helper 객체로 함수를 그룹화하여 외부에서 사용할 수 있도록 export
 */
export const helper = {
  getRawData, // MouseEvent로부터 속성 값을 가져오는 함수
  getDataAttribute,
};
