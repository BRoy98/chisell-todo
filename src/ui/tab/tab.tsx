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
      <div className="flex items-stretch overflow-x-auto no-scrollbar">
        {props?.panes?.map((item, index) => (
          <TabHeader
            key={index}
            title={item.title}
            count={item.count}
            active={activeIndex === index}
            nextActive={activeIndex === index + 1}
            onTabClick={() => handleItemClick(index)}
          />
        ))}
        {tabEndComponent}
      </div>
      <div className="border-b-2 border-violet-50 -mt-[2px]"></div>
      <div
        className="relative my-4 z-[1] bg-gradient-to-b from-violet-50 rounded-lg"
        children={renderItems()}
      />
    </>
  );
};

export default Tab;
