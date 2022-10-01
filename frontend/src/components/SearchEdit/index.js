import { FaSearch } from "react-icons/fa";

const SearchEdit = ({ isVisbile }) => {
  return (
    <div
      className={`flex w-full items-center p-2 gap-2 bg-slate-100 border  rounded-full`}
    >
      {!isVisbile && <FaSearch className="flex-none" />}
      <input
        type="text"
        className={`border-none flex-1 outline-none  text-xs bg-inherit `}
        placeholder="Search Facebook"
      />
    </div>
  );
};

export default SearchEdit;
