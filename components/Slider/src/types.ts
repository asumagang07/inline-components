import { DefaultColorEnum, DefaultSize } from "@inline/tailwind-config";
import { SliderProps } from "@radix-ui/react-slider";

export interface ISliderProps extends SliderProps {
  className?: string;
  color?: keyof typeof DefaultColorEnum;
}
