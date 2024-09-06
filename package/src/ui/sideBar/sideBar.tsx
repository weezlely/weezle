import * as React from "react";
import clsx from "clsx";

import type {
  SideBarContainerProps,
  SideBarHeaderProps,
  SideBarBodyProps,
  SideBarListProps,
  SideBarItemProps,
  SideBarToggleProps,
  SideBarDividerProps,
} from "./sideBar.type";
import { SideBarProvider } from "./sideBar.provider";
import * as styles from "./styles.css";

const SidebarContainer = <T extends HTMLElement>(
  { bgColor = "neutral", size = "md", isRounded = false, className, style, children, ...rest }: SideBarContainerProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.container];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: React.CSSProperties = { ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames: string = clsx(className, staticStyle);

  return (
    <aside
      ref={forwardedRef}
      className={`${
        (styles.container2,
        {
          color: bgColor,
          size,
          rounded: isRounded,
        })
      }`}
      style={dynamicStyle}
      {...rest}
    >
      {children}
    </aside>
  );
};

const SidebarHeader = <T extends HTMLDivElement>(
  { style, children, ...rest }: SideBarHeaderProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.header];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: React.CSSProperties = { ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames = clsx("side-bar__header", staticStyle);
  return (
    <div ref={forwardedRef} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};
const SidebarBody = <T extends HTMLElement>(
  { style, children, ...rest }: SideBarBodyProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.body];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: React.CSSProperties = { ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames = clsx("side-bar__nav", staticStyle);
  return (
    <nav ref={forwardedRef} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </nav>
  );
};

const SidebarList = <T extends HTMLUListElement>(
  { style, children, ...rest }: SideBarListProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.list];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: React.CSSProperties = { ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames = clsx("side-bar__list", staticStyle);

  return (
    <ul ref={forwardedRef} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </ul>
  );
};

const SidebarItem = <T extends HTMLLIElement>(
  { style, children, ...rest }: SideBarItemProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.item];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: React.CSSProperties = { ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames = clsx("side-bar__item", staticStyle);
  return (
    <li ref={forwardedRef} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </li>
  );
};

const SidebarToggle = <T extends HTMLDivElement>(
  { style, children, ...rest }: SideBarToggleProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.toggle];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: React.CSSProperties = { ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames = clsx("side-bar__toggle", staticStyle);

  return (
    <div ref={forwardedRef} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </div>
  );
};

const SidebarDivider = <T extends HTMLElement>(
  { style, children, ...rest }: SideBarDividerProps,

  forwardedRef: React.ForwardedRef<T>
) => {
  /**
   * @description static-change style depending on the Props
   */
  const staticStyle = [styles.divider];
  /**
   * @description dynamic-change style depending on the Props
   */
  const dynamicStyle: React.CSSProperties = { ...style };
  /**
   * @description classNames for static-change style
   */
  const classNames = clsx("side-bar__divider", staticStyle);
  return (
    <span ref={forwardedRef} className={classNames} style={dynamicStyle} {...rest}>
      {children}
    </span>
  );
};

const Sidebar = Object.assign(SideBarProvider, {
  Container: React.forwardRef(SidebarContainer),
  Header: React.forwardRef(SidebarHeader),
  Body: React.forwardRef(SidebarBody),
  List: React.forwardRef(SidebarList),
  Item: React.forwardRef(SidebarItem),
  Divider: React.forwardRef(SidebarDivider),
  Toggle: React.forwardRef(SidebarToggle),
});

export default Sidebar;
