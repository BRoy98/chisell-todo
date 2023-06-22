import Tab from "../../ui/tab/tab";
import Header from "../header/header";
import Button, { ButtonVariant } from "../../ui/button/button";
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
              variant={ButtonVariant.LIGHT}
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
        <div className="p-1 md:min-w-[400px]">
          <h3 className="font-bold">Add Board</h3>
          <input
            type="text"
            id="board_name"
            className="mt-2 bg-gray-50 border w-full p-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-200 focus:border-violet-500 block focus:outline-none focus:ring-4"
            placeholder="My First Board"
            required
          />
          <Button className="mt-2 ml-auto">Create</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Body;
