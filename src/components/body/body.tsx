import Button from "../../ui/button/button";
import Tab from "../../ui/tab/tab";
import Header from "../header/header";
import { ReactComponent as AddIcon } from "../../assets/add.svg";

const Body = () => {
  const panes = [
    {
      title: "Home",
      render: <div>Tab 1 Content</div>,
    },
    {
      title: "Office",
      render: <div>Tab 2 Content</div>,
    },
  ];

  return (
    <div className="container m-auto">
      <Header />
      <Tab
        panes={panes}
        tabEndComponent={
          <Button startIcon={<AddIcon className="h-5 w-5" />}></Button>
        }
      />
    </div>
  );
};

export default Body;
