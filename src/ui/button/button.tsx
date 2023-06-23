import classNames from "classnames";
import { FC } from "react";

export enum ButtonVariant {
  DEFAULT = "DEFAULT",
  LIGHT = "LIGHT",
}

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: (e: any) => void;
}

const variantStyles = {
  LIGHT: "text-gray-600 bg-white hover:bg-gray-100",
  DEFAULT: "text-white bg-violet-700 hover:bg-violet-800 ",
};

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props?.onClick}
      className={classNames(
        "focus:outline-none rounded-lg px-3 py-2 items-center flex transition-colors text-center",
        variantStyles[props?.variant || ButtonVariant.DEFAULT],
        props?.className
      )}
    >
      {props?.startIcon}
      {props?.children}
      {props?.endIcon}
    </button>
  );
};

export default Button;
