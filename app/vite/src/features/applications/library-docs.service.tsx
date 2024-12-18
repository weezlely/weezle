import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { componentsRowTableResponse, GuidTemplateResponse, hooksUseTableResponse, hookUseTableOutsideClick, modulesTableManagerResponse } from "@/_db";

const DATA_MAP: Record<string, GuidTemplateResponse> = {
  "/table/hooks/useTable": hooksUseTableResponse,
  "/table/hooks/useTableOutSideClick": hookUseTableOutsideClick,
  "/table/components/rowTable": componentsRowTableResponse,
  "/table/modules/tableManager": modulesTableManagerResponse,
};

export const TableLibraryDocsService = () => {
  const pathname = useLocation().pathname;

  const [response, setResponse] = useState<GuidTemplateResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true); // 로딩 상태 시작
    setError(null); // 에러 초기화

    try {
      const data = DATA_MAP[pathname] || null;
      if (data) {
        setResponse(data);
      } else {
        throw new Error("해당 경로에 대한 데이터를 찾을 수 없습니다.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "알 수 없는 에러가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }, [pathname]);

  return { response, loading, error };
};