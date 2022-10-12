import { BiVideoPlus, BiSearch } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import FBContactItem from "../FBContactItem";

const FBContacts = () => {
  return (
    <div className="w-96 group  py-2 space-y-4 px-2 ">
      <div className="flex justify-between items-center">
        <h1 className="text-sm font-medium text-gray-500">Contacts</h1>
        <div className="flex items-center gap-4">
          <BiVideoPlus />
          <BiSearch />
          <BsThreeDots />
        </div>
      </div>
      <div className="max-h-[600px] overflow-y-hidden group-hover:overflow-y-auto">
        <FBContactItem />
        <FBContactItem />
        <FBContactItem />
        <FBContactItem />
        <FBContactItem />
        <FBContactItem />
        <FBContactItem />
        <FBContactItem />
        <FBContactItem />
        <FBContactItem />
        <FBContactItem />
        <FBContactItem />
        <FBContactItem />
      </div>
    </div>
  );
};

export default FBContacts;
