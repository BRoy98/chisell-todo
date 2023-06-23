import { useDispatch, useSelector } from "react-redux";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { RootState } from "../../store";
import goal from "../../assets/goal.png";
import target from "../../assets/target.png";
import TodoCard from "../todo-card/todo-card";
import { SagaActions } from "../../store/saga-actions";
import { SplitSection, SplitSectionHeader } from "./split-section";

interface TodoContainerProps {
  boardId: number;
}

const TodoContainer: FC<TodoContainerProps> = (props) => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const tasks = useSelector((state: RootState) => state.task.tasks);

  const pendingTasks = useMemo(
    () =>
      tasks[props?.boardId]?.filter((task) => task.state === "PENDING") || [],
    [tasks, props]
  );

  const completedTasks = useMemo(
    () =>
      tasks[props?.boardId]?.filter((task) => task.state === "COMPLETE") || [],
    [tasks, props]
  );

  const addTask = useCallback(
    (e: any) => {
      e.preventDefault();
      dispatch({
        type: SagaActions.CREATE_TASK,
        payload: {
          boardId: props?.boardId,
          name: newTask,
        },
      });
      setNewTask("");
    },
    [props, newTask, dispatch]
  );

  useEffect(() => {
    dispatch({
      type: SagaActions.FETCH_TASKS,
      payload: { boardId: props?.boardId },
    });
  }, []);

  return (
    <div className="w-full flex justify-center">
      <SplitSection className="m-2">
        <SplitSectionHeader className="bg-white rounded-lg border border-gray-200">
          <span className="h-3 w-3 rounded-full bg-gray-700 mr-2 max-sm:hidden"></span>
          <span className="text-gray-700 font-medium">New Tasks</span>
        </SplitSectionHeader>
        {!pendingTasks?.length && (
          <div className="p-2 flex flex-col items-center my-6">
            <img src={goal} className="w-12" alt="todo" />
            <span className="mt-4 text-gray-500">
              Add your first task to get started
            </span>
          </div>
        )}
        <div className=" mt-2 flex flex-col gap-2">
          {pendingTasks.map((task, index) => (
            <TodoCard key={index} {...task} boardId={props?.boardId} />
          ))}
        </div>
      </SplitSection>
      <SplitSection className="p-3 bg-white">
        <form onSubmit={addTask}>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="bg-gray-50 border w-full p-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-200 focus:border-violet-500 block focus:outline-none focus:ring-4"
            placeholder="Add task..."
          />
        </form>
        <div className="text-xs text-gray-400 mt-1">
          Click enter to add task
        </div>
      </SplitSection>
      <SplitSection className="m-2">
        <SplitSectionHeader className="bg-white rounded-lg border border-gray-200">
          <span className="h-3 w-3 rounded-sm bg-green-600 mr-2 max-sm:hidden"></span>
          <span className="text-green-500 font-medium">Completed Tasks</span>
        </SplitSectionHeader>
        {!completedTasks?.length && (
          <div className="p-2 flex flex-col items-center my-6">
            <img src={target} className="w-12" alt="todo" />
            <span className="mt-4 text-gray-500">No completed tasks here.</span>
          </div>
        )}
        <div className=" mt-2 flex flex-col gap-2">
          {completedTasks.map((task, index) => (
            <TodoCard key={index} {...task} boardId={props?.boardId} />
          ))}
        </div>
      </SplitSection>
    </div>
  );
};

export default TodoContainer;
