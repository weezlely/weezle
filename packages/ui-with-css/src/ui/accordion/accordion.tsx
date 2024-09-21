import * as React from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";

import type { AccordionButtonProps, AccordionItemProps, AccordionPanelProps, AccordionWrapperProps } from "./accordion.type";
import { useAccordionContext } from "./accordion.context";
import { AccordionProvider } from "./accordion.provider";
import * as styles from "./styles.css";

import { ArrowDownIcon } from "../icons";

const AccordionWrapper: React.FC<AccordionWrapperProps> = ({ brandColor, fontFamily, className, size, type = "single", style, children, ...rest }) => {
  const childrenArray = React.Children.toArray(children);

  const staticStyle = [className, styles.baseAccordionWrapper];

  const dynamicStyle = assignInlineVars(styles.themeVars, {
    color: { brand: brandColor },
    font: { body: fontFamily },
    size: { width: (size.w && `${size.w}%`) || size.width || "100%", height: (size.h && `${size.h}%`) || size.height || "100%" },
  });

  const classNames: string = clsx(...staticStyle);

  return (
    <AccordionProvider type={type}>
      <div className={classNames} style={{ ...dynamicStyle, ...style }} {...rest}>
        {childrenArray.map((child, id) => React.cloneElement(child as React.ReactElement, { index: id + 1 }))}
      </div>
    </AccordionProvider>
  );
};

const AccordionButton: React.FC<AccordionButtonProps> = ({ id = "", index = 0, icon: Icon = undefined, style, children, ...rest }) => {
  const { openIndex, handleChangeIndex, type } = useAccordionContext();
  const isOpen = type === "single" ? openIndex === index : (openIndex as Set<number>).has(index!);

  const iconStyle = isOpen ? "active" : "inactive";

  const renderIcon = () => {
    if (Icon) {
      return typeof Icon === "function" ? <Icon /> : Icon;
    }
    return <ArrowDownIcon />;
  };

  return (
    <span className={styles.baseButtonWrapper}>
      <button id={id} aria-expanded={isOpen} aria-controls={id} className={styles.baseButton} onClick={() => handleChangeIndex!(index!)}>
        {children}
      </button>

      <div className={styles.iconTransform[iconStyle]} onClick={() => handleChangeIndex!(index!)}>
        {renderIcon()}
      </div>
    </span>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({ index, style, children, ...rest }) => {
  const childrenArray = React.Children.toArray(children);
  const uid = React.useId();

  const AccordionButtonComp = childrenArray.find((child) => React.isValidElement(child) && child.type === AccordionButton);
  const AccordionPanelComp = childrenArray.find((child) => React.isValidElement(child) && child.type === AccordionPanel);

  return (
    <div className={styles.baseItem} style={style} {...rest}>
      {React.cloneElement(AccordionButtonComp as React.ReactElement, { index, id: uid })}
      {React.cloneElement(AccordionPanelComp as React.ReactElement, { index, id: uid })}
    </div>
  );
};

const AccordionPanel: React.FC<AccordionPanelProps> = ({ id = undefined, index = 0, style, children, ...rest }) => {
  const { openIndex, type } = useAccordionContext();
  const isOpen = type === "single" ? openIndex === index : (openIndex as Set<number>).has(index!);

  const panelStyle = isOpen ? "active" : "inactive";

  return (
    <div className={styles.panelVariants[panelStyle]}>
      <div aria-labelledby={id} role="region" className={styles.basePanelInner}>
        {children}
      </div>
    </div>
  );
};

const Accordion = Object.assign(AccordionWrapper, {
  Item: AccordionItem,
  Button: AccordionButton,
  Panel: AccordionPanel,
});
export default Accordion;
