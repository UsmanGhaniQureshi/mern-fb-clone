import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api";

const ActivateAccount = () => {
  const { user } = useSelector((state) => state);
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activateUser = async () => {
    try {
      const { data } = await api.post(
        "/user/activate",
        { token },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      toast.success(data.message);
      dispatch({
        type: "ACTIVATE_USER",
        payload: { isVerified: true },
      });
    } catch (error) {
      toast.error("Account Verification Failed");
    }
    setTimeout(() => navigate("/"), 3000);
  };
  return (
    <div>
      <button onClick={activateUser}>Activate User</button>
    </div>
  );
};

export default ActivateAccount;
