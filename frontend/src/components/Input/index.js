import { Field, ErrorMessage } from "formik";
import { useState } from "react";
import { GoAlert } from "react-icons/go";
import Error from "../Error";

const Input = ({ name, type, isError, isUp, ...otherProps }) => {
  const [isShown, setIsShown] = useState(false);
  const toggleHandle = () => {
    setIsShown(!isShown);
  };

  return (
    <div className="flex relative md:flex-col gap-1">
      <div className="relative w-full">
        <Field
          name={name}
          type={type}
          className={`px-2 w-full md:px-3 text-sm md:text-base py-1 md:py-2 border focus:outline rounded-md ${
            isError ? " focus:outline-red-600" : "focus:outline-blue-600"
          }`}
          {...otherProps}
        />
        {isError && (
          <GoAlert
            className="absolute text-red-600 right-2 bottom-[30%] "
            onClick={toggleHandle}
          />
        )}
      </div>
      <div className="absolute w-40 -top-1 -left-[162px] md:w-full md:static">
        {!isShown && (
          <ErrorMessage
            name={name}
            isUp={isUp}
            component={Error}
            message={isError}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
