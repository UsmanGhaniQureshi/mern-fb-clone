import { useRef, useState } from "react";

import useOutside from "../../hooks/useOutSideClick";

import HeaderMenuCreate from "../HeaderMenuCreate";
import HeaderMenuSocial from "../HeaderMenuSocial";
import HeaderMiddle from "../HeaderMiddle";
import HeaderSearch from "../HeaderSearch";
import HeaderRight from "../HeaderRight";
import HeaderRecentSearch from "../HeaderRecentSearch";

const Header = () => {
  const searchRef = useRef(null);
  const menuRef = useRef(null);

  const [isSearch, setIsSearch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  useOutside(searchRef, () => setIsSearch(false));
  useOutside(menuRef, () => setIsMenu(false));

  return (
    <div className="relative">
      <header className="flex justify-between bg-slate-50 px-2 py-1 gap-2">
        <HeaderSearch ref={searchRef} onSetIsSearch={() => setIsSearch(true)} />
        <HeaderMiddle />
        <HeaderRight onSetIsMenu={() => setIsMenu(true)} />
      </header>
      {isSearch && (
        <div
          ref={searchRef}
          className="absolute p-2 bg-slate-100  shadow-lg w-[300px] h-[500px] top-0 z-50 box-border gap-2"
        >
          <HeaderRecentSearch
            isSearch={isSearch}
            onSetIsSearch={() => setIsSearch(false)}
          />
        </div>
      )}
      {isMenu && (
        <div
          className="absolute w-[600px] h-[600px] bg-slate-50 p-2 rounded-xl  overflow-scroll right-10 top-20"
          ref={menuRef}
        >
          <h1 className="font-extrabold text-xl">Menu</h1>
          <div className="flex-1  py-2 mx-2 flex justify-between gap-5  ">
            <HeaderMenuSocial />
            <HeaderMenuCreate />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
