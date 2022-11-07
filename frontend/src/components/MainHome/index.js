import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CreatePost from "../CreatePost";
import Reels from "../Reels";
import Rooms from "../Rooms";
import Stories from "../Stories";

const MainHome = () => {
  const [showComp, setShowComp] = useState("stories");
  const { user } = useSelector((state) => state);

  console.log(user.isVerified);
  return (
    <div className="max-w-lg flex-1 shadow-xl rounded-2xl">
      {!user.isVerified && (
        <Link
          className="bg-red-500 text-white font-medium px-2 py-1 w-full inline-block"
          to="/activate"
        >
          Click Here to Activate User
        </Link>
      )}
      <div className="flex px-5 border-b">
        <button
          onClick={() => setShowComp("stories")}
          className={`w-full py-3 hover:bg-slate-100 border-b-4 ${
            showComp === "stories" ? " border-b-sky-800" : "border-b-white"
          }`}
        >
          Stories
        </button>
        <button
          onClick={() => setShowComp("reels")}
          className={`w-full py-3 hover:bg-slate-100  border-b-4 ${
            showComp === "reels" ? " border-b-sky-800" : "border-b-white"
          }`}
        >
          Reels
        </button>
        <button
          onClick={() => setShowComp("rooms")}
          className={`w-full py-3 hover:bg-slate-100  border-b-4 ${
            showComp === "rooms" ? " border-b-sky-800" : "border-b-white"
          }`}
        >
          Rooms
        </button>
      </div>
      {showComp === "stories" && <Stories />}
      {showComp === "rooms" && <Rooms />}
      {showComp === "reels" && <Reels />}
      <CreatePost />
    </div>
  );
};

export default MainHome;
