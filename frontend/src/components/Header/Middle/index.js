import { FaHome, FaUserFriends, FaYoutube, FaGift } from "react-icons/fa";
import { SiFacebookgaming } from "react-icons/si";

const HeaderMiddle = () => {
  return (
    <div className="flex md:flex-1 gap-1 md:gap-2 justify-around md:justify-center items-center text-2xl ">
      <div className=" py-1 md:py-3 px-2 md:px-8  hover:bg-zinc-100">
        <FaHome />
      </div>
      <div className="py-1 md:py-3 px-2 md:px-8 hidden md:block hover:bg-zinc-100">
        <FaGift />
      </div>
      <div className="py-1 md:py-3 px-2 md:px-8 hidden md:block hover:bg-zinc-100">
        <SiFacebookgaming />
      </div>
      <div className="py-1 md:py-3 px-2 md:px-8 hidden md:block hover:bg-zinc-100">
        <FaYoutube />
        <span className="absolute right-4 top-1 w-5 h-5 flex items-center justify-center text-xs rounded-full bg-red-600 text-white ">
          4
        </span>
      </div>
      <div className="relative  md:py-3 px-2 md:px-8 hover:bg-zinc-100">
        <FaUserFriends />
        <p className="absolute -top-[4%] right-[20%] md:top-[2%] md:right-[25%]  w-3 h-3  md:w-5 md:h-5 flex items-center justify-center text-xs rounded-full bg-red-600 text-white ">
          4
        </p>
      </div>
    </div>
  );
};

export default HeaderMiddle;
