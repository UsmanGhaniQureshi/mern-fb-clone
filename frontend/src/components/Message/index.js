import { FaCheckCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const Message = () => {
  return (
    <div className="flex relative group gap-2 items-center justify-between rounded-2xl transition-all duration-300 ease-linear hover:bg-slate-300 p-2">
      <div className="w-12 h-12 rounded-full">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      <div className="flex flex-1 gap-2 justify-between items-center">
        <div>
          <h1 className="text-sm">Usman Ghani Qureshi</h1>
          <div className="flex justify-between items-center text-xs  font-light">
            <p className="w-[200px] whitespace-nowrap overflow-hidden text-ellipsis ">
              This is the test Message for testing Purpose Purpose Purpose
              Purpose
            </p>
            <span>4d</span>
          </div>
        </div>
        <FaCheckCircle className="text-xs " />
      </div>
      <div className="absolute group-hover:flex items-center justify-center bg-white rounded-full right-8 border border-slate-300 hidden  w-8 h-8">
        <BsThreeDots />
      </div>
    </div>
  );
};

export default Message;
