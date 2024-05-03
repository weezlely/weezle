import type { Meta, StoryObj } from "@storybook/react";
import type { CSSProperties, PropsWithChildren } from "react";
import { TypographyProps } from "taeo-ui";
import { Typography } from "taeo-ui";

type TypographyConfig = {
  color?: CSSProperties["color"];
  backgroundColor?: CSSProperties["color"];
} & Omit<TypographyProps, "color" | "backgroundColor">;

const meta: Meta<PropsWithChildren<TypographyConfig>> = {
  component: Typography,
  argTypes: {},
} satisfies Meta<typeof Typography>;

type Story = StoryObj<typeof meta>;

export default {
  title: "Components/Typography",
  component: Typography,
} as Meta;

export const XSmall: Story = {
  args: {
    size: "xs",
    children: "it's size is XS",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "it's size is SM",
  },
};
export const Middle: Story = {
  args: {
    size: "md",
    children: "it's size is MD",
  },
};
export const Large: Story = {
  args: {
    size: "lg",
    children: "it's size is LG",
  },
};
export const XLarge: Story = {
  args: {
    size: "xl",
    children: "it's size is XL",
  },
};
export const XXLarge: Story = {
  args: {
    size: "xxl",
    children: "it's size is XXL",
  },
};
