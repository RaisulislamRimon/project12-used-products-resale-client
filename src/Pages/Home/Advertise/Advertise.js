import React, { useEffect, useState } from "react";
import { FaHotjar } from "react-icons/fa";
import { GiEmberShot } from "react-icons/gi";

const Advertise = () => {
  const [advertise, setAdvertise] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/advertise`)
      .then((res) => res.json())
      .then((data) => {
        setAdvertise(data[data.length - 1]);
        console.log(data[data.length - 1]);
      });
  }, []);

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["advertise"],
  //   queryFn: () =>
  //     fetch(`http://localhost:5000/advertise`).then((res) => res.json()),
  // });

  // if (isLoading) return <Loading />;

  // if (error) return "An error has occurred: " + error.message;

  return (
    <div className="p-5">
      {advertise.length}
      <div className="hero bg-base-200 border border-purple-300 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            // src="https://images.pexels.com/photos/762686/pexels-photo-762686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            src={advertise.book_img}
            className="md:w-80 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <button className="btn gap-2 btn-accent text-white btn-sm rounded-3xl">
              Advertise
              <div className="badge badge-secondary">
                New!
                <GiEmberShot className="ml-2" />
              </div>
            </button>
            <h1 className="text-5xl font-bold">NEW Book Offer!!!</h1>
            <p className="text-xl border underline pl-3 my-5">
              Book Name : {advertise.book_name}
            </p>
            <p className="text-xl border pl-3 my-5">
              Book Writer : {advertise.book_writer}
            </p>
            <p className="text-xl border text-red-500 pl-3 my-5 underline">
              Resale Price : ${advertise.resalePrice}
            </p>
            <p className="py-6">
              This page provides lists of best-selling individual books and book
              series to date and in any language. "Best-selling" refers to the
              estimated number of copies sold of each book, rather than the
              number of books printed or currently owned.
            </p>
            <button className="btn btn-primary">
              Get this hot offer now
              <FaHotjar className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
