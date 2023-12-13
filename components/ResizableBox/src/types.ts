import { DefaultColorEnum, DefaultSize } from "@inline/tailwind-config";
import { ResizableProps, Enable } from "re-resizable";
import { ReactNode } from "react";

export interface ResizableBoxProps extends Omit<ResizableProps, "enable"> {
  className?: string;
  children?: ReactNode;
  handle?: Enable | false;
}
