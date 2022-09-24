const Modal = ({ children, isModalOpen }) => {
  if (!isModalOpen) return;
  return (
    <div className="flex w-full h-screen fixed z-50 inset-0 bg-opacity-60 bg-zinc-100 items-center justify-center">
      <div>{children}</div>
    </div>
  );
};

export default Modal;
