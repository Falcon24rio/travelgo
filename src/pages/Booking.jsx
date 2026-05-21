import {
  useLocation,
} from "react-router-dom";

import {
  useState,
} from "react";

import qrImage from "../assets/WhatsApp Image 2026-05-21 at 2.41.41 AM.jpeg";

import {
  auth,
  db,
} from "../firebase";

import {
  collection,
  addDoc,
} from "firebase/firestore";

import {
  sendBookingEmail,
} from "../emailjs";

const Booking = () => {

  const location =
    useLocation();

  const packageData =
    location.state?.packageData;

  const [persons, setPersons] =
    useState(1);

  const [food, setFood] =
    useState("Veg");

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [bookingDate, setBookingDate] =
    useState("");

  const [request, setRequest] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const packagePrice =
    Number(
      packageData?.price
        ?.replace("₹", "")
        ?.replace(/,/g, "")
    ) || 0;

  const total =
    packagePrice * persons;

  /* Payment */
  const handlePayment =
    async () => {

      if (
        !name ||
        !phone ||
        !email ||
        !bookingDate
      ) {

        alert(
          "Please fill all required fields"
        );

        return;

      }

      setLoading(true);

      const options = {

        key:
          "YOUR_RAZORPAY_KEY_ID",

        amount:
          total * 100,

        currency:
          "INR",

        name:
          "TravelGo",

        description:
          packageData?.name,

        image:
          "https://cdn-icons-png.flaticon.com/512/201/201623.png",

        handler:
          async function (
            response
          ) {

            try {

              /* Save Booking */
              await addDoc(
                collection(
                  db,
                  "bookings"
                ),
                {

                  userId:
                    auth.currentUser
                      ?.uid,

                  customerName:
                    name,

                  email,

                  phone,

                  package:
                    packageData?.name,

                  packagePrice,

                  persons,

                  food,

                  bookingDate,

                  request,

                  total,

                  paymentId:
                    response.razorpay_payment_id,

                  status:
                    "Confirmed",

                  createdAt:
                    new Date(),

                }
              );

              /* Send Email */
              await sendBookingEmail({

                name,

                email,

                package:
                  packageData?.name,

                bookingDate,

                total,

              });

              alert(
                "Booking Successful!"
              );

              window.location.href =
                "/profile";

            } catch (
              error
            ) {

              console.log(
                error
              );

              alert(
                "Booking save failed"
              );

            } finally {

              setLoading(false);

            }

          },

        prefill: {

          name,

          email,

          contact:
            phone,

        },

        notes: {

          package:
            packageData?.name,

          persons,

          food,

          request,

        },

        theme: {

          color:
            "#2563eb",

        },

      };

      const razorpay =
        new window.Razorpay(
          options
        );

      razorpay.open();

    };

  return (

    <div className="bg-gray-100 min-h-screen pt-28 md:pt-24 p-5 md:p-10">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-blue-600 text-white p-8">

          <h1 className="text-3xl md:text-5xl font-bold">

            Book Your Trip

          </h1>

          <p className="mt-4 text-lg">

            Complete your booking details

          </p>

        </div>

        <div className="p-6 md:p-10 space-y-8">

          {/* Package Info */}
          <div className="bg-blue-50 p-6 rounded-3xl shadow-lg">

            <h2 className="text-3xl font-bold">

              {packageData?.name}

            </h2>

            <p className="mt-3 text-lg text-gray-600">

              {packageData?.days}

            </p>

            <p className="mt-3 text-2xl font-bold text-blue-600">

              {packageData?.price}

            </p>

          </div>

          {/* Name */}
          <div>

            <label className="block text-lg font-semibold mb-3">

              Full Name

            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              placeholder="Enter your full name"
              className="w-full p-4 rounded-2xl border outline-none shadow-md"
            />

          </div>

          {/* Phone */}
          <div>

            <label className="block text-lg font-semibold mb-3">

              Phone Number

            </label>

            <input
              type="tel"
              value={phone}
              onChange={(e) =>
                setPhone(
                  e.target.value
                )
              }
              placeholder="Enter your phone number"
              className="w-full p-4 rounded-2xl border outline-none shadow-md"
            />

          </div>

          {/* Email */}
          <div>

            <label className="block text-lg font-semibold mb-3">

              Email Address

            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              placeholder="Enter your email"
              className="w-full p-4 rounded-2xl border outline-none shadow-md"
            />

          </div>

          {/* Booking Date */}
          <div>

            <label className="block text-lg font-semibold mb-3">

              Booking Date

            </label>

            <input
              type="date"
              value={bookingDate}
              onChange={(e) =>
                setBookingDate(
                  e.target.value
                )
              }
              min={
                new Date()
                  .toISOString()
                  .split("T")[0]
              }
              className="w-full p-4 rounded-2xl border outline-none shadow-md"
            />

          </div>

          {/* Persons */}
          <div>

            <label className="block text-lg font-semibold mb-3">

              Number of Persons

            </label>

            <select
              value={persons}
              onChange={(e) =>
                setPersons(
                  Number(
                    e.target.value
                  )
                )
              }
              className="w-full p-4 rounded-2xl border outline-none shadow-md"
            >

              <option value={1}>
                1 Person
              </option>

              <option value={2}>
                2 Persons
              </option>

              <option value={3}>
                3 Persons
              </option>

              <option value={4}>
                4 Persons
              </option>

              <option value={5}>
                5 Persons
              </option>

              <option value={6}>
                6 Persons
              </option>

            </select>

          </div>

          {/* Food */}
          <div>

            <label className="block text-lg font-semibold mb-3">

              Food Preference

            </label>

            <select
              value={food}
              onChange={(e) =>
                setFood(
                  e.target.value
                )
              }
              className="w-full p-4 rounded-2xl border outline-none shadow-md"
            >

              <option value="Veg">

                Veg

              </option>

              <option value="Non Veg">

                Non Veg

              </option>

            </select>

          </div>

          {/* Requests */}
          <div>

            <label className="block text-lg font-semibold mb-3">

              Any Preferences or Requests

            </label>

            <textarea
              rows={5}
              value={request}
              onChange={(e) =>
                setRequest(
                  e.target.value
                )
              }
              placeholder="Example: Honeymoon decoration, birthday surprise, wheelchair assistance etc."
              className="w-full p-4 rounded-2xl border outline-none shadow-md resize-none"
            ></textarea>

          </div>

          {/* Summary */}
          <div className="bg-gray-100 p-8 rounded-3xl shadow-xl">

            <h2 className="text-3xl font-bold mb-6">

              Booking Summary

            </h2>

            <div className="space-y-4 text-lg">

              <div className="flex justify-between">

                <span>

                  Package Price

                </span>

                <span>

                  ₹
                  {packagePrice.toLocaleString()}

                </span>

              </div>

              <div className="flex justify-between">

                <span>

                  Persons

                </span>

                <span>

                  {persons}

                </span>

              </div>

              <div className="flex justify-between">

                <span>

                  Food Preference

                </span>

                <span>

                  {food}

                </span>

              </div>

              <hr />

              <div className="flex justify-between text-3xl font-bold text-blue-600">

                <span>

                  Total Amount

                </span>

                <span>

                  ₹
                  {total.toLocaleString()}

                </span>

              </div>

            </div>

          </div>

          {/* Payment */}
          <div className="bg-white border p-8 rounded-3xl shadow-xl text-center">

            <h2 className="text-3xl font-bold mb-6">

              Payment Options

            </h2>

            <img
              src={qrImage}
              alt="UPI QR"
              className="w-72 mx-auto rounded-2xl shadow-lg"
            />

            <p className="mt-6 text-xl font-semibold">

              UPI ID:
              dipss2004@oksbi

            </p>

            <p className="mt-3 text-lg text-gray-600">

              Scan QR code or pay using UPI

            </p>

            <button
              onClick={
                handlePayment
              }
              disabled={loading}
              className="mt-8 w-full bg-blue-600 text-white py-5 rounded-2xl text-2xl font-bold hover:bg-blue-700 duration-300 disabled:opacity-50"
            >

              {
                loading
                  ? "Processing..."
                  : "Pay via Razorpay"
              }

            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Booking;