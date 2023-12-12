import React, { FC, useCallback, useContext } from "react";
import type { PopoverProps } from "./types";
import cn from "classnames";
import { ThemeContext } from "@inline/tailwind-config";
import * as Popover from "@radix-ui/react-popover";
import { IoMdClose } from "react-icons/io";

const InlinePopover: FC<PopoverProps> = (props) => {
  const { children, className } = props;

  const {
    styles: {
      buttonStyles: { rootCls },
    },
  } = useContext(ThemeContext);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded border p-5 w-[260px] bg-white shadow-lg will-change-[transform,opacity]
animatecss data-[state=open]:data-[side=top]:animatecss-slideOutDown
 data-[state=open]:data-[side=right]:animatecss-slideOutLeft data-[state=open]:data-[side=bottom]:animatecss-slideInUp data-[state=open]:data-[side=left]:animatecss-slideOutRight"
          sideOffset={5}
        >
          Popover Content
          <Popover.Close
            className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px]  outline-none cursor-default"
            aria-label="Close"
          >
            <IoMdClose />
          </Popover.Close>
          {/* <Popover.Arrow className="fill-white" /> */}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default InlinePopover;
