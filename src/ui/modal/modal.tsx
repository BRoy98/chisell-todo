import { AnimatePresence, motion } from "framer-motion";
import Backdrop from "../backdrop/backdrop";
import { FC } from "react";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

interface ModalProps {
  handleClose: () => void;
  modalOpen: boolean;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ handleClose, children, modalOpen }) => {
  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {modalOpen && (
        <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-white shadow-lg shadow-gray-400 rounded-lg w-auto m-auto"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {children}
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;
