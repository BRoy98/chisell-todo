import { FC, useState } from "react";
import _ from "lodash";
import TabHeader from "./tab-header/tab-header";

interface TabProps {
  activeIndex?: number;
  onTabChange?: (index: number) => void;
  panes: Array<{
    title: string;
    count?: number;
    render: JSX.Element;
  }>;
}

const Tab: FC<TabProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState(props?.activeIndex || 0);

  const handleItemClick = (index: number) => {
    _.invoke(props, "onTabChange", index);
    setActiveIndex(index);
  };

  return (
    <div className="p-1">
      {props?.panes?.map((item, index) => (
        <TabHeader
          key={index}
          title={item.title}
          count={item.count}
          active={activeIndex === index}
          onTabClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Tab;
