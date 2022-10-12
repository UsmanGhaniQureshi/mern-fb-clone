import { useState } from "react";
import { FaVideo, FaUserFriends, FaRegSmile } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { BiPhotoAlbum } from "react-icons/bi";
import Badge from "../Badge";
import BadgeUser from "../BadgeUser";

import PostModal from "../PostModal";
const CreatePost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="rounded-xl px-3 py-2">
      <div className="flex gap-2">
        <BadgeUser
          height="w-10"
          width="h-10"
          imgUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-full py-2 flex-1 text-left px-4 bg-slate-200 text-slate-600"
        >
          Whats on Your Mind
        </button>
      </div>
      <div className="w-full h-[1px] bg-zinc-400  mt-4  " />
      <div className="flex mt-2">
        <button className="flex justify-center rounded-2xl py-[6px] transition-colors duration-200 ease-linear text-sm font-medium items-center flex-1 gap-2 hover:bg-zinc-100">
          <FaVideo />
          Live Videos
        </button>
        <button className="flex justify-center rounded-2xl py-[6px] transition-colors duration-200 ease-linear text-sm font-medium items-center flex-1 gap-2 hover:bg-zinc-100">
          <FaVideo />
          Live Videos
        </button>
        <button className="flex justify-center rounded-2xl py-[6px] transition-colors duration-200 ease-linear text-sm font-medium items-center flex-1 gap-2 hover:bg-zinc-100">
          <FaVideo />
          Live Videos
        </button>
      </div>
      <PostModal visible={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="py-3 bg-white shadow-xl max-w-lg flex-1">
          <h1 className="text-center my-3 font-bold">Create Post</h1>
          <div className="h-[1px] w-full bg-slate-500" />
          <div className="flex py-3 px-2 gap-3">
            <BadgeUser
              height="w-10"
              width="h-10"
              imgUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
            />
            <div className="text-sm">
              <h1 className="font-bold">Usman Ghani Qureshi</h1>
              <button className="text flex text-xs font-medium items-center gap-1">
                <FaUserFriends /> Friends
                <GoTriangleDown />
              </button>
            </div>
          </div>
          <textarea
            className=" resize-none h-20 -none outline-none px-3 placeholder:text-xl placeholder:text-slate-600 w-full"
            placeholder="Whats on your mind, Usman ?"
          />
          <div className="px-2 flex items-center justify-between">
            <div className="rounded-md p-0.5 border text-xs font-extrabold shadow-sm text-white">
              <div className="rounded-md p-1 border bg-gradient-to-r from-pink-500 to-yellow-500 ">
                Aa
              </div>
            </div>
            <FaRegSmile size={22} className="text-slate-300" />
          </div>
          <div className="flex justify-between items-center px-4 py-1 border mx-2 mt-2 font-bold ">
            <h1>Add To Your Post</h1>
            <div className="flex items-center gap-2">
              <Badge className="w-8 h-8 hover:opacity-95">
                <BiPhotoAlbum className="text-green-500" size={22}/>
              </Badge>
              <Badge className="w-6 h-6"></Badge>
              <Badge className="w-6 h-6"></Badge>
              <Badge className="w-6 h-6"></Badge>
              <Badge className="w-6 h-6"></Badge>
            </div>
          </div>
        </div>
      </PostModal>
    </div>
  );
};

export default CreatePost;
