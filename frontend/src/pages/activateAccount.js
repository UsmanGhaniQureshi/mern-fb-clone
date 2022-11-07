import { useDispatch, useSelector } from "react-redux";
import api from "../api";

const ActivateAccount = () => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const activateUser = async () => {
    const { data } = await api.put("/user/activate/" + user.token);
    dispatch({
      type: "ACTIVATE_USER",
      payload: { isVerified: data.isVerified },
    });
  };
  return (
    <div>
      <button onClick={activateUser}>Activate User</button>
    </div>
  );
};

export default ActivateAccount;
