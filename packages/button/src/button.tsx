import React, { FC } from "react";
import type { ButtonProps } from "./types";

const Button: FC<ButtonProps> = (props) => {
  const { children } = props;
  return (
    <button className="border border-blue-500" type="button">
      {children}
    </button>
  );
};

export default Button;
