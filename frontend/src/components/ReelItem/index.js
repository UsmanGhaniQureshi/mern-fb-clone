import { GoTriangleRight } from "react-icons/go";

const ReelItem = () => {
  return (
    <div className="relative  rounded-2xl box-border overflow-hidden   w-28 h-48">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
        className="w-full h-full object-cover rounded-2xl "
      />
      <div className="flex  text-white left-2 absolute bottom-2 text-xs gap-1 items-center font-semibold">
        <GoTriangleRight /> <p>1.6M</p>
      </div>
    </div>
  );
};
export default ReelItem;
