import { useParams } from "react-router-dom";
import api from "../api";

const ActivateAccount = () => {
  const { usertoken } = useParams();

  const activateUser = async () => {
    await api.put("/user/activate/" + usertoken);
  };
  return (
    <div>
      <button onClick={activateUser}>Activate User</button>
    </div>
  );
};

export default ActivateAccount;
