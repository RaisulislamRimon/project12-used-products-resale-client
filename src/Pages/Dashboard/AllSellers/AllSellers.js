import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Loading from "../../Shared/Loading/Loading";

const AllSellers = () => {
  const url = `https://used-products-resale-server-kappa.vercel.app/all-sellers`;

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

  if (isLoading) {
    return <Loading />;
  }

  if (error) return "An error has occurred: " + error.message;

  const handleDeleteSeller = (seller) => {
    // console.log("handleDeleteSeller", seller);
    fetch(
      `https://used-products-resale-server-kappa.vercel.app/all-sellers/delete/${seller._id}`,
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
                      onClick={() => handleDeleteSeller(seller)}
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
