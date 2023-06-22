import classNames from "classnames";
import { FC } from "react";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: (e: any) => void;
}

const light = "text-gray-600 bg-white hover:bg-gray-100";

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props?.onClick}
      className={classNames(
        props?.className,
        "focus:outline-none rounded-lg px-3 py-2 items-center flex transition-colors",
        light
      )}
    >
      {props?.startIcon}
      {props?.children}
      {props?.endIcon}
    </button>
  );
};

export default Button;
