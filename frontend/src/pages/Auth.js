import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Modal from "../components/Modal";
import Login from "../components/Login";
import RegisterForm from "../components/Register";
import api from "../api";
import Footer from "../components/Footer";
import { dropDownDOB } from "../helpers/dropDownDOB";

const Auth = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const loginHandler = async (values) => {
    const result = await api.post("/user/login", values);

    if (result.data && result.data.token) {
      dispatch({ type: "LOGIN", payload: result.data });

      navigate("/activate/" + result.data.token);
    }
  };
  const registerHandler = async (values) => {
    setMessage("");

    const { date, month, year } = values;
    const { months } = dropDownDOB();

    const mIndex = months.indexOf(month);
    const { isValid, mess } = isAgeValid(Number(year), mIndex, Number(date));

    let result;

    if (!isValid) {
      setMessage(mess);
      return;
    } else {
      try {
        result = await api.post("/user/register", {
          ...values,
          date: Number(date),
          year: Number(year),
        });
        if (result.data) dispatch({ type: "REGISTER", payload: result.data });
      } catch (error) {
        setMessage(error);
      }
    }
  };
  return (
    <div>
      <Login onSubmit={loginHandler} onModalSet={() => setIsModalOpen(true)} />
      <Modal isModalOpen={isModalOpen}>
        <RegisterForm
          message={message}
          onSubmit={registerHandler}
          onModalSet={() => setIsModalOpen(false)}
        />
      </Modal>
      <Footer />
    </div>
  );
};

export default Auth;

const isAgeValid = (y, m, d) => {
  const currentDate = new Date();
  const enteredDate = new Date(y, m, d);

  const minAge = new Date(1970 + 14, 0, 1);
  const maxAge = new Date(1970 + 70, 0, 1);

  if (currentDate - enteredDate < minAge) {
    return {
      isValid: false,
      mess: "Age Cant be less than 14",
    };
  } else if (currentDate - enteredDate > maxAge) {
    return {
      isValid: false,
      mess: "Age Cant Greater than 70",
    };
  }
  return {
    isValid: true,
    mess: "Registered Succesfully",
  };
};
