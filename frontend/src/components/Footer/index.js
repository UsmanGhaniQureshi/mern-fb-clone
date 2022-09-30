import { Link } from "react-router-dom";
import { FaRegPlusSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-zinc-50 text-[10px] divide-y ">
      <div className="w-[80%] p-2 mx-auto flex flex-wrap items-center gap-2">
        <Link to="/">English (UK)</Link>
        <Link to="/">اردو</Link>
        <Link to="/">پښتو</Link>
        <Link to="/">العربية</Link>
        <Link to="/">हिन्दी l</Link>
        <Link to="/">বাংলা </Link>
        <Link to="/"> ਪੰਜਾਬੀ </Link>
        <Link to="/">فارسی </Link>
        <Link to="/">ગુજરાતી </Link>
        <Link to="/"> Deutsch </Link>
        <Link to="/"> Españo</Link>
        <FaRegPlusSquare className="text-lg" />
      </div>
      <div className="w-[80%] p-2 mx-auto flex flex-wrap items-center gap-2">
        <Link to="/">Sign UpLog in</Link>
        <Link to="/">Login</Link>
        <Link to="/"> Messenger</Link>
        <Link to="/">Facebook</Link>
        <Link to="/">LiteWatchPlaces</Link>
        <Link to="/">Lite</Link>
        <Link to="/">Games</Link>
        <Link to="/"> Marketplace</Link>
        <Link to="">Meta</Link>
        <Link to="/">Pay</Link>
        <Link to="/">Oculus</Link>
        <Link to="/">Portal</Link>
        <Link to="/">Instagram</Link>
        <Link to="/">Bulletin</Link>
        <Link to="/">LocalFundraisers</Link>
        <Link to="/">ServicesVoting</Link>
        <Link to="/">Voting</Link>
        <Link to="/"> Information</Link>
        <Link to="/"> CentreGroups</Link>
        <Link to="/"> AboutCreate</Link>
        <Link to="/"> Create</Link>
        <Link to="/"> adCreate PageDevelopers</Link>
        <Link to="/"> PageDevelopers</Link>
        <Link to="/">PrivacyCookies</Link>
        <Link to="/"> Cookies</Link>
        <Link to="/"> AdChoices</Link>
        <Link to="/"> Contact</Link>
        <Link to="/"> Terms</Link>
        <Link to="/"> Help</Link>
        <Link to="/">uploading and</Link>
        <Link to="/">Contact</Link>
        non-usersSettingsActivity log
      </div>
    </div>
  );
};

export default Footer;
