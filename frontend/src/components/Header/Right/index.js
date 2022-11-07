import { useRef, useState } from "react";
import { FaFacebookMessenger, FaBell } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";

import useOutside from "../../../hooks/useOutSideClick";
import Badge from "../../Badge";
import HeaderMenuCreate from "../../HeaderMenuCreate";
import HeaderMenuSocial from "../../HeaderMenuSocial";
import Chats from "../../Chats";
import Account from "../../Account";
import FBNotification from "../../FBNotification";

const HeaderRight = () => {
  const menuRef = useRef(null);
  const chatRef = useRef(null);
  const notifcationRef = useRef(null);
  const accountRef = useRef(null);

  const [isMenu, setIsMenu] = useState(false);
  const [isChat, setIsChat] = useState(false);
  const [isNotification, setIsNotifcation] = useState(false);
  const [isAccount, setIsAccount] = useState(false);

  useOutside(menuRef, () => setIsMenu(false));
  useOutside(chatRef, () => setIsChat(false));
  useOutside(notifcationRef, () => setIsNotifcation(false));
  useOutside(accountRef, () => setIsAccount(false));

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <Badge className="hidden md:flex" onClick={() => setIsMenu(true)}>
          <CgMenuGridO />
        </Badge>

        <Badge onClick={() => setIsChat(true)} className="relative">
          <FaFacebookMessenger />
          <span className="absolute right-0 -top-1 w-4 h-4 flex items-center justify-center text-xs rounded-full bg-red-600 text-white ">
            4
          </span>
        </Badge>
        <Badge onClick={() => setIsNotifcation(true)} className="relative">
          <FaBell />
          <span className="absolute right-0 -top-1 w-4 h-4 flex items-center justify-center text-xs rounded-full bg-red-600 text-white ">
            4
          </span>
        </Badge>
        <Badge
          onClick={() => setIsAccount(true)}
          className="h-8 w-8 rounded-full"
        >
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
          />
        </Badge>
      </div>
      {isMenu && (
        <div
          className="absolute z-50 w-[600px] h-[600px] bg-slate-50 p-2 rounded-xl  overflow-scroll right-0 top-20"
          ref={menuRef}
        >
          <h1 className="font-extrabold text-xl">Menu</h1>
          <div className="flex-1  py-2 mx-2 flex md:flex-row flex-col justify-between gap-5  ">
            <HeaderMenuSocial />
            <HeaderMenuCreate />
          </div>
        </div>
      )}
      {isChat && (
        <div
          className="absolute z-50 w-[450px] h-[600px] bg-white p-2 rounded-xl  overflow-scroll right-0 top-14"
          ref={chatRef}
        >
          <Chats />
        </div>
      )}
      {isNotification && (
        <div
          className="absolute  z-50 w-[400px] h-[600px] bg-slate-50 p-2 rounded-xl overflow-scroll  right-0 top-14"
          ref={notifcationRef}
        >
          <FBNotification />
        </div>
      )}
      {isAccount && (
        <div
          className="absolute z-50 w-[320px] h-[600px] bg-slate-50 rounded-xl  right-0 top-10"
          ref={accountRef}
        >
          <Account />
        </div>
      )}
    </div>
  );
};

export default HeaderRight;
