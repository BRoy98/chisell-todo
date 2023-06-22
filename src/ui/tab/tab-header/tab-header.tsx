import { FC } from "react";
import _ from "lodash";
import classNames from "classnames";
import TabCount from "./tab-count";
import { ReactComponent as CrossIcon } from "../../../assets/cross.svg";

interface TabHeaderProps {
  title?: string;
  count?: number;
  onTabClick?: () => void;
  onCloseClick?: () => void;
  active?: boolean;
  nextActive?: boolean;
}

const TabHeader: FC<TabHeaderProps> = (props) => {
  const handleTabClick = () => {
    _.invoke(props, "onTabClick");
  };

  const handleCloseClick = (e: any) => {
    e.stopPropagation();
    _.invoke(props, "onCloseClick");
  };

  return (
    <button
      onClick={handleTabClick}
      className={classNames(
        "z-[1] focus:outline-none",
        "after:content-[''] after:h-4 after:w-[1px] after:bg-gray-300",
        "inline-flex items-center first:ml-2 box-border rounded-t-lg cursor-pointer select-none group transition-transform",
        {
          "after:content-none": props?.nextActive || props?.active,
          "text-purple-700 font-bold bg-violet-100": props?.active,
          "text-gray-800 border-gray-100 border-b-gray-200 hover:bg-violet-50":
            !props?.active,
        }
      )}
    >
      <div className="mx-3 my-2.5 inline-flex items-center">
        <TabCount active={props?.active} count={props?.count} />
        <span className="px-3">{props?.title}</span>
        <CrossIcon
          onClick={handleCloseClick}
          className={classNames(
            "h-5 hover:bg-gray-300 rounded-sm transition-all group-hover:w-5 w-5 sm:w-0",
            {
              "!w-5": props?.active,
            }
          )}
        />
      </div>
    </button>
  );
};

export default TabHeader;
