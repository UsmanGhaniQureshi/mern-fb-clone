import { useState } from "react";
import Modal from "../components/Modal";

import Login from "../components/Login";
import RegisterForm from "../components/RegisterForm";
import { useDispatch } from "react-redux";

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const loginHandler = (values) => {
    dispatch({ type: "LOGIN", payload: values });
  };
  const registerHandler = (values) => {
    dispatch({ type: "REGISTER", payload: values });
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
    </div>
  );
};

export default Register;
