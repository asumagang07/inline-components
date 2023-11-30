import React, { FC, useContext } from "react";
import type { ButtonProps } from "./types";
import cn from "classnames";
import { usePlaywindTheme } from "@inline/tailwind-config";

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    color = "primary",
    size = "md",
    label,
    variant = "solid",
    noBaseStyle,
    icon,
    isLoading = false,
    labelLoading = "loading",
    borderRadius = "default",
    className,
  } = props;

  const {
    buttonStyles: { rootCls },
  } = usePlaywindTheme();

  const buttonClasses = cn(
    rootCls.base,
    rootCls.spacing.icon_and_or_label[size],
    rootCls.sizes[size],
    rootCls.borders[variant],
    // rootCls.borderRadius[borderRadius],
    // rootCls.variants[variant].colors[color],
    // {
    //   "cursor-not-allowed opacity-50": isLoading,
    //   [rootCls.hoverable.variants[variant].colors[color]]: !isLoading,
    // },
    borderRadius === "default"
      ? "rounded-sm"
      : borderRadius === "full"
      ? "rounded-full"
      : "rounded-none",

    className
  );

  return (
    <button
      className={cn(buttonClasses, "border-4 border-red-500")}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
