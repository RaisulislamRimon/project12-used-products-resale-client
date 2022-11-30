import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import Swal from "sweetalert2";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/my-books?email=${user?.email}`;

  const {
    data: myBooks = [],
    error,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["my-books", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  const handleDelete = (bookDelete) => {
    fetch(`http://localhost:5000/my-books/${bookDelete._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your book has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-3xl my-3">My Products</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Book Name</th>
                <th>Sales Status</th>
                <th>Price</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              {myBooks.map((myBook, i) => (
                <tr key={myBook._id}>
                  <th>{i + 1}</th>
                  <td>{myBook.book_name}</td>
                  <td>{myBook.available}</td>
                  <td>{myBook.resalePrice}</td>
                  {/* <td>Advertise | Delete</td> */}
                  <td>
                    {" "}
                    {myBook.available === "unsold" && "Advertise | "}
                    <span
                      onClick={() => handleDelete(myBook)}
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

export default MyProducts;
