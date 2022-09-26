import { Form, Formik } from "formik";
import * as Yup from "yup";
import Facebook from "../../icons/facebook";
import Input from "../Input";

const Login = ({ onSubmit, onModalSet }) => {
  return (
    <div className="md:py-40  bg-slate-200">
      <div className="flex flex-col md:flex-row items-center justify-center px-5">
        <div className="flex md:mt-10 md:self-start px-5 py-10 md:py-0 flex-col md:items-start items-center  w-9/12 md:max-w-md">
          <div>
            <Facebook className="w-52 md:w-72 -ml-6" />
          </div>
          <p className="text-center md:text-left text-sm md:text-2xl">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="max-w-md md:w-96 py-10 md:py-0">
          <div className="p-3 bg-white rounded-lg divide-y divide-solid divide-slate-300">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              validateOnBlur
              validateOnChange
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form className="flex flex-col gap-2">
                  <Input
                    isError={formik.errors.email}
                    name="email"
                    type={"email"}
                    placeholder="Enter Address or Phone Number"
                  />
                  <Input
                    isError={!!formik.errors.password}
                    name="password"
                    type={"password"}
                    placeholder="Password"
                  />

                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 rounded-md  duration-150 transition-colors font-bold"
                  >
                    Login
                  </button>
                  <a className="text-center text-blue-500 mt-1" href="">
                    Forget Password
                  </a>
                </Form>
              )}
            </Formik>

            <div className="flex items-center mt-3 justify-center">
              <button
                onClick={onModalSet}
                className="px-5 py-2 mt-5 rounded-xl bg-green-500 border-none text-white"
              >
                Create An Account
              </button>
            </div>
          </div>
          <p className="text-sm text-center mt-3">
            <a className="mx-1 hover:underline font-bold">Create a Page</a>
            for a celebrity, brand or business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required").email("Invalid Email Address"),
  password: Yup.string().required("Required"),
});
