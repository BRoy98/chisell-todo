import { SplitSection, SplitSectionHeader } from "./split-section";
import goal from "../../assets/goal.png";

const TodoContainer = () => {
  const tasks: Array<any> = [];

  return (
    <div className="w-full flex justify-center">
      <SplitSection className="m-2">
        <SplitSectionHeader className="bg-white rounded-lg border border-gray-200">
          <span className="h-3 w-3 rounded-full bg-gray-700 mr-2 max-sm:hidden"></span>
          <span className="text-gray-700 font-medium">New Tasks</span>
        </SplitSectionHeader>
        {tasks.length === 0 && (
          <div className="p-2 flex flex-col items-center my-6">
            <img src={goal} className="w-12" alt="todo" />
            <span className="mt-4 text-gray-500">
              Add your first task to get started
            </span>
          </div>
        )}
        {tasks?.map((task) => (
          <div></div>
        ))}
      </SplitSection>
      <SplitSection className="p-3 bg-white">
        <input
          className="bg-gray-50 border w-full p-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-200 focus:border-violet-500 block focus:outline-none focus:ring-4"
          placeholder="Add task..."
        />
        <div className="text-xs text-gray-400 mt-1">
          Click enter to add task
        </div>
      </SplitSection>
      <SplitSection className="m-2">
        <SplitSectionHeader className="bg-white rounded-lg border border-gray-200">
          <span className="h-3 w-3 rounded-sm bg-green-600 mr-2 max-sm:hidden"></span>
          <span className="text-green-500 font-medium">Completed Tasks</span>
        </SplitSectionHeader>
      </SplitSection>
    </div>
  );
};

export default TodoContainer;
