import { useState } from "react";
import Modal from "../components/Modal";

import Login from "../components/Login";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loginHandler = (values) => {
    console.log(values);
  };
  const registerHandler = (values) => {
    console.log(values);
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
