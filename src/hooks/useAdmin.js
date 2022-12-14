import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const useAdmin = (email) => {
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://used-products-resale-server-kappa.vercel.app/allusers/admin/${user?.email}`
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          // console.log(typeof data);
          // if (data === "admin") {
          // setIsAdmin("admin");
          // setIsAdmin(true);
          setIsAdmin(data?.isAdmin);
          setIsAdminLoading(false);
          // }
        });
    }
  }, [user?.email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
