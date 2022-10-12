import BadgeUser from "../BadgeUser";

const StoryItem = () => {
  return (
    <div className="relative rounded-2xl  box-border flex flex-col overflow-hidden h-48">
      <img
        className="w-full h-full rounded-2xl object-cover hover:scale-105 transition-transform duration-200 ease-linear "
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
      />
      <div className="absolute p-1 bg-blue-500 top-2 left-2 rounded-full">
        <BadgeUser
          height="w-8"
          width="h-8"
          imgUrl="https://firebasestorage.googleapis.com/v0/b/portfolio-site-4799e.appspot.com/o/images%2FUsmanProfile?alt=media&token=92db1d8f-33b9-4cea-8c4a-83ba07a41bd0"
        />
      </div>
      <h1 className="text-white absolute bottom-2 w-24 text-xs px-2 font-medium">
        Usman Ghani Qureshi
      </h1>
    </div>
  );
};

export default StoryItem;
