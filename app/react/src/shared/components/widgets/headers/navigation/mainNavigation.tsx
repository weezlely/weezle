import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Linker, ThemeToggle } from "@/shared/components";

interface HeaderMainMenuProps {}

const links = [
  { href: "/docs", label: "Docs" },
  { href: "/ui", label: "UI" },
  { href: "/applications", label: "Applications" },
  { href: "/posts", label: "Posts" },
  { href: "/blog", label: "Blog" },
];

export const HeaderMainNavigation = (props: HeaderMainMenuProps) => {
  // const { t, i18n } = useTranslation();
  const location = useLocation().pathname.split("/")[1];

  return (
    <>
      <div className="header__left">
        <Linker href="/" className="header__logo text_bk_wh ">
          T A E O P I A
        </Linker>
        <nav className="header__nav" aria-label="Primary Navigation">
          <ul className="header__menu">
            {links.map((link) => (
              <li key={link.href} className={`header__menu-item ${location === link.href.split("/")[1] ? "active" : ""}`}>
                <Linker href={link.href} className="header__menu-item-link">
                  {link.label}
                </Linker>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="header__right">
        {/* <button className="header__console-clear" onClick={() => console.clear()}>
          콘솔 지우기
        </button>
        <button className="header__language-toggle" onClick={() => i18n.changeLanguage("ko")}>
          언어 변경
        </button> */}
        <div className="header__user-actions">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};
