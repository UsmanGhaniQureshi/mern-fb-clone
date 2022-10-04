import { FaGooglePlay } from "react-icons/fa";
import FooterItem from "../FooterItem";

const FooterSmall = () => {
  return (
    <div className="flex items-center flex-wrap text-xs">
      <FooterItem text="Privacy" />
      <FooterItem text="Terms" />
      <FooterItem text="Adverstising" />
      <FooterItem text="Ad Chocies">
        <FaGooglePlay />
      </FooterItem>
      <FooterItem text="More" />
      <FooterItem text="Meta &#169; 2022" />
    </div>
  );
};

export default FooterSmall;
