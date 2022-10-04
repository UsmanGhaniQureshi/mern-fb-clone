import { BsDot } from "react-icons/bs";

const FooterItem = ({ text, children }) => {
  return (
    <div className="flex gap-1 items-center">
      <p>{text}</p>
      {children && <div>{children}</div>}

      <div className="flex justify-center items-center">
        <BsDot />
      </div>
    </div>
  );
};

export default FooterItem;
