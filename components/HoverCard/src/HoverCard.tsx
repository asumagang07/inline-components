import React, { FC, useContext } from "react";
import type { THoverCardProps } from "./types";
import * as RHoverCard from "@radix-ui/react-hover-card";
import cn from "classnames";
import { ThemeContext } from "@inline/tailwind-config";

const HoverCard: FC<THoverCardProps> = (props) => {
  const { className, children, defaultOpen, open } = props;

  const {
    styles: {
      hoverCardStyles: { content, arrow },
    },
  } = useContext(ThemeContext);

  return (
    <RHoverCard.Root>
      <RHoverCard.Trigger asChild>
        <button id="btn">button</button>
      </RHoverCard.Trigger>
      <RHoverCard.Portal>
        <RHoverCard.Content className={content} sideOffset={5}>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              <div>
                <div className="Text bold">Radix</div>
                <div className="Text faded">@radix_ui</div>
              </div>
              <div className="Text">
                Components, icons, colors, and templates for building
                high-quality, accessible UI. Free and open-source.
              </div>
              <div style={{ display: "flex", gap: 15 }}>
                <div style={{ display: "flex", gap: 5 }}>
                  <div className="Text bold">0</div>{" "}
                  <div className="Text faded">Following</div>
                </div>
                <div style={{ display: "flex", gap: 5 }}>
                  <div className="Text bold">2,900</div>{" "}
                  <div className="Text faded">Followers</div>
                </div>
              </div>
            </div>
          </div>

          <RHoverCard.Arrow className={arrow} />
        </RHoverCard.Content>
      </RHoverCard.Portal>
    </RHoverCard.Root>
  );
};

export default HoverCard;
