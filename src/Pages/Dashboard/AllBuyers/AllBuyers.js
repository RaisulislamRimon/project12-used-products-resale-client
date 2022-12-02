import { isError, useQuery } from "@tanstack/react-query";
import React from "react";
import Swal from "sweetalert2";
import Loading from "../../Shared/Loading/Loading";

const AllBuyers = () => {
  const url = `https://used-products-resale-server-kappa.vercel.app/all-buyers`;

  const {
    data: allBuyers = [],
    error,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["all-buyers"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) return "An error has occurred: " + error.message;

  const handleDeleteSeller = (buyer) => {
    // console.log("handleDeleteSeller", seller);
    fetch(
      `https://used-products-resale-server-kappa.vercel.app/all-buyers/delete/${buyer._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // console.log("clicked");
        if (data.deletedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Buyer deleted successfully",
            showConfirmButton: false,
            timer: 1000,
          });
          refetch();
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-3xl underline my-5">All Buyers</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Status</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              {allBuyers.map((buyer, i) => (
                <tr key={buyer._id}>
                  <th>{i + 1}</th>
                  <td>{buyer.name}</td>
                  <td>{buyer.email}</td>
                  <td>{buyer.checked}</td>
                  <td>
                    <span
                      onClick={() => handleDeleteSeller(buyer)}
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

export default AllBuyers;
