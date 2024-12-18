import { useTranslation } from "react-i18next";

import { Linker, ThemeToggle } from "@/shared/components";

interface PageHeaderProps {
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}
export const PageHeader = (props: PageHeaderProps) => {
  const { t, i18n } = useTranslation();

  return (
    <header className="header header-multi-line" aria-label="Main Header">
      <div className="header__inner">
        <div className="header__left">
          <Linker href="/" className="header__logo">
            taeopia
          </Linker>
          <nav className="header__nav" aria-label="Primary Navigation">
            <ul className="header__menu">
              <li className="header__menu-item">
                <Linker href="/" className="menu_link">
                  {t("header.docs")}
                </Linker>
              </li>
              <li className="header__menu-item">
                <Linker href="/">UI</Linker>
              </li>
              <li className="header__menu-item">
                <Linker href="/components">Components</Linker>
              </li>

              <li className="header__menu-item">
                <Linker href="/applications">Applications</Linker>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__right">
          <button className="header__console-clear" onClick={() => console.clear()}>
            콘솔 지우기
          </button>
          <button className="header__language-toggle" onClick={() => i18n.changeLanguage("ko")}>
            언어 변경
          </button>
          <div className="header__user-actions">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Header's sub-menu */}

      <ul className="header__submenu">
        <li className="header__submenu-item">
          <Linker href="/docs/intro" className="header__submenu-link">
            Introduction
          </Linker>
        </li>
        <li className="header__submenu-item">
          <Linker href="/docs/getting-started" className="header__submenu-link">
            Getting Started
          </Linker>
        </li>
        <li className="header__submenu-item">
          <Linker href="/docs/api" className="header__submenu-link">
            API
          </Linker>
        </li>
        <li className="header__submenu-item">
          <Linker href="/ui/buttons" className="header__submenu-link">
            Buttons
          </Linker>
        </li>
        <li className="header__submenu-item">
          <Linker href="/ui/forms" className="header__submenu-link">
            Forms
          </Linker>
        </li>
        <li className="header__submenu-item">
          <Linker href="/ui/cards" className="header__submenu-link">
            Cards
          </Linker>
        </li>
        <li className="header__submenu-item">
          <Linker href="/table" className="header__submenu-link">
            Table
          </Linker>
        </li>
      </ul>
    </header>
  );
};
