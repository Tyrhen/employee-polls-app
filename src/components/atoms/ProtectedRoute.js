import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  const authUser = useSelector((state) => state.authUser.value);
  const location = useLocation();

  if (!authUser) {
    return (
      <Navigate to={redirectPath} replace state={{ path: location.pathname }} />
    );
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
