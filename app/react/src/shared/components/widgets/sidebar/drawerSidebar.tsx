import { Fragment, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

import type { MenuList } from "@/types";
import { useAppStore, useUserStore } from "@/state";
import { helpers } from "@/shared/lib";
import { Accordion, Icon, Linker } from "@/shared/components";

export const DrawerSidebar = () => {
  const [, depth2, ...restDepth] = useLocation().pathname.split("/");
  const { menuListResponse, setCurrentMenuList } = useUserStore();
  const { drawer } = useAppStore();

  const filteredMenuList = useMemo(() => {
    if (!menuListResponse?.data) return [];
    return menuListResponse.data.filter((menuData) => menuData.href.split("/")[1] === depth2);
  }, [menuListResponse?.data, depth2]);

  const sortedMenuList = useMemo(() => {
    return helpers.generateMenuTree<MenuList>(filteredMenuList, "00000000", "upMenuId") || null;
  }, [filteredMenuList]);

  useEffect(() => {
    setCurrentMenuList(sortedMenuList);
  }, [sortedMenuList]);

  return (
    <aside className={`side-bar left-bar ${drawer && "open__drawer"}`}>
      <nav className="side-bar-left">
        <Accordion>
          {sortedMenuList?.map((depth1) =>
            depth1.children?.map((depth2) => {
              const [, , depth2Href] = depth2.href.split("/");
              const [targetDepth] = restDepth;

              if (depth2Href !== targetDepth) return null;
              return (
                <Fragment key={depth2.href}>
                  <h3 className={`fs_32 p-10 ${drawer && "drawer__text"}`}>{"Menu"}</h3>
                  <h3 className={`fs_22 p-10 ${drawer && "drawer__text"}`}>{depth2.display}</h3>
                  {depth2.children?.map((depth3) => (
                    <Accordion.Item key={depth3.menuId} initialValue>
                      {({ isActive, toggle }) => {
                        const toggleButtonClass = depth3.children ? "accordion__toggle-arrow more" : "accordion__toggle-arrow";
                        const toggleIconClass = isActive ? "icon__arrow img_to_bk80 on" : "icon__arrow img_to_bk80";
                        return (
                          <Fragment key={depth3.href}>
                            <div className={`accordion__toggle ${drawer && "drawer__text"}`} onClick={toggle}>
                              {depth3.display}
                              <button type="button" className={toggleButtonClass} onClick={toggle}>
                                <Icon className={toggleIconClass} src="chevron_down_bk_16" alt="화살표" />
                              </button>
                            </div>
                            <>
                              {depth3.children?.map((depth4) => (
                                <div key={depth4.href} className={`side-bar-content ${isActive ? "active" : ""}`}>
                                  <Linker className={`${drawer && "drawer__text"}`} href={depth4.href}>
                                    {depth4.display}
                                  </Linker>
                                </div>
                              ))}
                            </>
                          </Fragment>
                        );
                      }}
                    </Accordion.Item>
                  ))}
                </Fragment>
              );
            })
          )}
        </Accordion>
      </nav>
    </aside>
  );
};
