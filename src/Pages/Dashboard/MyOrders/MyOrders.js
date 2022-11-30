import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    error,
    data: myOrders = [],
  } = useQuery({
    queryKey: ["myOrders"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/my-orders?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  console.log(myOrders);
  return (
    <div>
      <h1 className="text-center text-3xl">My Orders</h1>

      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((myOrder) => (
                <tr key={myOrder._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={myOrder.bookData.book_img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{myOrder.bookData.book_name}</td>
                  <td>${myOrder.bookData.resalePrice}</td>
                  <th>
                    <Link to={`/dashboard/payment/${myOrder._id}`}>
                      <button className="btn btn-accent btn-md">Pay</button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* <!-- foot --> */}
            <tfoot>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Payment</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
