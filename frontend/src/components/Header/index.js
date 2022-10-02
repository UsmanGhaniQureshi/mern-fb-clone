import { useRef, useState } from "react";
import {
  FaFacebook,
  FaHome,
  FaUserFriends,
  FaYoutube,
  FaFacebookMessenger,
  FaBell,
  FaGift,
  FaSearch,
  FaRegEdit,
  FaBookOpen,
  FaCalendar,
} from "react-icons/fa";

import { SiFacebookgaming } from "react-icons/si";
import { GoTriangleDown, GoArrowLeft } from "react-icons/go";

import { CgMenuGridO } from "react-icons/cg";
import useOutside from "../../hooks/useOutSideClick";
import Search from "../Search";
import SearchEdit from "../SearchEdit";
import Badge from "../Badge";
import SearchUserItem from "../SearchUserItem";
import MenuCard from "../MenuCard";
import {
  social,
  entertainment,
  meta,
  personal,
  professional,
  resources,
  shopping,
} from "../../data/Header";
import CreateCard from "../CreateCard";

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
        <div
          ref={searchRef}
          className="flex items-center max-w-md box-border gap-2"
        >
          <FaFacebook className="w-10 h-10 text-blue-700" />
          <Search onSetVisible={() => setIsSearch(true)} />
        </div>

        <div className="flex flex-1 gap-2 justify-center items-center text-2xl ">
          <div className="py-3 px-8 hover:bg-zinc-100">
            <FaHome />
          </div>
          <div className="py-3 px-8 hover:bg-zinc-100">
            <FaGift />
          </div>
          <div className="py-3 px-8 hover:bg-zinc-100">
            <SiFacebookgaming />
          </div>
          <div className="relative py-3 px-8 hover:bg-zinc-100">
            <FaYoutube />
            <span className="absolute right-4 top-1 w-5 h-5 flex items-center justify-center text-xs rounded-full bg-red-600 text-white ">
              4
            </span>
          </div>
          <div className="relative py-3 px-8 hover:bg-zinc-100">
            <FaUserFriends />
            <span className="absolute right-4 top-1 w-5 h-5 flex items-center justify-center text-xs rounded-full bg-red-600 text-white ">
              4
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-slate-200 hover:bg-slate-300 transition-colors duration-200 ease-linear rounded-full px-2 py-1 gap-1">
            <Badge className="h-8 w-8 rounded-full">
              <img
                className="w-full h-full object-cover rounded-full"
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
              />
            </Badge>
            <p className="text-[10px] font-bold">Usman Ghani</p>
          </div>
          <Badge onClick={() => setIsMenu(true)}>
            <CgMenuGridO />
          </Badge>

          <Badge className="relative">
            <FaFacebookMessenger />
            <span className="absolute right-0 -top-1 w-4 h-4 flex items-center justify-center text-xs rounded-full bg-red-600 text-white ">
              4
            </span>
          </Badge>
          <Badge className="relative">
            <FaBell />
            <span className="absolute right-0 -top-1 w-4 h-4 flex items-center justify-center text-xs rounded-full bg-red-600 text-white ">
              4
            </span>
          </Badge>
          <Badge>
            <GoTriangleDown />
          </Badge>
        </div>
      </header>
      {isSearch && (
        <div
          ref={searchRef}
          className="absolute p-2 bg-slate-100  shadow-lg w-[300px] h-[500px] top-0 z-50 box-border gap-2"
        >
          <div className="flex justify-between items-center">
            <GoArrowLeft
              className="w-10 h-10 text-blue-700"
              onClick={() => setIsSearch(false)}
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
        </div>
      )}
      {isMenu && (
        <div
          className="absolute w-[600px] h-[600px] bg-slate-50 p-2 rounded-xl  overflow-scroll right-10 top-20"
          ref={menuRef}
        >
          
          <h1 className="font-extrabold text-xl">Menu</h1>
          <div className="flex-1  py-2 mx-2 flex justify-between gap-5  ">
            <div className="flex-1 py-5 rounded-2xl shadow-xl space-y-2 bg-white p-2">
              <div className="flex gap-2 px-2 py-1 text-gray-400 bg-gray-100 flex-1 items-center rounded-full">
                <FaSearch />
                <input
                  className="outline-none bg-inherit "
                  placeholder="Search menu"
                />
              </div>
              <h1 className="font-bold mx-1">Social</h1>
              {social.map((item, key) => (
                <MenuCard key={key} item={item} />
              ))}
              {entertainment.map((item, key) => (
                <MenuCard key={key} item={item} />
              ))}
              {shopping.map((item, key) => (
                <MenuCard key={key} item={item} />
              ))}
              {personal.map((item, key) => (
                <MenuCard key={key} item={item} />
              ))}
              {professional.map((item, key) => (
                <MenuCard key={key} item={item} />
              ))}
              {resources.map((item, key) => (
                <MenuCard key={key} item={item} />
              ))}
              {meta.map((item, key) => (
                <MenuCard key={key} item={item} />
              ))}
            </div>
            <div className="relative rounded-xl bg-white w-52 p-2">
              <div className="fixed">
                <h1 className="my-2 font-bold">Create</h1>
                <CreateCard text="Post">
                  <FaRegEdit />
                </CreateCard>
                <CreateCard text="Story">
                  <FaBookOpen />
                </CreateCard>
                <CreateCard text="Life Event">
                  <FaCalendar />
                </CreateCard>
                <div className="border-t">
                  <CreateCard text="Page">
                    <FaRegEdit />
                  </CreateCard>
                  <CreateCard text="Ad">
                    <FaBookOpen />
                  </CreateCard>
                  <CreateCard text="Group">
                    <FaCalendar />
                  </CreateCard>
                  <CreateCard text="Event">
                    <FaCalendar />
                  </CreateCard>
                  <CreateCard text="MarketPlace Listing">
                    <FaCalendar />
                  </CreateCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
