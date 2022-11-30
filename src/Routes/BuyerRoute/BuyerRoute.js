import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useBuyer from "../../hooks/useBuyer";
import Loading from "../../Pages/Shared/Loading/Loading";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isBuyer, setIsBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();

  console.log(`isBuyer = ${isBuyer}`);
  if (loading || setIsBuyerLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loading />
      </div>
    );
  }

  if (user && isBuyer) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
