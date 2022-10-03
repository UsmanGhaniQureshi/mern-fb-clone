import { GoArrowLeft } from "react-icons/go";
import SearchEdit from "../SearchEdit";
import SearchUserItem from "../SearchUserItem";

const HeaderRecentSearch = ({ isSearch, onSetIsSearch }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <GoArrowLeft
          className="w-10 h-10 text-blue-700"
          onClick={onSetIsSearch}
        />
        <SearchEdit isVisbile={isSearch} />
      </div>

      <div className=" ">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Recent Searches</h1>
          <button className="hover:bg-slate-300 transition-colors p-1 rounded-sm text-blue-700 duration-300">
            Edit
          </button>
        </div>
        <SearchUserItem userImage="Pic" userName="User Name" />
        <SearchUserItem userImage="Pic" userName="User Name" />
        <SearchUserItem userImage="Pic" userName="User Name" />
        <SearchUserItem userImage="Pic" userName="User Name" />
      </div>
    </>
  );
};

export default HeaderRecentSearch;
