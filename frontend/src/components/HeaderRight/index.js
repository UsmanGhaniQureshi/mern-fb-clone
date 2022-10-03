import { FaFacebookMessenger, FaBell } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";

import Badge from "../Badge";

const HeaderRight = ({ onMenu, onAccount, onNotification, onChat }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center bg-slate-200 hover:bg-slate-300 transition-colors duration-200 ease-linear rounded-full px-2 py-1 gap-1"></div>
      <Badge onClick={onMenu}>
        <CgMenuGridO />
      </Badge>

      <Badge onClick={onChat} className="relative">
        <FaFacebookMessenger />
        <span className="absolute right-0 -top-1 w-4 h-4 flex items-center justify-center text-xs rounded-full bg-red-600 text-white ">
          4
        </span>
      </Badge>
      <Badge onClick={onNotification} className="relative">
        <FaBell />
        <span className="absolute right-0 -top-1 w-4 h-4 flex items-center justify-center text-xs rounded-full bg-red-600 text-white ">
          4
        </span>
      </Badge>
      <Badge onClick={onAccount} className="h-8 w-8 rounded-full">
        <img
          className="w-full h-full object-cover rounded-full"
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
        />
      </Badge>
    </div>
  );
};

export default HeaderRight;
