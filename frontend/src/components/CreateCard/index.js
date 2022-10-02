import Badge from "../Badge";

const CreateCard = ({ children, text }) => {
  return (
    <div className="flex gap-2 p-2 hover:bg-zinc-100 rounded-lg items-center">
      <Badge className={"h-9 w-9"}>{children}</Badge>
      <p className="text-sm font-bold flex-1">{text}</p>
    </div>
  );
};

export default CreateCard;
