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
      <div className="flex justify-center items-center h-96">
        <Loading />
      </div>
    );
  }

  if (user && isSeller) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
