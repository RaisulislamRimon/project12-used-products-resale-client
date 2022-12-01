import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useSeller from "../../hooks/useSeller";
import Loading from "../../Pages/Shared/Loading/Loading";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, setIsSellerLoading] = useSeller(user?.email);
  const location = useLocation();

  if (loading || setIsSellerLoading) {
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

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
