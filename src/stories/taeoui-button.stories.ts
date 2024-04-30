// src/components/Button/Button.stories.tsx

import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../ui/";

type ButtonProps = React.ComponentProps<typeof Button>;

const meta: Meta<ButtonProps> = {
  component: Button,
  args: {
    onClick: () => {},
    onMouseOut: () => {},
    onMouseOver: () => {},
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

export const Primary: Story = {
  args: {
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    backgroundColor: "blue",
    color: "white",
  },
};
