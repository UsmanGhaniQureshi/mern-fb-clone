import { BsThreeDots } from "react-icons/bs";
import FBNotificationItem from "../FBNotifcationItem";

const FBNotification = () => {
  return (
    <div className="flex p-2 shadow-lg flex-col gap-2">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Notifications</h1>
        <div className="flex gap-5 items-center">
          <BsThreeDots />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <button className="px-3 py-2 rounded-full text-sky-600 hover:bg-sky-300 bg-sky-100">
          All
        </button>
        <button className="px-3 py-2  rounded-full bg-slate-300">UnRead</button>
      </div>
      <div className="flex items-center justify-between">
        <p>Earlier</p>
        <button className="text-sky-500 hover:bg-slate-200 px-2 py-1 rounded-sm">
          See All
        </button>
      </div>
      <FBNotificationItem />
      <FBNotificationItem />
      <FBNotificationItem />
      <FBNotificationItem />
      <FBNotificationItem />
      <FBNotificationItem />
    </div>
  );
};

export default FBNotification;
