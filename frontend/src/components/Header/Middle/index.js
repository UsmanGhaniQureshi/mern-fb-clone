import { FaHome, FaUserFriends, FaYoutube, FaGift } from "react-icons/fa";
import { SiFacebookgaming } from "react-icons/si";

const HeaderMiddle = () => {
  return (
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
  );
};

export default HeaderMiddle;
