import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllSellers = () => {
  const url = `http://localhost:5000/all-sellers`;

  const {
    data: allSellers = [],
    error,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["all-sellers"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  return (
    <div>
      <h1 className="text-center text-3xl underline my-5">All Sellers</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Seller Name</th>
                <th>Seller Email</th>
                <th>Status</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              {allSellers.map((seller, i) => (
                <tr key={seller._id}>
                  <th>{i + 1}</th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>{seller.checked}</td>
                  <td>
                    <span
                      // onClick={() => handleDelete(seller)}
                      className="text-red-500 cursor-pointer"
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSellers;
