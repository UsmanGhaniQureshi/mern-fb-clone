import { FaTimes } from "react-icons/fa";
import Badge from "../Badge";

const SearchUserItem = ({ userName, userImage }) => {
  return (
    <div className="flex justify-between items-center hover:bg-slate-300  transition-colors duration-500px-2 px-2 py-1 rounded-md">
      <div className="flex items-center gap-1">
        <Badge>
          <p>{userImage}</p>
        </Badge>
        <p>{userName}</p>
      </div>
      <Badge className="h-8 w-8 hover:bg-slate-400 transition-colors duration-300">
        <FaTimes />
      </Badge>
    </div>
  );
};

export default SearchUserItem;
