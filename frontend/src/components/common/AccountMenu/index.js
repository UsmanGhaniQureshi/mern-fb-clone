import Badge from "../../Badge";

const AccountMenu = ({ children, menuText }) => {
  return (
    <div className="flex hover:bg-zinc-100 duration-300 transition-colors rounded p-2 items-center gap-3">
      <Badge className="w-7 h-7">{children}</Badge>
      <h1 className="font-medium text-xs">{menuText}</h1>
    </div>
  );
};

export default AccountMenu;
