import React, { FC, useCallback, useContext } from "react";
import type { ResizableBoxProps } from "./types";
import cn from "classnames";
import { ThemeContext } from "@inline/tailwind-config";
import { Resizable } from "re-resizable";

const ResizableBox: FC<ResizableBoxProps> = (props) => {
  const {
    className,
    children,
    defaultSize = {
      width: "auto",
      height: "auto",
    },
    handle = {
      top: false,
      right: false,
      bottom: true,
      left: false,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false,
    },
  } = props;

  const {
    styles: {
      sliderStyles: { rootCls },
    },
  } = useContext(ThemeContext);

  const right = Object.keys(handle)[0];

  return (
    <Resizable
      className={(cn("relative"), className)}
      defaultSize={defaultSize}
      enable={handle}
      handleClasses={{
        right: right
          ? " flex items-center after:content-[''] after:block after:w-1 after:h-1/2 after:bg-purple-500 after:rounded-full"
          : "",
      }}
    >
      {children}
    </Resizable>
  );
};

export default ResizableBox;
