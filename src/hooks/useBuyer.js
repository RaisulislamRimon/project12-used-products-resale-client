import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const useBuyer = (email) => {
  const { user } = useContext(AuthContext);
  const [isBuyer, setIsBuyer] = useState("");
  const [isBuyerLoading, setIsBuyerLoading] = useState(true);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/allusers/user-type/${user?.email}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data === "buyer") {
            setIsBuyer("buyer");
            setIsBuyer(true);
            setIsBuyerLoading(false);
          }
        });
    }
  }, [user?.email]);
  return [isBuyer, isBuyerLoading];
};

export default useBuyer;
