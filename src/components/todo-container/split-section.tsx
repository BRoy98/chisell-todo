import classNames from "classnames";
import { FC } from "react";

interface SplitSectionProps {
  className?: string;
  children: React.ReactNode;
}

const SplitSection: FC<SplitSectionProps> = ({ children, className }) => (
  <div
    className={classNames("flex-1 flex flex-col p-1 text-gray-700", className)}
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
