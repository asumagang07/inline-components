import React, { FC, useCallback, useContext } from "react";
import type { IDropdownMenuProps } from "./types";
import cn from "classnames";
import { ThemeContext } from "@inline/tailwind-config";
import * as RDropdownMenu from "@radix-ui/react-dropdown-menu";
import { HiMenuAlt4, HiChevronRight } from "react-icons/hi";
import { IoCheckmarkOutline } from "react-icons/io5";
import { BsDot } from "react-icons/bs";

const DropdownMenu = RDropdownMenu.Root;

const DropdownMenuTrigger = RDropdownMenu.Trigger;

/**
 * Content
 * ------------------------------------------------------------
 */
const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof RDropdownMenu.Content>,
  React.ComponentPropsWithoutRef<typeof RDropdownMenu.Content>
>(({ className, sideOffset = 4, align = "start", ...props }, ref) => {
  const {
    styles: {
      dropdownMenuStyles: {
        contentCls: { main, base },
      },
    },
  } = useContext(ThemeContext);
  return (
    <RDropdownMenu.Portal>
      <RDropdownMenu.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(base, main, className)}
        align={align}
        {...props}
      />
    </RDropdownMenu.Portal>
  );
});
DropdownMenuContent.displayName = RDropdownMenu.Content.displayName;
// ------------------------------------------------------------

export default Object.assign(DropdownMenu, {
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
});
