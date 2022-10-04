const BadgeUser = ({ imgUrl, className, width, height, imgAlt }) => {
  return (
    <div
      className={`${width + " "} ${
        height + " "
      } overflow-hidden rounded-full ${className}`}
    >
      <img
        className="w-full h-full object-cover rounded-full"
        src={imgUrl}
        alt={imgAlt}
      />
    </div>
  );
};

export default BadgeUser;
