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
    <button
      onClick={handleTabClick}
      className={classNames(
        "focus:outline-none",
        "inline-flex items-center px-3 py-2.5 text-center mr-2 box-border rounded-t-lg cursor-pointer select-none group transition-transform border-b-2",
        {
          "text-gray-900 font-medium bg-violet-100 border-blue-700":
            props?.active,
          "text-gray-600 border-t border-x border-gray-100 border-b-gray-200 hover:bg-violet-50":
            !props?.active,
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
    </button>
  );
};

export default TabHeader;
