import type { MouseEvent } from "react";

import type { CreateTableColumns } from "@/types";
import { helper } from "./helpers";

/**
 * @description GET function to find row data by ID
 * @param {CreateTableColumns} data
 * @param {string|number} selectedId
 * @returns CreateTableColumns<number> | null
 */

function findRowDataById(
  // Table's column. ex) col0, col1, ...
  data: CreateTableColumns<number>[],
  // selected Id...
  selectedId: string | number | undefined
): CreateTableColumns<number> | null {
  if (!selectedId) return null;

  const foundRowData = data.find((row) => row.col0 === selectedId || row.col0 === Number(selectedId));

  if (!foundRowData) {
    throw new Error("Error 1 : Current table data cannot be found.");
  }

  return foundRowData;
}

/**
 * @description GET function to find row data by 'Click' Event
 * @param {MouseEvent} e Mouse Event in React
 * @returns
 */

function getRowDataByClick(e: MouseEvent) {
  const originData = helper.getRawData(e, "data-row");

  if (!originData) return null;

  const parsedData = JSON.parse(originData);

  return parsedData;
}

function getParsedUrl(url: string) {
  // URL 객체 생성 (브라우저에서 사용 가능)
  const urlObj = new URL(url, window.location.origin);

  // Query parameters를 객체로 변환
  const queryParams: Record<string, string> = {};

  urlObj.searchParams.forEach((value, key) => {
    queryParams[key] = value;
  });

  return {
    url: urlObj.pathname, // URL 경로 (e.g., "/home")
    query: queryParams, // 쿼리 파라미터 객체 (e.g., { id: "123", name: "John" })
  };
}

function navigate(url: string, options?: { replace?: boolean; state?: any }) {
  const { replace = false, state = null } = options || {};

  let targetUrl = url;

  if (url === "") {
    // 현재 URL에서 쿼리스트링 제거
    const currentUrl = window.location.pathname; // 쿼리스트링 제외한 경로
    targetUrl = currentUrl;
  }

  if (replace) {
    // 현재 기록을 대체
    window.history.replaceState(state, "", targetUrl);
  } else {
    // 새 기록 추가
    window.history.pushState(state, "", targetUrl);
  }

  // 필요 시, 상태 변화를 감지하도록 이벤트를 트리거
  const popStateEvent = new PopStateEvent("popstate", { state });
  window.dispatchEvent(popStateEvent);
}

export const utils = {
  // Find Table's row by 'Id'
  findRowDataById,

  // Get Table's row by 'Click'
  getRowDataByClick,

  getParsedUrl,

  navigate,
};
