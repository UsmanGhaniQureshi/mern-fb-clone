import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import api from "../api";

const ProtectedRoute = () => {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const result = await api.get("/user", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });

      if (result.data && result.data.user) {
        dispatch({ type: "GET_USER", payload: result.data.user });
      }
    })();
  }, [dispatch, user?.token]);

  return user ? <Outlet /> : <Navigate to="/auth" />;
};

export default ProtectedRoute;
