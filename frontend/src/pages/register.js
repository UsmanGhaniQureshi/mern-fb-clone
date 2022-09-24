import { useRef, useState } from "react";
import Input from "../components/Input";
import Modal from "../components/Modal";
import { createNumberArray } from "../helpers/createNumArray";
import { FaQuestionCircle, FaTimes } from "react-icons/fa";

import Facebook from "../icons/facebook";

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
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

  console.log(months, years, days);
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const password = passwordRef.current.value;
    const email = emailRef.current.value;
  };

  return (
    <div>
      <div className="md:py-40  bg-slate-200">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex md:mt-10 md:self-start py-10 md:py-0 flex-col md:items-start items-center  w-9/12 md:max-w-md">
            <div>
              <Facebook className="w-52 md:w-72 -ml-6" />
            </div>
            <p className="text-center md:text-left text-sm md:text-2xl">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
          <div className="max-w-md md:w-96 py-10 md:py-0">
            <div className="p-3 bg-white rounded-lg divide-y divide-solid divide-slate-300">
              <form onSubmit={submitHandler} className="flex flex-col gap-2">
                <Input
                  ref={emailRef}
                  type={"email"}
                  placeholder="Enter Address or Phone Number"
                />
                <Input
                  ref={passwordRef}
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
              </form>
              <div className="flex items-center mt-3 justify-center">
                <button className="px-5 py-2 mt-5 rounded-xl bg-green-500 border-none text-white">
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
      <Modal isModalOpen={isModalOpen}>
        <form className="flex flex-col bg-white max-w-2xl p-3 gap-2 rounded-md shadow-[-5px 4px 18px 0px rgba(125,122,122,0.75)]">
          <div className="flex justify-between items-center gap-4">
            <h1 className="text-2xl font-bold">Sign Up</h1>
            <FaTimes
              className="text-xl text-slate-600"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
          <div className="w-full  border my-2 border-slate-300" />
          <p className="-mt-2">It's quick and easy.</p>
          <div className="flex justify-between gap-4">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </div>
          <Input placeholder="Enter Email Address or Phone Number" />
          <Input placeholder="Password" />

          <div className="space-y-1">
            <p className="flex  items-center gap-1 text-xs text-slate-600">
              Date of birth <FaQuestionCircle />
            </p>
            <div className="flex items-center gap-2 ">
              <select className="flex-1 px-1 border rounded py-1">
                {months.map((month, key) => (
                  <option value={month} key={key}>
                    {month}
                  </option>
                ))}
              </select>
              <select className="flex-1 px-1  border rounded py-1">
                {days.map((day, key) => (
                  <option value={day} key={key}>
                    {day}
                  </option>
                ))}
              </select>
              <select className="flex-1 px-1 border rounded py-1">
                {years.map((year, key) => (
                  <option value={year} key={key}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-1">
            <p className="flex  items-center gap-1 text-xs text-slate-600">
              Gender <FaQuestionCircle />
            </p>
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-1 items-center border justify-between py-1 px-1 gap-1">
                <label>Male</label>
                <input
                  className="border-none"
                  value="male"
                  name="gender"
                  type="radio"
                />
              </div>
              <div className="flex flex-1 items-center border justify-between py-1 px-1 gap-1">
                <label>Female</label>
                <input value="female" name="gender" type="radio" />
              </div>
              <div className="flex flex-1 items-center border justify-between py-1 px-1 gap-1">
                <label>Custom</label>
                <input name="gender" value="custom" type="radio" />
              </div>
            </div>
          </div>
          <div className="max-w-md space-y-2 text-slate-400">
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
          <button className="bg-green-600 px-12 mt-2 text-white font-bold py-1 mx-auto rounded-md">
            Sign Up
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Register;
