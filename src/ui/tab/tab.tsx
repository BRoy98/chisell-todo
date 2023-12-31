import { FC, useEffect, useState } from "react";
import _ from "lodash";
import { useDispatch } from "react-redux";
import TabHeader from "./tab-header/tab-header";
import { SagaActions } from "../../store/saga-actions";
import Modal from "../modal/modal";
import Button, { ButtonVariant } from "../button/button";

type PaneData = {
  id: number;
  title: string;
  count?: number;
  render: JSX.Element;
};

interface TabProps {
  activeIndex?: number;
  onTabChange?: (index: number) => void;
  panes: Array<PaneData>;
  tabEndComponent?: React.ReactNode;
}

const Tab: FC<TabProps> = (props) => {
  const { tabEndComponent } = props;
  const dispatch = useDispatch();
  const [panes, setPanes] = useState<Array<PaneData>>(props?.panes);
  const [deleteItem, setDeleteItem] = useState<PaneData | null>(null);
  const [activeIndex, setActiveIndex] = useState(props?.activeIndex || 0);

  const handleItemClick = (index: number) => {
    _.invoke(props, "onTabChange", index);
    setActiveIndex(index);
  };

  const handleDeleteItem = () => {
    dispatch({
      type: SagaActions.DELETE_BOARD,
      payload: {
        boardId: deleteItem?.id,
      },
    });
    setDeleteItem(null);
    if (activeIndex - 1 > -1) setActiveIndex(activeIndex - 1);
  };

  const renderItems = () => {
    return _.get(props?.panes, `[${activeIndex}].render`);
  };

  useEffect(() => {
    if (props?.panes?.length > panes.length) {
      setActiveIndex(props?.panes?.length - 1);
    }
    setPanes(props?.panes);
  }, [props?.panes, setActiveIndex, setPanes, panes]);

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
            onCloseClick={() => setDeleteItem(item)}
          />
        ))}
        {tabEndComponent}
      </div>
      <div className="border-b-2 border-violet-50 -mt-[2px]"></div>
      <div
        key={activeIndex}
        className="relative my-4 z-[1] bg-gradient-to-b from-violet-50 rounded-lg"
        children={renderItems()}
      />
      <Modal modalOpen={!!deleteItem} handleClose={() => setDeleteItem(null)}>
        <div className="p-1 md:min-w-[400px]">
          <h3 className="font-bold">Delete Board</h3>
          <div className="my-4">{`Do you want to delete the "${deleteItem?.title}" board and all it's tasks?`}</div>
          <div className="mt-2 ml-auto flex justify-end gap-2">
            <Button
              onClick={() => setDeleteItem(null)}
              variant={ButtonVariant.LIGHT}
            >
              Cancel
            </Button>
            <Button onClick={handleDeleteItem}>Delete</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Tab;
