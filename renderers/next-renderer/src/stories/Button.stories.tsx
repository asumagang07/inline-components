import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@inline/button";
import { BiSolidUser } from "react-icons/bi";

const meta: Meta<typeof Button> = {
  component: Button,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Button",
  argTypes: {
    label: {
      defaultValue: "Button",
      description: "Where you can define the label of the component.",
      type: "string",
    },
    size: {
      defaultValue: "default",
      description:
        "Property that defines the size of the component or a selection",
      options: ["sm", "default", "md", "lg"],
      control: { type: "select" },
    },
    variant: {
      defaultValue: "solid",
      description: "Changes the variation of the element. ",
      options: ["solid", "outlined", "flat"],
      control: { type: "select" },
    },
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
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args: any) => (
    <Button {...args} onClick={() => console.log("Clicked")} />
  ),
  args: {
    label: "Button",
    variant: "solid",
    borderRadius: "default",
    color: "purple",
    size: "default",
    isLoading: false,
    labelLoading: "Loading...",
  },
};

export const Outlined: Story = {
  render: (args: any) => <Button {...args} />,
  args: {
    ...Default.args,
    variant: "outlined",
  },
};

export const Flat: Story = {
  render: (args: any) => <Button {...args} />,
  args: {
    ...Default.args,
    variant: "flat",
  },
};

export const WithIcon: Story = {
  render: (args: any) => <Button {...args} />,
  args: {
    ...Default.args,
    icon: <BiSolidUser />,
  },
};

export const NoBaseStyle: Story = {
  render: (args: any) => <Button {...args} />,
  args: {
    ...Default.args,
    noBaseStyle: true,
  },
};

export const PlayAllProps: Story = {
  render: (args: any) => (
    <div className="flex flex-col gap-4">
      <p>Color</p>
      <div className="flex gap-4">
        <Button {...args} />
        <Button {...args} color="green" />
        <Button {...args} color="orange" />
        <Button {...args} color="red" />
        <Button {...args} color="yellow" />
        <Button {...args} color="blue" />
        <Button {...args} color="default" />
      </div>
      <p>Border Radius</p>
      <div className="flex gap-4">
        <Button {...args} />
        <Button {...args} borderRadius="square" />
        <Button {...args} borderRadius="full" />
      </div>
      <p>Variant</p>
      <div className="flex gap-4">
        <Button {...args} />
        <Button {...args} variant="outlined" />
        <Button {...args} variant="flat" />
      </div>
    </div>
  ),
  args: {
    ...Default.args,
  },
};
