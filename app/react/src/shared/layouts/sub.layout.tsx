import React from "react";
import { Outlet } from "react-router-dom";
import { useLocalStorage, useScrollTop } from "taeo-hooks";
import { blueTheme } from "@taeopia/ui-with-css";

import { PageHeader, LeftSidebar, ScrollSidebar, Drawer, DrawerSidebar } from "@/shared/components";

export const SubLayout = () => {
  useScrollTop(0, 0);

  return (
    <React.Suspense fallback={<div>로딩중</div>}>
      {/* Header */}
      <PageHeader />
      {/* Header */}

      <div className="h96"></div>

      {/* Drawer */}
      <Drawer position="left">
        <DrawerSidebar />
      </Drawer>
      {/* Drawer */}

      <main className="layout__sub">
        <section className={`layout__sub-wrap`}>
          <LeftSidebar />

          {/* ${isDarkMode ? blueTheme.dark : blueTheme.light} */}

          <Outlet />

          <ScrollSidebar />
        </section>
      </main>

      {/* <Footer /> */}
    </React.Suspense>
  );
};
// const { read, save } = useLocalStorage("taeopia-theme", false, { initialSave: true });
// const [isDarkMode, setIsDarkMode] = React.useState(() => read());
// const toggleTheme = () => {
//   setIsDarkMode((prevMode) => {
//     const newMode = !prevMode;
//     save(newMode);
//     return newMode;
//   });
// };
