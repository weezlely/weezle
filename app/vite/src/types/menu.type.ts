import { GROUP } from "@/shared/enums";

export interface MenuData {
  href: string;
  displayName: string;
  requiredPermission: GROUP[];
  depth: number;
}
