import {
  useLocation,
  Navigate,
} from "react-router-dom";

import {
  useState,
} from "react";

const Booking = () => {

  const location =
    useLocation();

  const packageData =
    location.state?.packageData;

  const [
    name,
    setName,
  ] = useState("");

  const [
    email,
    setEmail,
  ] = useState("");

  const [
    phone,
    setPhone,
  ] = useState("");

  /* If package missing */
  if (!packageData) {

    return (
      <Navigate
        to="/packages"
      />
    );

  }

  const handleBooking =
    (e) => {

      e.preventDefault();

      alert(
        "Booking Successful 🎉"
      );

    };

  return (

    <div className="bg-gray-100 min-h-screen pt-28 p-5">

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-2xl">

        <h1 className="text-4xl font-bold text-center mb-8">

          Book Your Tour

        </h1>

        {/* Package */}
        <div className="bg-blue-50 p-6 rounded-2xl mb-8">

          <h2 className="text-2xl font-bold">

            {packageData.name}

          </h2>

          <p className="text-blue-600 text-xl mt-2">

            {packageData.price}

          </p>

          <p className="text-gray-600 mt-2">

            {packageData.days}

          </p>

        </div>

        {/* Form */}
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
            value={name}
            onChange={(e) =>
              setName(
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

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-2xl text-xl font-bold hover:scale-105 duration-300"
          >

            Confirm Booking

          </button>

        </form>

      </div>

    </div>

  );

};

export default Booking;