import {
  useSearchParams,
} from "react-router-dom";

import {
  useState,
} from "react";

import packagesData from "../data/packagesData";

import qrImage from "../assets/WhatsApp Image 2026-05-21 at 2.41.41 AM.jpeg";

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

  const [
    travelers,
    setTravelers,
  ] = useState(1);

  const [
    fullName,
    setFullName,
  ] = useState("");

  const [
    email,
    setEmail,
  ] = useState("");

  const [
    phone,
    setPhone,
  ] = useState("");

  if (!selectedPackage) {

    return (

      <div className="min-h-screen flex items-center justify-center text-4xl font-bold">

        Package Not Found

      </div>

    );

  }

  const packagePrice =
    parseInt(
      selectedPackage.price.replace(
        /[^0-9]/g,
        ""
      )
    ) || 0;

  const totalPrice =
    packagePrice *
    travelers;

  /* Razorpay */
  const handleRazorpay =
    () => {

      alert(
        "Razorpay Integration Coming Soon 🚀"
      );

    };

  const handleBooking =
    (e) => {

      e.preventDefault();

      alert(
        "Booking Request Submitted 🎉"
      );

    };

  return (

    <div className="bg-gray-100 min-h-screen pt-28 p-5">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          <img
            src={selectedPackage.image}
            alt={selectedPackage.name}
            className="w-full h-72 object-cover"
          />

          <div className="p-8">

            <h1 className="text-4xl font-bold">

              {selectedPackage.name}

            </h1>

            <p className="text-blue-600 text-2xl mt-4 font-bold">

              {selectedPackage.price}

            </p>

            <p className="text-gray-600 mt-2 text-lg">

              {selectedPackage.days}

            </p>

            <p className="mt-6 text-gray-700 leading-8">

              {selectedPackage.description}

            </p>

            {/* Highlights */}
            <div className="mt-8 flex flex-wrap gap-3">

              {selectedPackage.highlights?.map(
                (
                  item,
                  index
                ) => (

                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
                  >

                    {item}

                  </span>

                )
              )}

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <h2 className="text-4xl font-bold mb-8">

            Book Your Tour

          </h2>

          <form
            onSubmit={
              handleBooking
            }
            className="space-y-5"
          >

            <input
              type="text"
              placeholder="Full Name"
              required
              value={fullName}
              onChange={(e) =>
                setFullName(
                  e.target.value
                )
              }
              className="w-full p-4 rounded-2xl border outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="w-full p-4 rounded-2xl border outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) =>
                setPhone(
                  e.target.value
                )
              }
              className="w-full p-4 rounded-2xl border outline-none"
            />

            {/* Travelers */}
            <div>

              <label className="font-semibold text-lg">

                Number of Travelers

              </label>

              <input
                type="number"
                min="1"
                value={travelers}
                onChange={(e) =>
                  setTravelers(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-full mt-3 p-4 rounded-2xl border outline-none"
              />

            </div>

            {/* Payment Summary */}
            <div className="bg-blue-50 rounded-2xl p-6">

              <h3 className="text-2xl font-bold mb-4">

                Payment Summary

              </h3>

              <div className="space-y-3 text-lg">

                <div className="flex justify-between">

                  <span>
                    Package Price
                  </span>

                  <span>
                    ₹{packagePrice}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span>
                    Travelers
                  </span>

                  <span>
                    {travelers}
                  </span>

                </div>

                <div className="border-t pt-3 flex justify-between text-2xl font-bold text-blue-700">

                  <span>
                    Total
                  </span>

                  <span>
                    ₹{totalPrice}
                  </span>

                </div>

              </div>

            </div>

            {/* QR Payment */}
            <div className="bg-gray-100 rounded-3xl p-6 text-center">

              <h3 className="text-2xl font-bold mb-5">

                Scan & Pay

              </h3>

              <img
                src={qrImage}
                alt="QR Payment"
                className="w-64 mx-auto rounded-2xl shadow-xl"
              />

            </div>

            {/* Razorpay */}
            <button
              type="button"
              onClick={
                handleRazorpay
              }
              className="w-full bg-black text-white py-4 rounded-2xl text-xl font-bold hover:scale-105 duration-300"
            >

              Pay with Razorpay

            </button>

            {/* Confirm */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-2xl text-xl font-bold hover:scale-105 duration-300"
            >

              Confirm Booking

            </button>

          </form>

        </div>

      </div>

    </div>

  );

};

export default Booking;