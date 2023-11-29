import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@inline/button";

const meta: Meta<typeof Button> = {
  component: Button,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args: any) => <Button {...args} />,
  args: {
    children: "Button",
  },
};
