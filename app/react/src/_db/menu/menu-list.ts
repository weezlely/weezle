import { GROUP } from "@/shared/enums";

const tableList = [
  {
    href: "table",
    displayName: "table",
    requiredPermission: [GROUP.admin, GROUP.default, GROUP.manager],
    depth: 1,
  },
  // Components
  {
    href: "table/components",
    displayName: "components",
    requiredPermission: [GROUP.admin, GROUP.default, GROUP.manager],
    depth: 2,
  },
  {
    href: "table/components/rowTable",
    displayName: "rowTable",
    requiredPermission: [GROUP.admin, GROUP.default, GROUP.manager],
    depth: 3,
  },
  // Hooks
  {
    href: "table/hooks",
    displayName: "hooks",
    requiredPermission: [GROUP.admin, GROUP.default, GROUP.manager],
    depth: 2,
  },
  {
    href: "table/hooks/useTable",
    displayName: "useTable",
    requiredPermission: [GROUP.admin, GROUP.default, GROUP.manager],
    depth: 3,
  },
  {
    href: "table/hooks/useTableOutSideClick",
    displayName: "useTableOutSideClick",
    requiredPermission: [GROUP.admin, GROUP.default, GROUP.manager],
    depth: 3,
  },
  {
    href: "table/hooks/useTheme",
    displayName: "useTheme",
    requiredPermission: [GROUP.admin, GROUP.default, GROUP.manager],
    depth: 3,
  },
  // Modules
  {
    href: "table/module",
    displayName: "module",
    requiredPermission: [GROUP.admin, GROUP.default, GROUP.manager],
    depth: 2,
  },
  {
    href: "table/module/tableManger",
    displayName: "tableManger",
    requiredPermission: [GROUP.admin, GROUP.default, GROUP.manager],
    depth: 3,
  },
];

export const menuList = {
  table: { list: tableList },
};
