import Tab from "../../ui/tab/tab";
import Header from "../header/header";

const Body = () => {
  const panes = [
    {
      title: "Home",
      render: <div>Tab 3 Content</div>,
    },
    {
      title: "Office",
      render: <div>Tab 3 Content</div>,
    },
  ];

  return (
    <div className="container m-auto">
      <Header />
      <Tab panes={panes} />
    </div>
  );
};

export default Body;
