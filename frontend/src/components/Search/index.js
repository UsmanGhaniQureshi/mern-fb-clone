import { FaSearch } from "react-icons/fa";

const Search = ({ onSetVisible }) => {
  return (
    <div
      onClick={onSetVisible}
      className={`flex w-full items-center p-2 gap-2 bg-slate-100 border  rounded-full`}
    >
      <FaSearch className="flex-none" />
      <input
        type="text"
        className={`border-none flex-1 outline-none hidden md:block  text-xs bg-inherit `}
        placeholder="Search Facebook"
      />
    </div>
  );
};

export default Search;
