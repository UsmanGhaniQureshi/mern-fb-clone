import { BsThreeDots } from "react-icons/bs";

const Notification = () => {
  return (
    <div className=" flex p-2 shadow-lg flex-col gap-2">
      <h1 className="font-bold text-xl">Notification</h1>
      <div className="flex gap-5 items-center">
        <BsThreeDots />
      </div>
    </div>
  );
};

export default Notification;
