interface MenuItem {
  menuId: string;
  [key: string]: any;
}

function generateMenuTree<T extends MenuItem>(menuList: T[], parentId: string = "00000000", targetArg: keyof T = "upMenuId" as keyof T): T[] {
  return menuList
    .filter((menu) => menu[targetArg] === parentId)
    .map((menu) => ({
      ...menu,
      children: generateMenuTree(menuList, menu.menuId, targetArg),
    }));
}
export const helpers = {
  generateMenuTree,
};
