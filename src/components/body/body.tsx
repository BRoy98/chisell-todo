import { useEffect, useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import Tab from "../../ui/tab/tab";
import Button, { ButtonVariant } from "../../ui/button/button";
import { ReactComponent as AddIcon } from "../../assets/add.svg";
import Header from "../header/header";
import styles from "./body.module.scss";
import TodoContainer from "../todo-container/todo-container";
import Modal from "../../ui/modal/modal";
import { sagaActions } from "../../store/saga-actions";
import { RootState } from "../../store";

const Body = () => {
  const dispatch = useDispatch();
  const [openModel, setOpenModal] = useState(false);
  const [newBoardName, setNewBoardName] = useState("");
  const boards = useSelector((state: RootState) => state.board.boards);

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_BOARDS });
  }, []);

  return (
    <div className="container m-auto">
      <Header />
      <Tab
        panes={boards.map((board) => ({
          id: board.id,
          title: board.name,
          render: <TodoContainer />,
        }))}
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
            onChange={(e) => setNewBoardName(e.target.value)}
            type="text"
            value={newBoardName}
            className="my-4 bg-gray-50 border w-full p-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-200 focus:border-violet-500 block focus:outline-none focus:ring-4"
            placeholder="My First Board"
            required
          />
          <Button
            className="mt-2 ml-auto"
            onClick={() => {
              dispatch({
                type: sagaActions.CREATE_BOARD,
                payload: {
                  boardName: newBoardName,
                },
              });
              setOpenModal(false);
            }}
          >
            Create
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Body;
