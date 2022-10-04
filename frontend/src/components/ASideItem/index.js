const AsideItem = ({ item }) => {
  const { imgUrl, text } = item;
  return (
    <div className="flex p-1 hover:bg-slate-100 items-center gap-4">
      <div className="w-8 h-8">
        <img src={imgUrl} className="w-full h-full" alt={text} />
      </div>
      <h1 className="font-medium text-sm">{text}</h1>
    </div>
  );
};

export default AsideItem;
