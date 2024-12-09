import React from "react";
import { Outlet } from "react-router-dom";
import { useLocalStorage } from "taeo-hooks";
import { blueTheme, SideBar } from "@taeopia/ui-with-css";

import { Header, Sidebar } from "@/shared/components";

export function MainLayout() {
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
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      {/* Header */}

      {/* Main */}
      <main className={`page-wrapper ${isDarkMode ? blueTheme.dark : blueTheme.light}`}>
        {/* Side Menu */}
        <aside className="side-menu">사이드 메뉴</aside>
        {/* Side Menu */}

        <Outlet />
      </main>
      {/* Main */}

      <footer>
        <p>&copy; 2024 Taeopia. All rights reserved.</p>
      </footer>
    </React.Suspense>
  );
}
