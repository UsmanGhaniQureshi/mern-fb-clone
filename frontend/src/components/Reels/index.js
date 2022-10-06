import ReelItem from "../ReelItem";

const Reels = () => {
  return (
    <div className="px-4 py-3">
      <div className="flex gap-2">
        <ReelItem />
        <ReelItem />
        <ReelItem />
        <ReelItem />
      </div>
    </div>
  );
};

export default Reels;
