import { ErrorMessage, Field, Form, Formik } from "formik";
import { FaQuestionCircle, FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import { createNumberArray } from "../../helpers/createNumArray";
import Input from "../Input";

const RegisterForm = ({ onSubmit, onModalSet }) => {
  const year = new Date().getFullYear() - 1905;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = createNumberArray(31);
  const years = createNumberArray(year);

  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        month: "",
        day: "",
        year: "",
        gender: "",
      }}
      validationSchema={validationSchema}
      validateOnBlur
      validateOnChange
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="flex flex-col bg-white max-w-xs mx-auto md:mx-0 md:max-w-2xl p-3 gap-2 rounded-md shadow-[-5px 4px 18px 0px rgba(125,122,122,0.75)]">
          <div className="flex justify-between items-center gap-4">
            <h1 className="text-2xl font-bold">Sign Up</h1>
            <FaTimes className="text-xl text-slate-600" onClick={onModalSet} />
          </div>
          <div className="w-full  border my-2 border-slate-300" />
          <p className="-mt-2">It's quick and easy.</p>
          <div className="flex justify-between gap-2 md:gap-4">
            <Input name="firstName" type="text" placeholder="First Name" />
            <Input name="lastName" type="text" placeholder="Last Name" />
          </div>
          <Input
            name="email"
            type="email"
            placeholder="Enter Email Address or Phone Number"
          />
          <Input name="password" type="password" placeholder="Password" />

          <div className="text-sm md:text-base space-y-1">
            <div className="flex justify-between  text-xs text-slate-600">
              <p className="flex items-center gap-1">
                Date of birth <FaQuestionCircle />
              </p>
              {(!formik.values.day ||
                !formik.values.month ||
                !formik.values.year) &&
                "Required"}
            </div>
            <div className="flex items-center gap-2 ">
              <Field as="select" className="flex-1 py-1" name="month">
                <option value="">Select Month</option>
                {months.map((month) => (
                  <option value={month} key={month}>
                    {month}
                  </option>
                ))}
              </Field>

              <Field as="select" className="flex-1 py-1" name="year">
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option value={year} key={year}>
                    {year}
                  </option>
                ))}
              </Field>

              <Field as="select" className="flex-1 py-1" name="day">
                <option value="">Select Day</option>
                {days.map((day) => (
                  <option value={day} key={day}>
                    {day}
                  </option>
                ))}
              </Field>
            </div>
          </div>
          <div className="space-y-1">
            <p className="flex  items-center gap-1 text-xs text-slate-600">
              Gender <FaQuestionCircle />
            </p>
            <div className="flex items-center justify-between gap-1 text-sm md:text-base md:gap-4">
              <div className="flex flex-1 items-center border justify-between py-1 px-1 gap-1">
                <label htmlFor="gender">Male</label>
                <Field value="male" name="gender" type="radio" />
              </div>
              <div className="flex flex-1 items-center border justify-between py-1 px-1 gap-1">
                <label htmlFor="gender">Female</label>
                <Field value="female" name="gender" type="radio" />
              </div>
              <div className="flex flex-1 items-center border justify-between py-1 px-1 gap-1">
                <label htmlFor="gender">Custom</label>
                <Field name="gender" value="custom" type="radio" />
              </div>
            </div>
            {formik.values.gender === "custom" && <p>Custom Gender</p>}

            <ErrorMessage name="gender" />
          </div>
          <div className="w-full  mx-2 md:max-w-md space-y-2 text-slate-400">
            <p className="text-xs">
              People who use our service may have uploaded your contact
              information to Facebook. Learn more.
            </p>
            <p className="text-xs">
              By clicking Sign Up, you agree to our Terms, Privacy Policy and
              Cookies Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </p>
          </div>
          <button
            type="submit"
            className="bg-green-600 px-12 mt-2 text-white font-bold py-1 mx-auto rounded-md"
          >
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required").email("Invalid Email Address"),
  password: Yup.string().required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  month: Yup.string().required("Required"),
  year: Yup.string().required("Required"),
  day: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
});
