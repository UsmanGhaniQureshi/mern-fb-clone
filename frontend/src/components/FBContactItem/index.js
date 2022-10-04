import BadgeUser from "../BadgeUser";

const FBContactItem = () => {
  return (
    <div className="p-2 hover:bg-slate-200 flex items-center gap-3 rounded-2xl">
      <div className="relative">
        <BadgeUser
          height="w-8"
          width="h-8"
          imgUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
        />
        <div className="p-1 bg-slate-200 rounded-full absolute -bottom-1 -right-1">
          <div className="p-1 rounded-full bg-green-600 " />
        </div>
      </div>
      <h1>Usman Ghani Qureshi</h1>
    </div>
  );
};

export default FBContactItem;
