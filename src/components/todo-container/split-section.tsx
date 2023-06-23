// const SplitHeader = () => {
//   return (
//     <div className="grid grid-cols-3 w-full">
//       <div className="bg-white rounded-lg shadow-lg shadow-violet-200 flex justify-center items-center p-1 m-1  cursor-pointer text-gray-700">
//         <span className="h-3 w-3 rounded-full bg-gray-700 mr-2 max-sm:hidden"></span>
//         <span>TODO</span>
//       </div>
//       <div className="flex justify-center items-center p-1 m-1 rounded-lg cursor-pointer text-gray-700">
//         <span>ADD TASK</span>
//       </div>
//       <div className="bg-white rounded-lg shadow-lg shadow-violet-200 flex justify-center items-center p-1 m-1  cursor-pointer  text-green-500">
//         {/* <span className="h-4 w-4 rounded-sm bg-gray-700"></span> */}
//         <span className="h-3 w-3 rounded-sm bg-green-600 mr-2 max-sm:hidden"></span>
//         <span>COMPLETE</span>
//       </div>
//     </div>
//   );
// };

import classNames from "classnames";
import { FC } from "react";

interface SplitSectionProps {
  className?: string;
  children: React.ReactNode;
}

const SplitSection: FC<SplitSectionProps> = ({ children, className }) => (
  <div
    className={classNames(
      "flex-1 flex flex-col p-1 text-gray-700",
      className
    )}
  >
    {children}
  </div>
);

const SplitSectionHeader: FC<SplitSectionProps> = ({ children, className }) => (
  <div className={classNames("flex flex-col w-full p-2", className)}>
    <div className="flex w-full justify-center items-center">{children}</div>
  </div>
);

export { SplitSection, SplitSectionHeader };
