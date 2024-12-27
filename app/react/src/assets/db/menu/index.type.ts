import { GROUP } from "@/shared/enums";

interface MenuList {
  depth: string;
  upMenuId: string;
  menuId: string;
  href: string;
  display: string;
  requiredPermission: GROUP[];
}

export type MenuListResponse = {
  title: string;
  data: MenuList[];
};
