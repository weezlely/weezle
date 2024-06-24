import { type RecipeVariants, recipe } from "@vanilla-extract/recipes";
import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

export type ButtonRecipeVariants = RecipeVariants<typeof button> & PropsWithChildren<ComponentPropsWithoutRef<"button">>;

export const button = recipe({
  base: {
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "8px 16px",
    fontSize: "16px",
  },
  variants: {
    variant: {
      primary: { backgroundColor: "blue", color: "white" },
      secondary: { backgroundColor: "gray", color: "white" },
      success: { backgroundColor: "green", color: "white" },
      danger: { backgroundColor: "orange", color: "white" },
      error: { backgroundColor: "red", color: "white" },
    },
    size: {
      xs: { padding: "2px 4px", fontSize: "10px" },
      sm: { padding: "4px 8px", fontSize: "12px" },
      md: { padding: "8px 16px", fontSize: "16px" },
      lg: { padding: "12px 24px", fontSize: "20px" },
      xl: { padding: "16px 32px", fontSize: "24px" },
      xxl: { padding: "20px 40px", fontSize: "28px" },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
