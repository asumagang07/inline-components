/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "@inline/tooltip";
import { Button } from "@inline/button";
import { HiOutlinePlus } from "react-icons/hi";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Tooltip",
  argTypes: {
    color: {
      defaultValue: "purple",
      description:
        "Property that changes theme/state of the selection i.e. background and text color",
      options: [
        "blue",
        "red",
        "orange",
        "yellow",
        "purple",
        "green",
        "default",
      ],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args: any) => <Tooltip {...args} />,
  args: {
    color: "purple",
    trigger: <Button icon={<HiOutlinePlus />} />,
    content: "Add user",
  },
};
