import Button from "../../ui/button/button";
import Tab from "../../ui/tab/tab";
import Header from "../header/header";
import { ReactComponent as AddIcon } from "../../assets/add.svg";
import styles from "./body.module.scss";
import classNames from "classnames";
import TodoContainer from "../todo-container/todo-container";
import Modal from "../../ui/modal/modal";
import { useState } from "react";

const Body = () => {
  const panes = [
    {
      title: "Home",
      render: <TodoContainer />,
    },
    {
      title: "Office",
      render: <div>Tab 2 Content</div>,
    },
    {
      title: "Office",
      render: <div>Tab 2 Content</div>,
    },
    {
      title: "Office",
      render: <div>Tab 2 Content</div>,
    },
    {
      title: "Office",
      render: <div>Tab 2 Content</div>,
    },
    {
      title: "Office",
      render: <div>Tab 2 Content</div>,
    },
    {
      title: "Office",
      render: <div>Tab 2 Content</div>,
    },
    {
      title: "Office",
      render: <div>Tab 2 Content</div>,
    },
    {
      title: "Office",
      render: <div>Tab 2 Content</div>,
    },
    {
      title: "Office",
      render: <div>Tab 2 Content</div>,
    },
  ];

  const [openModel, setOpenModal] = useState(false);

  return (
    <div className="container m-auto">
      <Header />
      <Tab
        panes={panes}
        tabEndComponent={
          <div
            className={classNames(
              "sticky right-0 flex justify-center z-[3] mb-[2px]",
              styles.buttonWrapper
            )}
          >
            <Button
              onClick={() => {
                setOpenModal(true);
              }}
              className="m-2"
              startIcon={<AddIcon className="h-5 w-5" />}
            ></Button>
          </div>
        }
      />
      <Modal modalOpen={openModel} handleClose={() => setOpenModal(false)}>
        Hello world
      </Modal>
    </div>
  );
};

export default Body;
