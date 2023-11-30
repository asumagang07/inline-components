import { DefaultColorEnum, DefaultSize } from "@inline/tailwind-config";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  label?: string;
  variant?: "solid" | "outlined" | "flat";
  noBaseStyle?: boolean;
  borderRadius?: "full" | "default" | "square";
  color?: keyof typeof DefaultColorEnum;
  size?: keyof typeof DefaultSize;
  icon?: string | JSX.Element;
  isLoading?: boolean;
  labelLoading?: string;
  className?: string;
}
