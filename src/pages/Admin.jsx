import {
  useEffect,
  useState,
} from "react";

import {
  db,
} from "../firebase";

import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Admin = () => {

  const [
    packages,
    setPackages,
  ] = useState([]);

  const [
    users,
    setUsers,
  ] = useState([]);

  const [
    bookings,
    setBookings,
  ] = useState([]);

  /* Package States */
  const [name, setName] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [days, setDays] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [
    imageUrl,
    setImageUrl,
  ] = useState("");

  /* Fetch All Data */
  const fetchData =
    async () => {

      try {

        /* Packages */
        const packagesSnapshot =
          await getDocs(
            collection(
              db,
              "packages"
            )
          );

        const packagesData =
          [];

        packagesSnapshot.forEach(
          (doc) => {

            packagesData.push({
              id: doc.id,
              ...doc.data(),
            });

          }
        );

        setPackages(
          packagesData
        );

        /* Users */
        const usersSnapshot =
          await getDocs(
            collection(
              db,
              "users"
            )
          );

        const usersData =
          [];

        usersSnapshot.forEach(
          (doc) => {

            usersData.push({
              id: doc.id,
              ...doc.data(),
            });

          }
        );

        setUsers(
          usersData
        );

        /* Bookings */
        const bookingsSnapshot =
          await getDocs(
            collection(
              db,
              "bookings"
            )
          );

        const bookingsData =
          [];

        bookingsSnapshot.forEach(
          (doc) => {

            bookingsData.push({
              id: doc.id,
              ...doc.data(),
            });

          }
        );

        setBookings(
          bookingsData
        );

      } catch (
        error
      ) {

        console.log(
          error
        );

      }

    };

  useEffect(() => {

    fetchData();

  }, []);

  /* Add Package */
  const addPackage =
    async () => {

      try {

        if (
          !name ||
          !price ||
          !days ||
          !description ||
          !imageUrl
        ) {

          alert(
            "Please fill all fields"
          );

          return;

        }

        await addDoc(
          collection(
            db,
            "packages"
          ),
          {

            name,

            price:
              `₹${price}`,

            days,

            description,

            image:
              imageUrl,

            createdAt:
              new Date(),

          }
        );

        alert(
          "Package Added Successfully"
        );

        setName("");
        setPrice("");
        setDays("");
        setDescription("");
        setImageUrl("");

        fetchData();

      } catch (
        error
      ) {

        console.log(
          error
        );

        alert(
          "Failed to add package"
        );

      }

    };

  /* Delete Package */
  const deletePackage =
    async (id) => {

      try {

        await deleteDoc(
          doc(
            db,
            "packages",
            id
          )
        );

        fetchData();

      } catch (
        error
      ) {

        console.log(
          error
        );

      }

    };

  return (

    <div className="bg-gray-100 min-h-screen pt-28 p-5 md:p-10">

      <div className="max-w-7xl mx-auto space-y-10">

        {/* Header */}
        <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-2xl">

          <h1 className="text-4xl md:text-5xl font-bold">

            Admin Dashboard

          </h1>

          <p className="mt-4 text-lg">

            Manage Packages,
            Users and Bookings

          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="bg-white p-8 rounded-3xl shadow-xl text-center">

            <h2 className="text-5xl font-bold text-blue-600">

              {packages.length}

            </h2>

            <p className="mt-4 text-xl font-semibold">

              Packages

            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl text-center">

            <h2 className="text-5xl font-bold text-green-600">

              {users.length}

            </h2>

            <p className="mt-4 text-xl font-semibold">

              Users

            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl text-center">

            <h2 className="text-5xl font-bold text-orange-500">

              {bookings.length}

            </h2>

            <p className="mt-4 text-xl font-semibold">

              Bookings

            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl text-center">

            <h2 className="text-4xl font-bold text-red-500">

              ₹
              {bookings
                .reduce(
                  (
                    total,
                    booking
                  ) =>
                    total +
                    Number(
                      booking.total ||
                        0
                    ),
                  0
                )
                .toLocaleString()}

            </h2>

            <p className="mt-4 text-xl font-semibold">

              Revenue

            </p>

          </div>

        </div>

        {/* Add Package */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-bold mb-8">

            Add New Package

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Package Name"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              className="p-4 border rounded-2xl outline-none"
            />

            <input
              type="text"
              placeholder="Package Price"
              value={price}
              onChange={(e) =>
                setPrice(
                  e.target.value
                )
              }
              className="p-4 border rounded-2xl outline-none"
            />

            <input
              type="text"
              placeholder="Days / Nights"
              value={days}
              onChange={(e) =>
                setDays(
                  e.target.value
                )
              }
              className="p-4 border rounded-2xl outline-none"
            />

            <input
              type="text"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) =>
                setImageUrl(
                  e.target.value
                )
              }
              className="p-4 border rounded-2xl outline-none"
            />

          </div>

          <textarea
            rows={5}
            placeholder="Package Description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="w-full mt-6 p-4 border rounded-2xl outline-none"
          ></textarea>

          <button
            onClick={
              addPackage
            }
            className="mt-6 bg-blue-600 text-white px-8 py-4 rounded-2xl text-xl font-bold hover:bg-blue-700 transition"
          >

            Add Package

          </button>

        </div>

        {/* Packages */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-bold mb-8">

            Manage Packages

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {packages.map(
              (pkg) => (

                <div
                  key={pkg.id}
                  className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg"
                >

                  <img
                    src={
                      pkg.image
                    }
                    alt={
                      pkg.name
                    }
                    className="w-full h-60 object-cover"
                  />

                  <div className="p-6">

                    <h3 className="text-2xl font-bold">

                      {pkg.name}

                    </h3>

                    <p className="mt-3 text-gray-600">

                      {pkg.days}

                    </p>

                    <p className="mt-3 text-lg text-gray-700">

                      {pkg.description}

                    </p>

                    <p className="mt-4 text-2xl font-bold text-blue-600">

                      {pkg.price}

                    </p>

                    <button
                      onClick={() =>
                        deletePackage(
                          pkg.id
                        )
                      }
                      className="mt-5 bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
                    >

                      Delete

                    </button>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

        {/* Users */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-bold mb-8">

            Registered Users

          </h2>

          <div className="space-y-5">

            {users.map(
              (user) => (

                <div
                  key={user.id}
                  className="bg-gray-100 p-5 rounded-2xl shadow"
                >

                  <h3 className="text-2xl font-bold">

                    {user.name}

                  </h3>

                  <p className="mt-2">

                    📧
                    {" "}
                    {user.email}

                  </p>

                  <p className="mt-2">

                    📞
                    {" "}
                    {user.phone}

                  </p>

                  <p className="mt-2">

                    🛡 Role:
                    {" "}
                    {user.role ||
                      "user"}

                  </p>

                </div>

              )
            )}

          </div>

        </div>

        {/* Bookings */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-bold mb-8">

            Booking History

          </h2>

          <div className="space-y-5">

            {bookings.map(
              (booking) => (

                <div
                  key={booking.id}
                  className="bg-gray-100 p-5 rounded-2xl shadow"
                >

                  <h3 className="text-2xl font-bold">

                    {booking.package}

                  </h3>

                  <p className="mt-2">

                    👤
                    {" "}
                    {booking.customerName}

                  </p>

                  <p className="mt-2">

                    📧
                    {" "}
                    {booking.email}

                  </p>

                  <p className="mt-2">

                    📞
                    {" "}
                    {booking.phone}

                  </p>

                  <p className="mt-2">

                    👥 Persons:
                    {" "}
                    {booking.persons}

                  </p>

                  <p className="mt-2">

                    📅
                    {" "}
                    {booking.bookingDate}

                  </p>

                  <p className="mt-2">

                    💳
                    {" "}
                    ₹
                    {booking.total}

                  </p>

                  <p className="mt-2">

                    ✅
                    {" "}
                    {booking.status}

                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </div>

  );

};

export default Admin;