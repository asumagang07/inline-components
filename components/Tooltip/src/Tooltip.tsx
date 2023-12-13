import React, { FC, useCallback, useContext } from "react";
import type { ITooltipProps } from "./types";
import cn from "classnames";
import { ThemeContext } from "@inline/tailwind-config";
import * as RTooltip from "@radix-ui/react-tooltip";
import { HiOutlinePlus } from "react-icons/hi";

const Tooltip: FC<ITooltipProps> = (props) => {
  const { className, color = "default", trigger, content } = props;

  const {
    styles: {
      sliderStyles: { rootCls },
    },
  } = useContext(ThemeContext);

  return (
    <RTooltip.Provider>
      <RTooltip.Root>
        <RTooltip.Trigger asChild>{trigger}</RTooltip.Trigger>
        <RTooltip.Portal>
          <RTooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-white select-none rounded-sm bg-default-950 py-2 px-3 text-xs leading-none shadow-md will-change-[transform,opacity]"
            sideOffset={5}
          >
            {content}
            <RTooltip.Arrow className="fill-default-950" />
          </RTooltip.Content>
        </RTooltip.Portal>
      </RTooltip.Root>
    </RTooltip.Provider>
  );
};

export default Tooltip;
