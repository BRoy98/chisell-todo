import { SplitSection, SplitSectionHeader } from "./split-section";
import goal from "../../assets/goal.png";

const TodoContainer = () => {
  const tasks: Array<any> = [];

  return (
    <div className="w-full p-2 flex justify-center">
      <SplitSection>
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
      <SplitSection className="">
        <input
          className="w-full focus:outline-none bg-slate-50 p-2 rounded-lg font-bold border-2 border-violet-100"
          placeholder="Add task..."
        />
        <textarea
          className="w-full mt-2 focus:outline-none bg-slate-50 p-2 rounded-lg border-2 border-violet-100"
          placeholder="Description"
        />
      </SplitSection>
      <SplitSection>
        <SplitSectionHeader className="bg-white rounded-lg border border-gray-200">
          <span className="h-3 w-3 rounded-sm bg-green-600 mr-2 max-sm:hidden"></span>
          <span className="text-green-500 font-medium">Completed Tasks</span>
        </SplitSectionHeader>
      </SplitSection>
    </div>
  );
};

export default TodoContainer;
