import { Field, ErrorMessage } from "formik";

const Input = ({ name, type, isError, ...otherProps }) => {
  return (
    <div className="flex flex-col gap-1">
      <Field
        name={name}
        type={type}
        className={`px-3 py-2 border focus:outline rounded-md ${
          isError ? " focus:outline-red-600" : "focus:outline-blue-600"
        }`}
        {...otherProps}
      />
      <ErrorMessage  name={name} />
    </div>
  );
};

export default Input;
