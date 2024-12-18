import { useTranslation } from "react-i18next";

import { Linker, ThemeToggle } from "@/shared/components";

interface HeaderProps {
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}
export const Header = (props: HeaderProps) => {
  const { t, i18n } = useTranslation();

  return (
    <header className="header_main" aria-label="Main Header">
      <div className="header_inner">
        <div className="header_left">
          <Linker href="/" className="header_logo">
            taeopia
          </Linker>
          <nav className="header_nav" aria-label="Primary Navigation">
            <ul className="header_nav">
              <li className="menu_item">
                <Linker href="/" className="menu_link">
                  {t("header.docs")}
                </Linker>
              </li>
              <li className="menu_item">
                <Linker href="/">UI</Linker>
              </li>
              <li className="menu_item">
                <Linker href="/components">Components</Linker>
              </li>

              <li className="menu_item">
                <Linker href="/applications">Applications</Linker>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header_right">
          <button onClick={() => console.clear()}>콘솔 지우기</button>
          <button onClick={() => i18n.changeLanguage("ko")}>언어 변경</button>
          <div className="header_user-actions">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <ul className="submenu">
        <li>
          <Linker href="/docs/intro">Introduction</Linker>
        </li>
        <li>
          <Linker href="/docs/getting-started">Getting Started</Linker>
        </li>
        <li>
          <Linker href="/docs/api">API</Linker>
        </li>

        <li>
          <Linker href="/ui/buttons">Buttons</Linker>
        </li>
        <li>
          <Linker href="/ui/forms">Forms</Linker>
        </li>
        <li>
          <Linker href="/ui/cards">Cards</Linker>
        </li>
        <li>
          <Linker href="/table">table</Linker>
        </li>
        <li>
          <Linker href="/ui/forms">Forms</Linker>
        </li>
        <li>
          <Linker href="/ui/cards">Cards</Linker>
        </li>
      </ul>
    </header>
  );
};

{
  /* <button className="header_button" onClick={props.toggleTheme}>
  {props.isDarkMode ? "light" : "dark"}
</button> */
}
