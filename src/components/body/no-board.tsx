import { FC } from "react";
import startup from "../../assets/startup.png";
import Button from "../../ui/button/button";

interface NoBoardProps {
  openModel: () => void;
}

const NoBoard: FC<NoBoardProps> = ({ openModel }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 h-[calc(100vh-200px)]">
      <img src={startup} className="w-28 max-w-[calc(100%-2rem)]" alt="todo" />
      <div className="text-gray-500">
        Create your first board to get started!
      </div>
      <Button className="px-6" onClick={openModel}>
        Create Board
      </Button>
    </div>
  );
};

export default NoBoard;
