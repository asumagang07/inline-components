export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  label?: string;
  variant?: "solid" | "outlined" | "flat";
  noBaseStyle?: boolean;
  borderRadius?: "full" | "default" | "square";
  color?: "primary" | "secondary" | "danger" | "warning" | "success";
  size?: "sm" | "md" | "lg" | "default";
  icon?: string | JSX.Element;
  isLoading?: boolean;
  labelLoading?: string;
  className?: string;
}
