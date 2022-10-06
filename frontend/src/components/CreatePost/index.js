import { FaVideo } from "react-icons/fa";
import BadgeUser from "../BadgeUser";
const CreatePost = () => {
  return (
    <div className="rounded-xl px-3 py-2">
      <div className="flex gap-2">
        <BadgeUser
          height="w-10"
          width="h-10"
          imgUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
        />
        <button className="rounded-full py-2 flex-1 text-left px-4 bg-slate-200 text-slate-600">
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
    </div>
  );
};

export default CreatePost;
