import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { FaHotjar } from "react-icons/fa";
import { GiEmberShot } from "react-icons/gi";
import { Link } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";

const Advertise = () => {
  // const {
  //   isLoading,
  //   error,
  //   data: advertises = [],
  // } = useQuery({
  //   queryKey: ["advertises"],
  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/advertise`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  // if (isLoading) return <Loading />;

  // if (error) return "An error has occurred: " + error.message;
  const [advertises, setAdvertises] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/advertise`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("club")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAdvertises(data));
  }, []);

  // console.log(advertises);
  // console.log(advertises._id);

  return (
    <div>
      {advertises && advertises.length > 0 && (
        <div className="p-5 bg-pink-300	rounded-lg">
          <div className="hero bg-pink-100 border border-purple-300 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <button className="btn gap-2 btn-accent text-white btn-sm rounded-3xl">
                  Advertise
                  <div className="badge badge-secondary">
                    New!
                    <GiEmberShot className="ml-2" />
                  </div>
                </button>
                <h1 className="text-5xl font-bold">NEW Book Offer!!!</h1>
                {/*
                 */}
                <p className="py-6">
                  This provides lists of best-selling individual books and book
                  series to date and in any language. "Best-selling" refers to
                  the estimated number of copies sold of each book, rather than
                  the number of books printed or currently owned.
                </p>
                {/* <Link to={`/advertise/${advertises._id}`}> */}
                <button className="btn btn-primary mb-3">
                  Get hot offer now
                  <FaHotjar className="ml-2" />
                </button>
                {/* </Link> */}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {advertises.map((advertise) => (
                    <div key={advertise._id}>
                      <img
                        // src="https://images.pexels.com/photos/762686/pexels-photo-762686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        src={advertise.book_img}
                        className="md:w-80 h-80 rounded-lg shadow-2xl"
                        alt=""
                      />
                      <p className="text-xl border underline pl-3 my-5">
                        Book Name : {advertise.book_name}
                      </p>
                      <p className="text-xl border pl-3 my-5">
                        Book Writer : {advertise.book_writer}
                      </p>
                      <p className="text-xl border text-red-500 pl-3 my-5 underline">
                        Resale Price : ${advertise.resalePrice}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Advertise;
