import { useRef, useState } from "react";
import { FaFacebook } from "react-icons/fa";

import useOutside from "../../../hooks/useOutSideClick";
import Search from "../../Search";
import RecentSearch from "../RecentSearch";

const HeaderLeft = () => {
  const searchRef = useRef(null);
  const [isSearch, setIsSearch] = useState(false);
  useOutside(searchRef, () => setIsSearch(false));

  return (
    <div className="relative">
      <div ref={searchRef} className="flex items-center box-border gap-2">
        <FaFacebook className="w-10 h-10 text-blue-700" />
        <Search onSetVisible={() => setIsSearch(true)} />
      </div>
      {isSearch && (
        <div
          ref={searchRef}
          className="absolute bg-slate-100  shadow-lg w-[300px] h-[500px] top-0 z-50 box-border gap-2"
        >
          <RecentSearch
            isSearch={isSearch}
            onSetIsSearch={() => setIsSearch(false)}
          />
        </div>
      )}
    </div>
  );
};

export default HeaderLeft;
