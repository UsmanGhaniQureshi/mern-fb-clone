import { GoTriangleUp, GoTriangleDown, GoTriangleRight } from "react-icons/go";

const Error = ({ message, isUp }) => {
  return (
    <div className="relative flex-1 md:flex-none mt-2 my-1 md:px-2 px-1 text-xs md:text-base py-1 bg-red-600 rounded-sm text-white">
      <p>{message}</p>
      {isUp ? (
        <GoTriangleUp className="absolute hidden md:block -top-5 left-4 z-50 text-red-600 w-8 h-8" />
      ) : (
        <GoTriangleDown className="absolute hidden md:block -top-5 left-4 z-50 text-red-600 w-8 h-8" />
      )}
      <GoTriangleRight className="absolute  md:hidden top-0 -right-4 z-50 text-red-600 w-6 h-6" />
    </div>
  );
};

export default Error;
