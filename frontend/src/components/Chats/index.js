import { BsThreeDots } from "react-icons/bs";
import { ImEnlarge } from "react-icons/im";
import { BiVideoPlus } from "react-icons/bi";
import { FaRegEdit, FaSearch } from "react-icons/fa";
import Message from "../Message";

const Chats = () => {
  return (
    <div className=" flex p-2 shadow-lg flex-col gap-2">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Chats</h1>
        <div className="flex gap-5 items-center">
          <BsThreeDots />
          <ImEnlarge />
          <BiVideoPlus />
          <FaRegEdit />
        </div>
      </div>
      <div className="flex items-center flex-1  rounded-full p-2 border-none bg-slate-100">
        <FaSearch />
        <input
          className="flex-1 outline-none text-sm px-2 bg-inherit"
          placeholder="Search Message"
        />
      </div>
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Chats;
