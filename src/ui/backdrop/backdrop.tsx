import { motion } from "framer-motion";
import { FC } from "react";

interface BackdropProps {
  children: React.ReactNode;
  onClick: (e: any) => void;
}

const Backdrop: FC<BackdropProps> = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="absolute inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
