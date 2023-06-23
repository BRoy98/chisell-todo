import { AnimatePresence, motion } from "framer-motion";
import Backdrop from "../backdrop/backdrop";
import { FC } from "react";
import classNames from "classnames";

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
            className={classNames(
              "bg-white shadow-lg shadow-gray-400 rounded-lg w-auto m-auto",
              "p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-[calc(100%-1rem)] max-w-[calc(100%-1rem)]"
            )}
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
