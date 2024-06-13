import { type CSSProperties } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import * as styles from "./index.css";
import { SideBarProvider } from "./index.provider";
import {
  SideBarAllProps,
  SideBarContainerProps,
  SideBarHeaderProps,
  SideBarBodyProps,
  SideBarListProps,
  SideBarItemProps,
  SideBarToggleProps,
  SideBarDividerProps,
} from "./index.type";

export interface ISideBar extends SideBarAllProps {}

const SidebarContainer = ({ className, style, children, ...rest }: SideBarContainerProps) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.container];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(className, staticStyle);

  return (
    <nav className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </nav>
  );
};

const SidebarHeader = ({ style, children, ...rest }: SideBarHeaderProps) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.header];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames = clsx("side-bar__header", staticStyle);
  return (
    <div className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};
const SidebarBody = ({ style, children, ...rest }: SideBarBodyProps) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.body];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames = clsx("side-bar__nav", staticStyle);
  return (
    <nav className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </nav>
  );
};

const SidebarList = ({ style, children, ...rest }: SideBarListProps) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.list];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames = clsx("side-bar__list", staticStyle);

  return (
    <ul className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </ul>
  );
};

const SidebarItem = ({ style, children, ...rest }: SideBarItemProps) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.item];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames = clsx("side-bar__item", staticStyle);
  return (
    <li className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </li>
  );
};

const SidebarToggle = ({ style, children, ...rest }: SideBarToggleProps) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.toggle];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames = clsx("side-bar__toggle", staticStyle);

  return (
    <div className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};

const SidebarDivider = ({ style, children, ...rest }: SideBarDividerProps) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.divider];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: CSSProperties = { ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames = clsx("side-bar__divider", staticStyle);
  return (
    <span className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </span>
  );
};

const Sidebar = Object.assign(SideBarProvider, {
  Container: SidebarContainer,
  Header: SidebarHeader,
  Body: SidebarBody,
  List: SidebarList,
  Item: SidebarItem,
  Divider: SidebarDivider,
  Toggle: SidebarToggle,
});

export default Sidebar;
