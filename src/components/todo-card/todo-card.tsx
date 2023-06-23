import { FC } from "react";
import { useDispatch } from "react-redux";
import { SagaActions } from "../../store/saga-actions";
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";

interface TodoCardProps {
  id: number;
  name: string;
  boardId: number;
}

const TodoCard: FC<TodoCardProps> = (props) => {
  const dispatch = useDispatch();

  const completeTask = () => {
    dispatch({
      type: SagaActions.COMPLETE_TASK,
      payload: { taskId: props?.id, boardId: props.boardId },
    });
  };

  const deleteTask = () => {
    dispatch({
      type: SagaActions.DELETE_TASK,
      payload: { taskId: props?.id, boardId: props.boardId },
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-2 flex justify-between">
      <div>{props.name}</div>
      <div className="flex gap-2">
        <div
          className="cursor-pointer p-1 hover:bg-slate-100 transition-colors rounded-full"
          onClick={completeTask}
        >
          <CheckIcon className="h-5  text-green-500" />
        </div>
        <div
          className="cursor-pointer p-1 hover:bg-slate-100 transition-colors rounded-full"
          onClick={deleteTask}
        >
          <DeleteIcon className="h-5 text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
