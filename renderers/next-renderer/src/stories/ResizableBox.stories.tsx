/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { ResizableBox } from "@inline/resizablebox";

const meta: Meta<typeof ResizableBox> = {
  component: ResizableBox,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/ResizableBox",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ResizableBox>;

export const Default: Story = {
  render: (args: any) => <ResizableBox {...args} />,
  args: {
    defaultSize: {
      width: 300,
      height: 300,
    },
    children: (
      <div className="border h-full w-full border-default-900 bg-default-50 flex items-center justify-center">
        Resizable Box
      </div>
    ),
    handle: {
      right: true,
      bottom: true,
    },
  },
};
