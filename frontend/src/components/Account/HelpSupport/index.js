import {
  BsFillEnvelopeFill,
  BsFillExclamationSquareFill,
} from "react-icons/bs";
import { FaArrowLeft, FaQuestionCircle } from "react-icons/fa";
import Badge from "../../Badge";
import AccountMenu from "../../common/AccountMenu";

const HelpSupport = ({ onClick }) => {
  return (
    <div className="rounded-xl -ml-3 px-2 py-1 absolute top-0 w-full h-full bg-white shadow-xl">
      <div className="flex px-3 py-2 items-center gap-3">
        <Badge
          onClick={onClick}
          className="bg-inherit h-7 w-7 hover:bg-zinc-100 duration-300 transition-colors"
        >
          <FaArrowLeft />
        </Badge>
        <h1 className="font-bold text-xl">Help and Support</h1>
      </div>
      <AccountMenu menuText="Help Center">
        <FaQuestionCircle size={18} />
      </AccountMenu>
      <AccountMenu menuText="Support Inbox">
        <BsFillEnvelopeFill size={18} />
      </AccountMenu>
      <AccountMenu menuText="Report a Problem">
        <BsFillExclamationSquareFill size={14} />
      </AccountMenu>
    </div>
  );
};

export default HelpSupport;
