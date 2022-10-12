import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Buttons";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Create account",
    size: "md",
  },
  argTypes: {},
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
