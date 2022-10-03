import { FaRegEdit, FaBookOpen, FaCalendar } from "react-icons/fa";

import CreateCard from "../CreateCard";
const HeaderMenuCreate = () => {
  return (
    <div className="relative rounded-xl bg-white w-52 p-2">
      <div className="fixed">
        <h1 className="my-2 font-bold">Create</h1>
        <CreateCard text="Post">
          <FaRegEdit />
        </CreateCard>
        <CreateCard text="Story">
          <FaBookOpen />
        </CreateCard>
        <CreateCard text="Life Event">
          <FaCalendar />
        </CreateCard>
        <div className="border-t">
          <CreateCard text="Page">
            <FaRegEdit />
          </CreateCard>
          <CreateCard text="Ad">
            <FaBookOpen />
          </CreateCard>
          <CreateCard text="Group">
            <FaCalendar />
          </CreateCard>
          <CreateCard text="Event">
            <FaCalendar />
          </CreateCard>
          <CreateCard text="MarketPlace Listing">
            <FaCalendar />
          </CreateCard>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenuCreate;
