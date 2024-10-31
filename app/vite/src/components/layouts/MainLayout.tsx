import React from "react";
import { Outlet } from "react-router-dom";
import { useLocalStorage } from "taeo-hooks";
import { blueTheme } from "@taeopia/ui-with-css";

import { Header } from "@/components";

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
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className={isDarkMode ? blueTheme.dark : blueTheme.light} style={mainStyles}>
        <Outlet />
      </main>
    </React.Suspense>
  );
}
const mainStyles: React.CSSProperties = {
  width: "100%",
  minHeight: "100vh",
  maxHeight: "100%",

  padding: "8px",
  // border: "1px solid red",
};
