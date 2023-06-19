import classNames from "classnames";
import { FC } from "react";

interface TabCountProps {
  active?: boolean;
  count?: number;
}

const TabCount: FC<TabCountProps> = (props) => {
  if (props?.count === undefined) return <></>;

  return (
    <span
      className={classNames(
        "inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-blue-800 rounded-sm",
        {
          "bg-blue-600 text-white": props?.active,
          "bg-gray-200 text-gray-500": !props?.active,
        }
      )}
    >
      {props?.count}
    </span>
  );
};

export default TabCount;
