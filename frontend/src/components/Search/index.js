import { FaSearch } from "react-icons/fa";

const Search = ({ onSetVisible }) => {
  return (
    <div
      className={`flex w-full items-center p-2 gap-2 bg-slate-100 border  rounded-full`}
    >
      <FaSearch className="flex-none" />
      <input
        onFocus={onSetVisible}
        type="text"
        className={`border-none flex-1 outline-none  text-xs bg-inherit `}
        placeholder="Search Facebook"
      />
    </div>
  );
};

export default Search;
