/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { Paper } from "@inline/paper";

const meta: Meta<typeof Paper> = {
  component: Paper,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Paper",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  render: (args: any) => <Paper {...args} />,
  args: {},
};
