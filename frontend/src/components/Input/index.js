import { Field, ErrorMessage } from "formik";
import Error from "../Error";

const Input = ({ name, type, isError, isUp, ...otherProps }) => {
  return (
    <div className="flex flex-col gap-1">
      <Field
        name={name}
        type={type}
        className={`px-2 w-full md:px-3 text-sm md:text-base py-1 md:py-2 border focus:outline rounded-md ${
          isError ? " focus:outline-red-600" : "focus:outline-blue-600"
        }`}
        {...otherProps}
      />
      <ErrorMessage name={name} isUp={isUp} component={Error} message={isError} />
    </div>
  );
};

export default Input;
