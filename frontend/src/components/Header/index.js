import HeaderLeft from "./Left";
import HeaderRight from "./Right";
import HeaderMiddle from "./Middle";

const Header = () => {
  return (
    <header className="flex justify-between bg-slate-50 px-2 py-1 gap-2">
      <HeaderLeft />
      <HeaderMiddle />
      <HeaderRight />
    </header>
  );
};

export default Header;
