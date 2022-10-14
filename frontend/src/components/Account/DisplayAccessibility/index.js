import { FaArrowLeft } from "react-icons/fa";
import Badge from "../../Badge";

const DisplayAccessibility = ({ onClick }) => {
  return (
    <div className="rounded-xl -ml-3 px-2 py-1 absolute top-0 w-full h-full bg-white shadow-xl">
      <div className="flex px-3 py-2 items-center gap-2">
        <Badge
          onClick={onClick}
          className="bg-inherit h-7 w-7 hover:bg-zinc-100 duration-300 transition-colors"
        >
          <FaArrowLeft />
        </Badge>
        <h1 className="font-bold text-[18px]">Display And Accessibility</h1>
      </div>
    </div>
  );
};

export default DisplayAccessibility;
