import { FaCog, FaGreaterThan, FaMoon } from "react-icons/fa";
import { MdHelpOutline, MdFeedback, MdLogout } from "react-icons/md";
import Badge from "../Badge";
import FooterSmall from "../FooterSmall";
const Account = () => {
  return (
    <div className="rounded-xl bg-white shadow-xl px-3 py-2">
      <div className="flex gap-3 px-3 py-2 shadow-lg items-center rounded-lg hover:bg-slate-100 transition-colors duration-300">
        <div className="w-12 h-12 rounded-full">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <h1>Usman Ghani Qureshi</h1>
      </div>
      <div className="h-[1px] w-[95%] mx-auto mt-3 bg-gray-600 border-gray-600" />

      <button className="text-blue-600 mt-2 font-medium text-sm w-full text-left px-2 hover:bg-slate-100 py-1 rounded-lg">
        See All Profiles
      </button>
      <div className="flex mt-2 gap-3 px-3 py-2  items-center justify-between rounded-lg hover:bg-slate-100 transition-colors duration-300">
        <div className="flex items-center gap-2">
          <Badge>
            <FaCog />
          </Badge>
          <h1 className="font-medium">Setting And Privacy</h1>
        </div>
        <FaGreaterThan />
      </div>
      <div className="flex gap-3 px-3 py-2  items-center justify-between rounded-lg hover:bg-slate-100 transition-colors duration-300">
        <div className="flex items-center gap-2">
          <Badge>
            <MdHelpOutline />
          </Badge>
          <h1 className="font-medium">Help and Support</h1>
        </div>
        <FaGreaterThan />
      </div>
      <div className="flex gap-3 px-3 py-2  items-center justify-between rounded-lg hover:bg-slate-100 transition-colors duration-300">
        <div className="flex items-center gap-2">
          <Badge>
            <FaMoon />
          </Badge>
          <h1 className="font-medium">Display and visibility</h1>
        </div>
        <FaGreaterThan />
      </div>
      <div className="flex gap-3 px-3 py-2  items-center justify-between rounded-lg hover:bg-slate-100 transition-colors duration-300">
        <div className="flex items-center gap-2">
          <Badge>
            <MdFeedback />
          </Badge>
          <h1 className="font-medium">Give Feedback</h1>
        </div>
      </div>
      <div className="flex gap-3 px-3 py-2 items-center justify-between rounded-lg hover:bg-slate-100 transition-colors duration-300">
        <div className="flex items-center gap-2">
          <Badge>
            <MdLogout />
          </Badge>
          <h1 className="font-medium">Logout</h1>
        </div>
      </div>
      <FooterSmall/>
    </div>
  );
};

export default Account;
