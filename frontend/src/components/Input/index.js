import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      required
      className="px-3 py-2 border focus:outline focus:outline-blue-600 rounded-md"
    />
  );
});

export default Input;
