import { FaCamera, FaPencilAlt, FaPlusCircle } from "react-icons/fa";
import BadgeUser from "../../BadgeUser";

const ProfileHeader = () => {
  return (
    <div className="md:bg-gradient-to-b from-zinc-500 to-white">
      <div className="max-w-4xl mx-auto">
        <div
          className="flex justify-end rounded-b-lg bg-cover w-full h-80 md:h-96"
          style={{
            backgroundImage: `url(
              "https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30436.jpg?w=2000"
            )`,
          }}
        >
          <button className="flex bg-slate-200 text-sm font-medium rounded-md my-4 mx-8 self-end py-2 px-5 justify-center items-center gap-1">
            <FaCamera />
            <span className="hidden md:inline-block">Edit Cover Photo</span>
          </button>
        </div>
        <div className="flex flex-col gap-8 md:gap-0 md:-mt-8 -mt-12 z-50 md:flex-row justify-between items-center px-4 py-3">
          <div className="flex flex-col md:flex-row items-center  gap-2">
            <BadgeUser
              className="p-1 bg-white"
              height="w-40"
              width="h-40"
              imgUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
            />
            <div className="flex gap-2 md:items-start flex-col items-center">
              <h1 className="font-bold text-[28px]">Usman Ghani Qureshi</h1>
              <p>200 Friends</p>
              <div className="flex">
                <BadgeUser
                  className="-mx-1 z-50 p-0.5 bg-white"
                  height="w-10"
                  width="h-10"
                  imgUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
                />
                <BadgeUser
                  className="-mx-1 z-50"
                  height="w-10"
                  width="h-10"
                  imgUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
                />
                <BadgeUser
                  className="-mx-1 z-50 p-0.5 bg-white"
                  height="w-10"
                  width="h-10"
                  imgUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
                />
                <BadgeUser
                  className="-mx-1 z-50 p-0.5 bg-white"
                  height="w-10"
                  width="h-10"
                  imgUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
                />
                <BadgeUser
                  className="-mx-1 z-50 p-0.5 bg-white"
                  height="w-10"
                  width="h-10"
                  imgUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <button className="flex gap-1 bg-blue-600 rounded-md text-white font-medium text-sm  border-none items-center py-2 px-3">
              <FaPlusCircle />
              <span className="inline-block">Add to Story</span>
            </button>
            <button className="flex gap-1 bg-zinc-300 rounded-md text-slate-800 font-medium text-sm  border-none items-center py-2 px-3">
              <FaPencilAlt />
              <span className="inline-block">Edit Profile</span>
            </button>
          </div>
        </div>
        <div className="px-4 py-1">
          <div className="w-full bg-zinc-300 h-[1px] border-none" />
          <div className="flex justify-between items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
