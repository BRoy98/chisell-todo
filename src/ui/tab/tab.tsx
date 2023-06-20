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
  tabEndComponent?: React.ReactNode;
}

const Tab: FC<TabProps> = (props) => {
  const { tabEndComponent } = props;
  const [activeIndex, setActiveIndex] = useState(props?.activeIndex || 0);

  const handleItemClick = (index: number) => {
    _.invoke(props, "onTabChange", index);
    setActiveIndex(index);
  };

  const renderItems = () => {
    return _.get(props?.panes, `[${activeIndex}].render`);
  };

  return (
    <>
      <div className="flex items-center">
        {props?.panes?.map((item, index) => (
          <TabHeader
            key={index}
            title={item.title}
            count={item.count}
            active={activeIndex === index}
            onTabClick={() => handleItemClick(index)}
          />
        ))}
        {tabEndComponent}
      </div>
      <div className="border-b-2 border-gray-200 -mt-[2px]"></div>
      <div children={renderItems()} />
    </>
  );
};

export default Tab;
