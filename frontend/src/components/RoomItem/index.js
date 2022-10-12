import BadgeUser from "../BadgeUser";
import { BiVideoPlus } from "react-icons/bi";
import Badge from "../Badge";

const RoomItem = ({ isUser }) => {
  return (
    <div className="flex flex-col justify-between border items-center gap-2 py-3 px-2 rounded-2xl  h-48">
      {isUser ? (
        <Badge className="w-14 h-14">
          <BiVideoPlus />
        </Badge>
      ) : (
        <BadgeUser
          height="w-14"
          width="h-14"
          imgUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
        />
      )}

      {isUser ? (
        <div className="text-xs text-center">
          <h1 className="font-medium">Usman Room</h1>
          <p className="text-slate-500 text-[10px]"> Get Started</p>
        </div>
      ) : (
        <h1 className="font-medium text-sm">Sohaib Qadeer</h1>
      )}
      <button className="py-1 w-full rounded-md text-sm border border-double border-blue-400">
        {isUser ? "Create" : "Say Hi"}
      </button>
    </div>
  );
};

export default RoomItem;
