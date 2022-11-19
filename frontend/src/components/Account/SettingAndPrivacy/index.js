import { FaArrowLeft, FaCog, FaListUl, FaLock, FaRss } from "react-icons/fa";
import { IoGlobeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import Badge from "../../Badge";
import AccountMenu from "../../common/AccountMenu";
const SettingAndPrivacy = ({ onClick }) => {
  return (
    <div className="rounded-xl -ml-3 px-2 py-1 absolute top-0 w-full h-full bg-white shadow-xl">
      <div className="flex px-3 py-2 items-center gap-3">
        <Badge
          onClick={onClick}
          className="bg-inherit h-7 w-7 hover:bg-zinc-100 duration-300 transition-colors"
        >
          <FaArrowLeft />
        </Badge>
        <h1 className="font-bold text-xl">Setting And Privacy</h1>
      </div>
      <Link to="/changepassword">
        <AccountMenu menuText="Settings">
          <FaCog size={18} />
        </AccountMenu>
      </Link>

      <AccountMenu menuText="Privacy CheckUp">
        <FaLock size={18} />
      </AccountMenu>

      <AccountMenu menuText="Privacy Center">
        <FaLock size={18} />
      </AccountMenu>
      <AccountMenu menuText="Activity Log">
        <FaListUl size={18} />
      </AccountMenu>
      <AccountMenu menuText="Feed">
        <FaRss size={18} />
      </AccountMenu>
      <AccountMenu menuText="Language">
        <IoGlobeSharp size={18} />
      </AccountMenu>
    </div>
  );
};

export default SettingAndPrivacy;
