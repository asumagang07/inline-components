import React, { FC } from "react";
import type { TPaperProps } from "./types";
import cn from "classnames";
import { Resizable } from "re-resizable";

const Paper: FC<TPaperProps> = (props) => {
  const { children, className, header, subHeader, style, customLeftActions } =
    props;

  const titleStyles = cn({
    ["flex-1 p-0 m-0 text-md text-secondary-dark whitespace-nowrap overflow-hidden truncate leading-tight"]:
      header,
    ["flex-1 p-0 m-0 text-base text-secondary-dark font-bold whitespace-nowrap overflow-hidden truncate leading-tight"]:
      subHeader,
    "pl-2": customLeftActions,
  });

  const headerStyles = cn(
    "paper__header",
    "relative flex-1 h-10 flex items-center gap-1.5  border-b border-secondary-50"
  );

  // header
  const renderHeader = () =>
    typeof header === "function" ? (
      React.createElement(header, {
        className: cn(titleStyles),
        "aria-hidden": true,
      })
    ) : typeof header === "string" ? (
      <>
        {header && (
          <div className="flex justify-between w-full">
            <p className={titleStyles}>{header}</p>
          </div>
        )}
      </>
    ) : null;

  const renderSubHeader = () =>
    typeof subHeader === "function" ? (
      <div className="w-full">{subHeader()}</div>
    ) : typeof subHeader === "string" ? (
      <>{subHeader && <p className={titleStyles}>{subHeader}</p>}</>
    ) : null;

  const displayHeader = () => (header ? renderHeader() : renderSubHeader());

  return (
    <Resizable
      className="flex-1 bg-white rounded transition duration-150 ease-in-out border border-t-4 col-span-12"
      defaultSize={{
        width: 320,
        height: 200,
      }}
    >
      <div className={headerStyles}>{displayHeader()}</div>
      Sample with default size
    </Resizable>
  );
};

export default Paper;
