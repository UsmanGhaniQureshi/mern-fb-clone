import { useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "../components/Modal";
import Login from "../components/Login";
import RegisterForm from "../components/RegisterForm";
import api from "../api";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (values) => {
    const result = await api.post("/user/login", values);

    if (result.data && result.data.token) {
      dispatch({ type: "LOGIN", payload: result.data });

      navigate("/activate/" + result.data.token);
    }
  };
  const registerHandler = async (values) => {
    const result = await api.post("/user/register", values);

    dispatch({ type: "REGISTER", payload: result.data });
  };
  return (
    <div>
      <Login onSubmit={loginHandler} onModalSet={() => setIsModalOpen(true)} />
      <Modal isModalOpen={isModalOpen}>
        <RegisterForm
          onSubmit={registerHandler}
          onModalSet={() => setIsModalOpen(false)}
        />
      </Modal>
      <Footer/>
    </div>
  );
};

export default Register;
