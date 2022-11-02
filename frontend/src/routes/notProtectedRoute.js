import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const NotProtectedRoute = () => {
  const { user } = useSelector((state) => state);
  return user ? <Navigate to="/" /> : <Outlet />;
};

export default NotProtectedRoute;
