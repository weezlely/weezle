import { useTranslation } from "react-i18next";

import { Linker, ThemeToggle } from "@/shared/components";

interface HomeHeaderProps {
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}
export const HomeHeader = (props: HomeHeaderProps) => {
  const { t, i18n } = useTranslation();

  return (
    <header className="header header-single-line" aria-label="Main Header">
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
    </header>
  );
};

{
  /* <button className="header_button" onClick={props.toggleTheme}>
  {props.isDarkMode ? "light" : "dark"}
</button> */
}
