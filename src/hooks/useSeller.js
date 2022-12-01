import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const useSeller = (email) => {
  const { user } = useContext(AuthContext);
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/allusers/seller/${user?.email}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          // if (data === "seller") {
          //   // setIsSeller("seller");
          //   setIsSeller(true);
          //   setIsSellerLoading(false);
          setIsSeller(data?.isSeller);
          setIsSellerLoading(false);
          // }
        });
    }
  }, [user?.email]);
  return [isSeller, isSellerLoading];
};

export default useSeller;
