import { FaPlusCircle } from "react-icons/fa";

const CreateStory = () => {
  return (
    <div className="relative group rounded-2xl box-border  flex flex-col w-28 h-48 hover:opacity-80">
      <div className="w-full h-[80%] rounded-t-2xl overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 duration-150 transition-transform"
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
        />
      </div>
      <h1 className="text-center bg-slate-100 rounded-b-2xl pt-6 pb-2 text-xs font-medium">
        Create Story
      </h1>
      <div className="flex absolute items-center rounded-full justify-center bottom-8 left-[35%] w-8 h-8 p-1 bg-white">
        <FaPlusCircle className="w-full h-full" color="#125ffa" />
      </div>
    </div>
  );
};

export default CreateStory;
