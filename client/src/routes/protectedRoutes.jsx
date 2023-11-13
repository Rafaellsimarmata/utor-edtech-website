/* eslint-disable react/prop-types */
import { useUser } from "../context/userContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const { isLoggedIn } = useUser();
  const location = useLocation();

  console.log(isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return children ? children : <Outlet />;
};
