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
        "inline-flex items-center px-3 py-2.5 font-medium text-center mr-2 box-border rounded-t-lg cursor-pointer select-none group transition-transform ",
        {
          "text-gray-900 font-medium bg-gray-200 border-b-2 border-blue-600":
            props?.active,
          "text-gray-600 border-gray-200 hover:bg-gray-100": !props?.active,
        }
      )}
    >
      <TabCount active={props?.active} count={props?.count} />
      <span className="px-3">{props?.title}</span>
      <CrossIcon
        onClick={handleCloseClick}
        className={classNames(
          "h-5 hover:bg-gray-300 rounded-sm transition-all w-0 group-hover:w-5",
          {
            "!w-5": props?.active,
          }
        )}
      />
    </div>
  );
};

export default TabHeader;
