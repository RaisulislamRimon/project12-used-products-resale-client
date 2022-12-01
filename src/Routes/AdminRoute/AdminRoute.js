import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../Pages/Shared/Loading/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="h-96">
        <div className="flex justify-center items-center my-20">
          <Loading />
        </div>
        <div>
          <h2 className="text-xl text-red-500 text-center">
            You are not authorized
          </h2>
        </div>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
