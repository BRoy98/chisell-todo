import React, { useState } from "react";
import { Tab } from "semantic-ui-react";
import { Button, Icon } from "semantic-ui-react";

const panes = [
  { menuItem: "Tab 1", render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: "Tab 2", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: "Tab 3", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  {
    menuItem: (
      <Button icon className="m-1" onClick={(e) => {}}>
        <Icon name="world" />
      </Button>
    ),
  },
];

const TabContainer = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="p-1">
      <Tab
        panes={panes}
        activeIndex={selectedTab}
        onTabChange={(e, { activeIndex }: any) => {
          if (activeIndex === 3) return;
          setSelectedTab(activeIndex);
        }}
      />
    </div>
  );
};

export default TabContainer;
