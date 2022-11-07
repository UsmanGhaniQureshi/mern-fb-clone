import { useRef, useState } from "react";
import api from "../api";
import Footer from "../components/Footer";
import InlineLogin from "../components/InlineLogin";

const ForgetPassword = () => {
  const emailRef = useRef(null);
  const [isUserExist, setIsUserExist] = useState(false);
  const [user, setUser] = useState({});
  const [selected, setSelected] = useState("no");

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const result = await api.get("/user/accountfind/" + email);
    const { isExist, user } = result.data;

    if (isExist) {
      setIsUserExist(true);
      setUser(user);
    } else {
      setIsUserExist(false);
      setUser(null);
    }
  };

  const clearState = () => {
    setUser({});
    setIsUserExist(false);
    emailRef.current.value = "";
  };

  const onChange = (e) => {
    setSelected(e.currentTarget.value);
  };

  return (
    <div className="flex justify-between h-screen flex-col py-3 px-2">
      <InlineLogin />

      {!isUserExist && (
        <form
          onSubmit={submitHandler}
          className="rounded-lg mx-auto -mt-32 max-w-md bg-white shadow-md"
        >
          <h1 className="px-4 py-2 font-bold text-xl">Find Your Account</h1>

          <div className="w-full h-[1px] bg-slate-400" />
          <div className="px-4 py-2 space-y-3">
            {!isUserExist && !user && (
              <div className="bg-red-100 p-2 text-sm border border-red-600">
                <h1 className="font-medium">No Search Results</h1>
                <p className="text-xs">
                  Your search did not return any results. Please try again with
                  other information.
                </p>
              </div>
            )}
            <p>
              Please enter your email address or mobile number to search for
              your account.
            </p>
            <input
              required
              ref={emailRef}
              className="px-4 py-3 w-full rounded-md outline-none border border-blue-400"
              placeholder="Enter Your Email Address"
            />
          </div>

          <div className="w-full h-[1px] bg-slate-400 mt-4" />
          <div className="flex items-center justify-end gap-4 p-2 mt-4">
            <button
              type={"reset"}
              onClick={clearState}
              className="bg-slate-300 px-2 py-1 font-medium transition-colors duration-300 ease-linear rounded-md hover:text-white "
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 px-2 transition-colors duration-300 ease-linear py-1 font-medium rounded-md text-white "
            >
              Search
            </button>
          </div>
        </form>
      )}

      {isUserExist && (user !== null || user !== {}) && (
        <div className="rounded-lg mx-auto px-3 py-2 -mt-32 space-y-4 max-w-lg bg-white shadow-md">
          <h1 className="font-bold">Reset Your Password</h1>
          <div className="w-full h-[1px] bg-slate-400" />
          <div className="flex gap-2 text-sm">
            <div className="flex-1">
              <p>How do you want to receive the code to reset your password?</p>
              <div className="flex gap-1 hover:bg-slate-200 p-1 rounded-md">
                <label className="flex gap-1 flex-col flex-1" htmlFor="google">
                  <div className="flex gap-1">
                    <input
                      className="self-start my-1"
                      type={"radio"}
                      id="google"
                      onChange={onChange}
                      name="account"
                      value="yes"
                      checked={selected === "yes"}
                    />
                    <p>Use my Google account</p>
                  </div>

                  <p className="text-xs mx-4">
                    Log in to Google (if you aren't already) to quickly reset
                    your password.
                  </p>
                </label>
              </div>
              <div className="flex gap-1 hover:bg-slate-200 p-1 rounded-md">
                <label className="flex gap-1 flex-col flex-1" htmlFor="gmail">
                  <div className="flex gap-1">
                    <input
                      className="self-start my-1"
                      type={"radio"}
                      name="account"
                      id="gmail"
                      onChange={onChange}
                      value="no"
                      checked={selected === "no"}
                    />
                    <p>Send code via email</p>
                  </div>
                  <p className="text-xs mx-4">{user.email}</p>
                </label>
              </div>
            </div>
            <div className="flex items-center justify-center flex-1">
              <p>How do you want to receive the code to reset your password?</p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-slate-400" />
          <div className="flex justify-between items-center ">
            <p className="text-xs text-blue-600 hover:underline">
              No longer have access to these?
            </p>
            <div className="flex gap-2">
              <button className="bg-zinc-200 font-sm font-medium py-1 px-3 rounded-md">
                Not You
              </button>
              <button className="bg-blue-600 text-white font-sm font-medium py-1 px-3 rounded-md">
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ForgetPassword;
