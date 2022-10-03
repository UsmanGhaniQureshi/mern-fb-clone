import { FaFacebook } from "react-icons/fa";
import Search from "../Search";

const HeaderSearch = ({ ref, onSetIsSearch }) => {
  return (
    <div ref={ref} className="flex items-center max-w-md box-border gap-2">
      <FaFacebook className="w-10 h-10 text-blue-700" />
      <Search onSetVisible={onSetIsSearch} />
    </div>
  );
};

export default HeaderSearch;
