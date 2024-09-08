import React from "react";

const ListingCard = () => {
  return (
    <div className=" max-w-xl  mx-auto overflow-visible  bg-white  rounded-lg shadow-lg dark:bg-gray-800 my-8">
      <div className="relative p-2">
        <img
          className="w-full transform transition duration-300 -translate-y-5  hover:-translate-y-16   hover:shadow-2xl rounded-lg"
          src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" // replace with the path to your image
          alt="Office Studio"
          style={{ boxShadow: "0 20px 40px -14px rgba(0, 0, 0, 0.25)" }}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          Office Studio
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          The place is close to Metro Station and bus stop just 2 min by walk
          and near to "Naviglio" where you can enjoy the night life in London,
          UK.
        </p>
        <div className="flex justify-between mt-3 item-center">
          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
            $1,119/night
          </h1>

          <span className="text-sm text-gray-600 dark:text-gray-400">
            London, UK
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
