import { FaSearch } from "react-icons/fa";
import MenuCard from "../MenuCard";
import {
  social,
  entertainment,
  meta,
  personal,
  professional,
  resources,
  shopping,
} from "../../data/Header";

const HeaderMenuSocial = () => {
  return (
    <div className="flex-1 py-5 rounded-2xl shadow-xl space-y-2 bg-white p-2">
      <div className="flex gap-2 px-2 py-1 text-gray-400 bg-gray-100 flex-1 items-center rounded-full">
        <FaSearch />
        <input className="outline-none bg-inherit " placeholder="Search menu" />
      </div>
      <h1 className="font-bold mx-1">Social</h1>
      {social.map((item, key) => (
        <MenuCard key={key} item={item} />
      ))}
      <div className="w-full border" />
      {entertainment.map((item, key) => (
        <MenuCard key={key} item={item} />
      ))}
      <div className="w-full border" />

      {shopping.map((item, key) => (
        <MenuCard key={key} item={item} />
      ))}
      <div className="w-full border" />

      {personal.map((item, key) => (
        <MenuCard key={key} item={item} />
      ))}
      <div className="w-full border" />

      {professional.map((item, key) => (
        <MenuCard key={key} item={item} />
      ))}
      <div className="w-full border" />

      {resources.map((item, key) => (
        <MenuCard key={key} item={item} />
      ))}
      <div className="w-full border" />

      {meta.map((item, key) => (
        <MenuCard key={key} item={item} />
      ))}
    </div>
  );
};

export default HeaderMenuSocial;
