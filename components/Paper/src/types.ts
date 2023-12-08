import { DefaultColorEnum, DefaultSize } from "@inline/tailwind-config";

type titleType =
  | string
  | React.FunctionComponent<{
      className: string;
      "aria-hidden": boolean;
      onClick?: any;
    }>
  | any;

export interface TPaperProps {
  children?: React.ReactNode;
  className?: string;
  header?: titleType;
  subHeader?: titleType;
  style?: React.CSSProperties;
  customLeftActions?: React.ReactNode;
}
