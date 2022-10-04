import { aside } from "../../data/aside";
import AsideItem from "../ASideItem";
import BadgeUser from "../BadgeUser";

const LeftAside = () => {
  return (
    <div className="max-w-xs py-2 px-2 h-screen overflow-y-hidden hover:overflow-y-auto">
      <div className="flex p-1 hover:bg-slate-100 items-center gap-4">
        <BadgeUser
          height="w-8"
          width="h-8"
          imgUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
        />
        <h1 className="font-medium text-sm">Usman Ghani Qureshi</h1>
      </div>
      {aside.map((item, key) => (
        <AsideItem item={item} key={key} />
      ))}
    </div>
  );
};

export default LeftAside;
