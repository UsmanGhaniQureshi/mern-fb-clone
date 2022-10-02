const MenuCard = ({ item }) => {
  const { heading, paragraph, imgUrl } = item;
  return (
    <div className="flex gap-2 p-1 rounded-lg hover:bg-slate-200 transition-colors duration-300">
      <div className="w-8 h-8">
        <img className="w-full h-full bg-contain" src={imgUrl} />
      </div>
      <div className="flex-1">
        <h1 className="font-bold text-sm">{heading}</h1>
        <p className="text-xs text-gray-500">{paragraph}</p>
      </div>
    </div>
  );
};

export default MenuCard;
