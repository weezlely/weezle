import { Linker, ThemeToggle } from "@/shared/components";
import { useAppStore } from "@/state";
import { useLocation } from "react-router-dom";

interface HomeHeaderProps {}

const links = [
  { href: "/docs", label: "Docs" },
  { href: "/ui", label: "UI" },
  { href: "/applications", label: "Applications" },
  { href: "/posts", label: "Posts" },
  { href: "/blog", label: "Blog" },
];

export const HomeHeader = (props: HomeHeaderProps) => {
  const { isEntry } = useAppStore();
  const { pathname } = useLocation();
  const location = pathname.split("/")[1];
  const changeTextColor = !isEntry ? "text_bk" : "text_wh";
  return (
    <header className="header header-single-line" aria-label="Main Header">
      <div className="header__inner">
        <div className="header__left">
          <Linker href="/" className={`header__logo ${changeTextColor}`}>
            T A E O P I A
          </Linker>
          <nav className="header__nav" aria-label="Home Navigation">
            <ul className="header__menu">
              {links.map((link) => (
                <li key={link.href} className={`header__menu-item ${location === link.href.split("/")[1] ? "active" : ""}`}>
                  <Linker href={link.href} className={`header__menu-item-link ${changeTextColor}`}>
                    {link.label}
                  </Linker>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header__right">
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
