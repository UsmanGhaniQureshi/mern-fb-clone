const Badge = ({ children, className, ...otherProps }) => {
  return (
    <div
      {...otherProps}
      className={`flex items-center rounded-full justify-center h-10 w-10 bg-slate-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
