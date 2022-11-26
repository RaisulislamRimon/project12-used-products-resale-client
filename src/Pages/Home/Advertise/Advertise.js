import React from "react";

const Advertise = () => {
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://images.pexels.com/photos/762686/pexels-photo-762686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="md:w-80 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">NEW Items Offer!!!</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              quas beatae itaque rerum quo qui aut voluptate iusto hic, enim
              eaque voluptatum iure expedita rem, laborum, non ipsam asperiores
              velit.
            </p>
            <button className="btn btn-primary">Buy this item</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
