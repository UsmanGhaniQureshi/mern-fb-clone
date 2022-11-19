import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../api";
import Facebook from "../../icons/facebook";

const InlineLogin = () => {
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Login Form
  const loginHandler = async (e) => {
    e.preventDefault();
    
    const values = {
      password: passwordRef.current.value,
      email: emailRef.current.value,
    };
    const result = await api.post("/user/login", values);

    if (result && result.data && result.data.error) {
      toast.error(result.data.error);
      return;
    }

    if (result.data) {
      dispatch({ type: "LOGIN", payload: result.data });
      localStorage.setItem("user", JSON.stringify(result.data));
      navigate("/");
    }
  };

  return (
    <div className="px-2 flex items-center justify-between bg-white rounded-lg ">
      <Facebook className="w-40" />
      <form
        className="flex items-center  border-none  gap-2"
        onSubmit={loginHandler}
      >
        <input
          ref={emailRef}
          className="px-3 text-sm  py-2 border border-slate-400 focus:border-inherit  hover:border-black focus:outline rounded-md focus:outline-blue-600"
          name="email"
          type={"email"}
          placeholder="Enter or Phone"
        />
        <input
          ref={passwordRef}
          className="px-3 text-sm  py-2 border border-slate-400 focus:border-inherit  hover:border-black focus:outline rounded-md focus:outline-blue-600"
          name="password"
          type={"password"}
          placeholder="Password"
        />

        <button
          type="submit"
          className="bg-blue-600 text-sm text-white px-2 py-1  rounded-md  duration-150 transition-colors font-bold"
        >
          Login
        </button>
        <Link
          className="text-sm font-medium inline-block text-blue-500 hover:underline"
          to="/forget-password"
        >
          Forgetten Password?
        </Link>
      </form>
    </div>
  );
};

export default InlineLogin;
