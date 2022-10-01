import { useEffect } from "react";

const useOutside = (ref, func) => {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      func();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    //cleanUp function to remove event listener
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);
};

export default useOutside;
