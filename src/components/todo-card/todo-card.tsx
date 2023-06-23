import { FC } from "react";
import { useDispatch } from "react-redux";
import { SagaActions } from "../../store/saga-actions";

interface TodoCardProps {
  id: number;
  name: string;
  boardId: number;
}

const TodoCard: FC<TodoCardProps> = (props) => {
  const dispatch = useDispatch();

  const completeTask = () => {
    dispatch({
      type: SagaActions.FETCH_TASKS,
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
        <div className="cursor-pointer" onClick={completeTask}>
          Completed
        </div>
        <div className="cursor-pointer" onClick={deleteTask}>
          Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
