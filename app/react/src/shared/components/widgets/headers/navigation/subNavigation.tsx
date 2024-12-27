import { useLocation } from "react-router-dom";
import { Icon, Linker } from "@/shared/components";
import { useAppStore, useUserStore } from "@/state";

interface HeaderSubNavigationProps {}

export const HeaderSubNavigation = (props: HeaderSubNavigationProps) => {
  const { pathname } = useLocation();
  const { currentMenuList } = useUserStore();
  const { setDrawer } = useAppStore();

  const currentPathSegment = pathname.split("/")[2];

  if (!currentMenuList) return null;

  const subMenuItems = currentMenuList.flatMap(
    (depth1) =>
      depth1.children?.map((depth2) => ({
        href: depth2.href,
        display: depth2.display,
        isActive: depth2.href.split("/")[2] === currentPathSegment,
      })) || []
  );

  return (
    <ul className="header__submenu">
      <p className="menu__hamburger" onClick={() => setDrawer(true)}>
        <Icon className="icon__hamburger" src="hamburger_fff_24" alt="메뉴" />
      </p>
      {subMenuItems.map(({ href, display, isActive }) => (
        <li key={href} className={`header__submenu-item ${isActive ? "active" : ""}`}>
          <Linker href={href} className="header__submenu-link">
            {display}
          </Linker>
        </li>
      ))}
    </ul>
  );
};
