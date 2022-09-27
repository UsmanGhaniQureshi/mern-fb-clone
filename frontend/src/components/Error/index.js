import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

const Error = ({ message, isUp }) => {
  return (
    <div className="relative mt-2 my-1 px-2 py-1 bg-red-600 rounded-sm text-white">
      <p>{message}</p>
      {isUp ? (
        <GoTriangleUp className="absolute -top-5 left-4 z-50 text-red-600 w-8 h-8" />
      ) : (
        <GoTriangleDown className="absolute -top-5 left-4 z-50 text-red-600 w-8 h-8" />
      )}
    </div>
  );
};

export default Error;
