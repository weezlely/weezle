import { GROUP } from "@/shared/enums";

export interface MenuData {
  href: string;
  displayName: string;
  requiredPermission: GROUP[];
  depth: number;
}

export interface MenuList {
  depth: string;
  upMenuId: string;
  menuId: string;
  href: string;
  display: string;
  requiredPermission: string[];
  children?: MenuList[];
}

export interface MenuListResponse {
  title: string;
  data: MenuList[];
}
