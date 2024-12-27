import React from "react";
import { Outlet } from "react-router-dom";
import { useScrollTop } from "taeo-hooks";

import { HomeFooter, HomeHeader } from "@/shared/components";

export const MainLayout = () => {
  useScrollTop(0, 0);
  return (
    <React.Suspense fallback={<div>로딩중</div>}>
      {/* Header */}
      <HomeHeader />
      {/* Header */}

      {/* Contents */}
      <main className="layout__main">
        <Outlet />
      </main>
      {/* Contents */}

      <HomeFooter />
    </React.Suspense>
  );
};
