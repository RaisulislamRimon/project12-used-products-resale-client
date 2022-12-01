import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const MyBuyers = () => {
  const { user } = useContext(AuthContext);

  // const url = `http://localhost:5000/my-buyers?email=${user?.email}`;
  const url = `http://localhost:5000/my-buyers`;

  const {
    data: allBuyers = [],
    error,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["my-buyers"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) return "An error has occurred: " + error.message;

  const handleDeleteBuyer = (buyer) => {
    // console.log("handleDeletebuyer", buyer);
    fetch(`http://localhost:5000/my-buyers/delete/${buyer._id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // console.log("clicked");
        if (data.deletedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Seller deleted successfully",
            showConfirmButton: false,
            timer: 1000,
          });
          refetch();
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-3xl underline my-5">My Buyers</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Phone</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {allBuyers.map((buyer, i) => (
                <tr key={buyer?._id}>
                  <th>{i + 1}</th>
                  <td>{buyer?.name}</td>
                  <td>{buyer?.email}</td>
                  <td>{buyer?.phone || "Not available"}</td>
                  <td>{buyer?.meetingLocation || "Not available"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBuyers;
