import RoomItem from "../RoomItem";

const Rooms = () => {
  return (
    <div className="flex px-3 gap-2 py-4">
      <RoomItem isUser={true} />
      <RoomItem />
      <RoomItem />
    </div>
  );
};

export default Rooms;
