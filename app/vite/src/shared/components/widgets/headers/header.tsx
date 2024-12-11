import React from "react";

import { Linker, ThemeToggle } from "@/shared/components";

interface HeaderProps {
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}
export const Header = (props: HeaderProps) => {
  return (
    <header className="header_main" aria-label="Main Header">
      <div className="header_inner">
        <div className="header_left">
          <Linker href="/" className="header_logo">
            taeopia
          </Linker>
          <nav className="header_nav">
            <Linker href="/">Docs</Linker>
            <Linker href="/">Ui</Linker>
            <Linker href="canvas">Canvas</Linker>
            <Linker href="table">Table</Linker>
            <Linker href="table">Hooks</Linker>
            <Linker href="table">Blogs</Linker>
            <Linker href="table">Posts</Linker>
          </nav>
        </div>
        <div className="header_right">
          <div className="header_user-actions">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

{
  /* <button className="header_button" onClick={props.toggleTheme}>
  {props.isDarkMode ? "light" : "dark"}
</button> */
}
