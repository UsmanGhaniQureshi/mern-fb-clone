import { FaTimes } from "react-icons/fa";
import Badge from "../Badge";

const PostModal = ({ children, visible, onClose }) => {
  const closeModalHandler = (e) => {
    if (e.target.id === "Modal") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="Modal"
      onClick={closeModalHandler}
      className="flex  justify-center items-center fixed inset-0 z-50 bg-white bg-opacity-80 backdrop-blur-0"
    >
      <div className="relative w-[450px]  bg-zinc-200 rounded-2xl">
        {children}
        <Badge className="absolute top-3 right-3" onClick={onClose}>
          <FaTimes />
        </Badge>
      </div>
    </div>
  );
};

export default PostModal;
