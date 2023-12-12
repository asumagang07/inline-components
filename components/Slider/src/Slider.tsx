import React, { FC, useCallback, useContext } from "react";
import type { ISliderProps } from "./types";
import cn from "classnames";
import * as RSlider from "@radix-ui/react-slider";
import { ThemeContext } from "@inline/tailwind-config";

const Slider: FC<ISliderProps> = (props) => {
  const { className, color = "purple", defaultValue = [50] } = props;

  const {
    styles: {
      sliderStyles: { rootCls },
    },
  } = useContext(ThemeContext);

  return (
    <RSlider.Root
      className="relative flex items-center select-none touch-none w-[200px] h-5"
      defaultValue={defaultValue}
      max={100}
      step={1}
    >
      <RSlider.Track className="bg-default-200 relative grow rounded-full h-[3px]">
        <RSlider.Range
          className={cn("absolute  rounded-full h-full", rootCls.colors[color])}
        />
      </RSlider.Track>
      <RSlider.Thumb
        className={cn(
          "block border w-5 h-5 shadow-lg rounded-[10px] hover:scale-110  focus:outline-none focus:cursor-grab",
          rootCls.colors[color]
        )}
        aria-label="Volume"
      />
    </RSlider.Root>
  );
};

export default Slider;
