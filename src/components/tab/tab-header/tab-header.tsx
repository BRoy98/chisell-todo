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
    <div
      onClick={handleTabClick}
      className={classNames(
        "inline-flex items-center px-3 py-2.5 font-medium text-center mr-2 box-border rounded-lg cursor-pointer border-[1.5px] select-none group transition-all",
        {
          "text-gray-900 font-medium border-blue-600": props?.active,
          "text-gray-600 border-gray-200": !props?.active,
        }
      )}
    >
      <TabCount active={props?.active} count={props?.count} />
      <span className="px-3">{props?.title}</span>
      <CrossIcon
        onClick={handleCloseClick}
        className={classNames(
          "h-5 hover:bg-gray-100 rounded-sm transition-all w-0 group-hover:w-5",
          {
            "!w-5": props?.active,
          }
        )}
      />
    </div>
  );
};

export default TabHeader;
