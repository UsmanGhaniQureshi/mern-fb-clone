import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Link } from "react-router-dom";
import { aside } from "../../data/aside";
import AsideItem from "../ASideItem";
import BadgeUser from "../BadgeUser";

const LeftAside = ({ user }) => {
  const [isAll, setIsAll] = useState(false);
  const { firstName, lastName, userName } = user;
  return (
    <div className="w-[350px]  h-screen  overflow-y-hidden hover:overflow-y-auto p-2">
      <Link to={`${userName}`}>
        <div className="flex p-1 hover:bg-slate-100 items-center gap-4">
          <BadgeUser
            height="w-8"
            width="h-8"
            imgUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
          />

          <h1 className="font-medium text-sm">
            {firstName} {lastName}
          </h1>
        </div>
      </Link>

      {isAll ? (
        <>
          {aside.map((item, key) => (
            <AsideItem item={item} key={key} />
          ))}

          <button
            onClick={() => setIsAll(false)}
            className="flex p-1 hover:bg-slate-100 text-sm font-medium w-full items-center gap-4"
          >
            <div className="p-2 bg-slate-300 rounded-full text-black">
              <AiOutlineUp className="text-sm" />
            </div>
            Show Less
          </button>
        </>
      ) : (
        <>
          {aside.slice(0, 3).map((item, key) => (
            <AsideItem item={item} key={key} />
          ))}
          <button
            onClick={() => setIsAll(true)}
            className="flex p-1 hover:bg-slate-100 text-sm font-medium w-full items-center gap-4"
          >
            <div className="p-2 bg-slate-300 rounded-full text-black">
              <AiOutlineDown className=" text-sm" />
            </div>
            Show More
          </button>
        </>
      )}
    </div>
  );
};

export default LeftAside;

// isALL ? aside.map()+btnLess: aside.slice(0,3).map() + btnMore
