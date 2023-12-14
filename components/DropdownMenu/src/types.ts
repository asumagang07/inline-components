import { DefaultColorEnum, DefaultSize } from "@inline/tailwind-config";
import { DropdownMenuProps } from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";

export interface IDropdownMenuProps extends DropdownMenuProps {
  className?: string;
  color?: keyof typeof DefaultColorEnum;
  trigger?: ReactNode;
  items?: IDropdownItemProps[];
}

export interface IDropdownItemProps {
  subTrigger?: ReactNode;
  disabled?: boolean;
  label?: string;
  subItems?: IDropdownItemProps[];
}
