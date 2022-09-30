import {
  FaFacebook,
  FaSearch,
  FaHome,
  FaUserFriends,
  FaYoutube,
  FaFacebookMessenger,
  FaBell,
  FaGift,
} from "react-icons/fa";
import { SiFacebookgaming } from "react-icons/si";
import { CgMenuGridO } from "react-icons/cg";

const Header = () => {
  return (
    <header className="flex justify-between bg-slate-50 px-2 py-1 gap-2">
      <div className="flex items-center gap-2">
        <FaFacebook className="w-10 h-10 text-blue-700" />
        <div className="flex w-full items-center py-2 max-w-lg px-2 gap-2 bg-slate-100 border rounded-full">
          <FaSearch className="flex-none" />
          <input
            type="text"
            className="border-none flex-1 outline-none  text-xs bg-inherit"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      <div className="flex gap-2 items-center text-2xl ">
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
        <div className="flex items-center gap-1">
          <p className="text-xs font-bold">Usman Ghani</p>
          <div className="h-10 w-10 rounded-full">
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
            />
          </div>
        </div>
        <div className="flex items-center rounded-full justify-center h-10 w-10 bg-slate-400">
          <CgMenuGridO />
        </div>
        <div className="flex relative items-center rounded-full justify-center h-10 w-10 bg-slate-400">
          <FaFacebookMessenger />
          <span className="absolute right-0 -top-1 w-4 h-4 flex items-center justify-center text-xs rounded-full bg-red-600 text-white ">
            4
          </span>
        </div>
        <div className="flex relative items-center rounded-full justify-center h-10 w-10 bg-slate-400">
          <FaBell />
          <span className="absolute right-0 -top-1 w-4 h-4 flex items-center justify-center text-xs rounded-full bg-red-600 text-white ">
            4
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
