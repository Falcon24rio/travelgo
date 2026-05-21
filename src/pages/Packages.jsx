import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import packagesData from "../data/packagesData";

const Packages = () => {

  const [search, setSearch] =
    useState("");

  const filteredPackages =
    packagesData.filter((tour) =>
      tour.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (

    <div className="bg-gray-100 min-h-screen pt-28 md:pt-24 p-5 md:p-10">

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Explore Tour Packages
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-10">

        <input
          type="text"
          placeholder="Search destinations..."
          className="w-full max-w-xl p-4 rounded-2xl border shadow-lg outline-none"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredPackages.map(
          (tour, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-blue-300 duration-300"
            >

              {/* Image */}
              <img
                src={tour.image}
                alt={tour.name}
                className="h-64 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  {tour.name}
                </h2>

                <p className="mt-2 text-gray-600">
                  {tour.days}
                </p>

                <p className="mt-2 text-xl font-semibold text-blue-600">
                  {tour.price}
                </p>

                {/* Highlights */}
                <div className="mt-4 flex flex-wrap gap-2">

                  {tour.highlights?.map(
                    (item, index) => (

                      <span
                        key={index}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {item}
                      </span>

                    )
                  )}

                </div>

                {/* Description */}
                <p className="mt-4 text-gray-600 leading-7">
                  {tour.description}
                </p>

                {/* Button */}
                <Link
                  to={`/packages/${encodeURIComponent(
                    tour.name
                  )}`}
                >

                  <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-2xl hover:scale-105 duration-300">
                    View Details
                  </button>

                </Link>

              </div>

            </motion.div>

          )
        )}

      </div>

    </div>

  );

};

export default Packages;