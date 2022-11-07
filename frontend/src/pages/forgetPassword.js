import Footer from "../components/Footer";
import InlineLogin from "../components/InlineLogin";

const ForgetPassword = () => {
  return (
    <div className="flex justify-between h-screen flex-col py-3 px-2">
      <InlineLogin />
      <div className="rounded-lg mx-auto max-w-md bg-white shadow-md">
        <h1 className="px-4 py-2 font-bold text-xl">Find Your Account</h1>
        <div className="w-full h-[1px] bg-slate-400" />
        <div className="px-4 py-2 space-y-3">
          <p>
            Please enter your email address or mobile number to search for your
            account.
          </p>
          <input
            className="px-4 py-3 w-full rounded-md outline-none border border-blue-400"
            placeholder="Enter Your Email Address"
          />
        </div>

        <div className="w-full h-[1px] bg-slate-400 mt-4" />
        <div className="flex items-center justify-end gap-4 p-2 mt-4">
          <button className="bg-slate-300 px-2 py-1 font-medium transition-colors duration-300 ease-linear rounded-md hover:text-white ">
            Cancel
          </button>
          <button className="bg-blue-600 hover:bg-blue-800 px-2 transition-colors duration-300 ease-linear py-1 font-medium rounded-md text-white ">
            Search
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgetPassword;
