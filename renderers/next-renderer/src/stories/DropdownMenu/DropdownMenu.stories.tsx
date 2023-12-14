/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import DropdownMenu from "@inline/dropdownmenu";
import { Button } from "@inline/button";

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Dropdown Menu",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: (args: any) => (
    <DropdownMenu {...args}>
      <DropdownMenu.Trigger>
        <Button label="DropdownMenu" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>Content</DropdownMenu.Content>
    </DropdownMenu>
  ),
  args: {},
};
