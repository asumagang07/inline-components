import React, { FC, useCallback, useContext } from "react";
import type { ButtonProps } from "./types";
import cn from "classnames";
import { ThemeContext } from "@inline/tailwind-config";
import { Spinner } from "@inline/spinner";

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    label,
    icon,
    variant = "solid",
    borderRadius = "default",
    color = "purple",
    size = "default",
    noBaseStyle = false,
    isLoading = false,
    labelLoading = "Loading",
    ...rest
  } = props;

  const {
    styles: {
      buttonStyles: { rootCls },
    },
  } = useContext(ThemeContext);

  const buttonClasses = cn(
    rootCls.base,
    rootCls.spacing.icon_and_or_label[size],
    rootCls.sizes[size],
    rootCls.borders[variant],
    rootCls.borderRadius[borderRadius],
    rootCls.variants[variant].colors[color],
    {
      "cursor-not-allowed opacity-50": isLoading,
      [rootCls.hoverable.variants[variant].colors[color]]: !isLoading,
    },
    borderRadius === "default"
      ? "rounded-sm"
      : borderRadius === "full"
      ? "rounded-full"
      : "rounded-none",

    className
  );

  const renderLeftIcon = useCallback(() => {
    if (isLoading) return <Spinner color="white" />;
    return icon;
  }, [icon, isLoading]);

  const renderLabelChildren = useCallback(() => {
    if (isLoading) return labelLoading;
    if (!isLoading && label) return label;
    return children;
  }, [labelLoading, label, children, isLoading]);

  return (
    <button
      {...rest}
      className={cn(noBaseStyle ? className : buttonClasses)}
      onClick={rest.onClick}
    >
      {renderLeftIcon()}
      {renderLabelChildren()}
    </button>
  );
};

export default Button;
