/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "@inline/popover";
import { Button } from "@inline/button";

const meta: Meta<typeof Popover> = {
  component: Popover,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Popover",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: (args: any) => <Popover {...args} />,
  args: {
    children: <Button label="Trigger" />,
  },
};
