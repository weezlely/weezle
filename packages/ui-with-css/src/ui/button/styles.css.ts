import { type RecipeVariants, recipe } from "@vanilla-extract/recipes";
import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { themeVars } from "../../vars";
import { createThemeContract } from "@vanilla-extract/css";

export type ButtonRecipeVariants = RecipeVariants<typeof button> & PropsWithChildren<ComponentPropsWithoutRef<"button">>;

export const vars = createThemeContract({
  color: {
    bgColor: null,
    fontColor: null,
    borderColor: null,
  },
});

export const button = recipe({
  base: {
    borderRadius: "4px", // 기본 radius
    cursor: "pointer",
    padding: "8px 16px",
    fontSize: "16px",
    fontFamily: themeVars.font.body,
    width: "max-content",
  },
  variants: {
    variant: {
      default: {
        backgroundColor: vars.color.bgColor, // vars에서 배경색을 가져옴
        color: vars.color.fontColor,
        border: `1px solid ${vars.color.borderColor}`, // 테두리 색상 커스텀
        selectors: {
          "&:focus": {
            backgroundColor: themeVars.interactive.focusColor,
          },
          "&:hover": {
            backgroundColor: themeVars.interactive.hoverColor,
            color: themeVars.color.muted,
          },
        },
      },
      primary: {
        backgroundColor: themeVars.color.primary,
        color: themeVars.color.text,
        border: `1px solid ${themeVars.color.primary}`, // 테두리 색상 커스텀
        selectors: {
          "&:focus": {
            backgroundColor: themeVars.interactive.focusColor,
          },
          "&:hover": {
            backgroundColor: themeVars.interactive.hoverColor,
            color: themeVars.color.muted,
          },
        },
      },
      secondary: {
        backgroundColor: themeVars.color.secondary,
        color: themeVars.color.text,
        border: `1px solid ${themeVars.color.secondary}`,
        selectors: {
          "&:focus": {
            backgroundColor: themeVars.interactive.focusColor,
          },
          "&:hover": {
            backgroundColor: themeVars.interactive.hoverColor,
            color: themeVars.color.muted,
          },
        },
      },
      success: {
        backgroundColor: themeVars.color.success,
        color: themeVars.color.text,
        border: `1px solid ${themeVars.color.success}`,
        selectors: {
          "&:focus": {
            backgroundColor: themeVars.border.successColor,
          },
          "&:hover": {
            backgroundColor: themeVars.border.successColor,
            color: themeVars.color.muted,
          },
        },
      },
      danger: {
        backgroundColor: themeVars.color.warning,
        color: themeVars.color.text,
        border: `1px solid ${themeVars.color.warning}`,
        selectors: {
          "&:focus": {
            backgroundColor: themeVars.border.errorColor,
          },
          "&:hover": {
            backgroundColor: themeVars.border.errorColor,
            color: themeVars.color.muted,
          },
        },
      },
      error: {
        backgroundColor: themeVars.color.error,
        color: themeVars.color.text,
        border: `1px solid ${themeVars.color.error}`,
        selectors: {
          "&:focus": {
            backgroundColor: themeVars.border.errorColor,
          },
          "&:hover": {
            backgroundColor: themeVars.border.errorColor,
            color: themeVars.color.muted,
          },
        },
      },
    },
    size: {
      xs: {
        padding: "2px 4px",
        fontSize: "10px",
        borderRadius: themeVars.border.radius.xs,
      },
      sm: {
        padding: "4px 8px",
        fontSize: "12px",
        borderRadius: themeVars.border.radius.sm,
      },
      md: {
        padding: "8px 16px",
        fontSize: "16px",
        borderRadius: themeVars.border.radius.md,
      },
      lg: {
        padding: "12px 24px",
        fontSize: "20px",
        borderRadius: themeVars.border.radius.lg,
      },
      xl: {
        padding: "16px 32px",
        fontSize: "24px",
        borderRadius: themeVars.border.radius.xl,
      },
      xxl: {
        padding: "20px 40px",
        fontSize: "28px",
        borderRadius: themeVars.border.radius.xxl,
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
