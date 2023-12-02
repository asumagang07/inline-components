/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard } from "@inline/hovercard";
import { Button } from "@inline/button";

const meta: Meta<typeof HoverCard> = {
  component: HoverCard,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/HoverCard",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: (args: any) => <HoverCard {...args}>Hover Card Content</HoverCard>,
  args: {
    trigger: <button>Button</button>,
  },
};
