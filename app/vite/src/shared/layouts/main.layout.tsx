import React from "react";
import { Outlet } from "react-router-dom";
import { useLocalStorage } from "taeo-hooks";
import { blueTheme } from "@taeopia/ui-with-css";

import { Header, LeftSidebar, ScrollSidebar } from "@/shared/components";

export const MainLayout = () => {
  const { read, save } = useLocalStorage("taeopia-theme", false, { initialSave: true });
  const [isDarkMode, setIsDarkMode] = React.useState(() => read());

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      save(newMode);
      return newMode;
    });
  };

  return (
    <React.Suspense fallback={<div>로딩중</div>}>
      {/* Header */}
      <Header />
      {/* Header */}

      <div className="body-wrapper">
        <main className={`page-wrapper`}>
          {/* ${isDarkMode ? blueTheme.dark : blueTheme.light} */}
          <LeftSidebar />

          <Outlet />

          <ScrollSidebar />
        </main>
      </div>

      {/* <Footer /> */}
    </React.Suspense>
  );
};
