import { useRef } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import api from "../api";

const ChangePassword = () => {
  const { user } = useSelector((state) => state);

  const currentPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const currentPassword = currentPasswordRef.current.value;
    const newPassword = newPasswordRef.current.value;

    const { data } = await api.post(
      "/user/changepassword",
      {
        currentPassword,
        newPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    if (data.isSuccess) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };
  return (
    <div className="p-3 space-y-4">
      <h1 className="text-center font-bold text-3xl">Change Password</h1>
      <form
        className="flex flex-col gap-2 max-w-md mx-auto"
        onSubmit={submitHandler}
      >
        <input
          className="outline-none border rounded-md px-3 py-1"
          type="password"
          placeholder="Enter Current Password"
          ref={currentPasswordRef}
        />
        <input
          className="outline-none border rounded-md px-3 py-1"
          type="password"
          placeholder="Enter New Password"
          ref={newPasswordRef}
        />
        <button
          className="bg-blue-600 text-white font-medium rounded-lg py-1 text-center"
          type="submit"
        >
          Confirm Changes
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
