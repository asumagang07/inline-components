import { DefaultColorEnum, DefaultSize } from "@inline/tailwind-config";
import { TooltipProps } from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

export interface ITooltipProps extends TooltipProps {
  className?: string;
  color?: keyof typeof DefaultColorEnum;
  trigger?: ReactNode;
  content?: ReactNode;
  withArrow?: boolean;
}
