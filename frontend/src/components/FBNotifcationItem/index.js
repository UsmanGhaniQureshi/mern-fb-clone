import { FaCheckCircle, FaBell } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Badge from "../Badge";

const FBNotificationItem = () => {
  return (
    <div className="flex relative group gap-2 items-center justify-between rounded-2xl transition-all duration-300 ease-linear hover:bg-slate-300 p-2">
      <div className=" relative  w-12 h-12 rounded-full">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
          className="object-cover w-full h-full rounded-full"
        />
        <Badge className="absolute w-7 h-7 -bottom-2 bg-gray-300 -right-2 ">
          <FaBell />
        </Badge>
      </div>
      <div className="flex mx-2  flex-1 gap-2 justify-between items-center">
        <div>
          <p className="text-sm text-gray-700">
            You have memories with usman Ghani Qureshi
          </p>
          <span className="text-xs font-medium text-blue-600">3 hours Ago</span>
        </div>

        <div className="p-2 rounded-full bg-blue-600" />
      </div>

      <div className="absolute group-hover:flex items-center justify-center bg-white rounded-full right-8 border border-slate-300 hidden  w-8 h-8">
        <BsThreeDots />
      </div>
    </div>
  );
};

export default FBNotificationItem;
