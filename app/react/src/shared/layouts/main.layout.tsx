import React from "react";
import { Outlet } from "react-router-dom";

import { HomeHeader } from "@/shared/components";

export const MainLayout = () => {
  return (
    <React.Suspense fallback={<div>로딩중</div>}>
      {/* Header */}
      <HomeHeader />
      {/* Header */}

      {/* Contents */}
      <section className="main-layout">
        <Outlet />
      </section>
      {/* Contents */}
    </React.Suspense>
  );
};
