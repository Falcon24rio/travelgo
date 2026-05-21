import {
  useSearchParams,
} from "react-router-dom";

import packagesData from "../data/packagesData";

const Booking = () => {

  const [searchParams] =
    useSearchParams();

  const packageName =
    searchParams.get(
      "package"
    );

  const selectedPackage =
    packagesData.find(
      (tour) =>
        tour.name ===
        decodeURIComponent(
          packageName || ""
        )
    );

  return (

    <div className="min-h-screen bg-gray-100 pt-28 p-5">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center mb-8">

          Book Your Tour

        </h1>

        {selectedPackage ? (

          <div className="bg-blue-50 p-6 rounded-2xl mb-8">

            <h2 className="text-3xl font-bold">

              {selectedPackage.name}

            </h2>

            <p className="text-xl text-blue-600 mt-3">

              {selectedPackage.price}

            </p>

            <p className="mt-2 text-gray-600">

              {selectedPackage.days}

            </p>

          </div>

        ) : (

          <div className="bg-red-100 text-red-600 p-5 rounded-2xl mb-8">

            Package Not Found

          </div>

        )}

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-2xl border outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-2xl border outline-none"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-4 rounded-2xl border outline-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-2xl text-xl font-bold"
          >

            Confirm Booking

          </button>

        </form>

      </div>

    </div>

  );

};

export default Booking;