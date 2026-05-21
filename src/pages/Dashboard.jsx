import {
  useEffect,
  useState,
} from "react";

import {
  auth,
  db,
} from "../firebase";

import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const Dashboard = () => {

  const [user, setUser] =
    useState(null);

  const [
    bookingHistory,
    setBookingHistory,
  ] = useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const unsubscribe =
      auth.onAuthStateChanged(
        async (
          currentUser
        ) => {

          try {

            if (
              !currentUser
            ) {

              setLoading(
                false
              );

              window.location.href =
                "/login";

              return;

            }

            /* Fetch User */
            const userRef =
              doc(
                db,
                "users",
                currentUser.uid
              );

            const userSnap =
              await getDoc(
                userRef
              );

            if (
              userSnap.exists()
            ) {

              setUser(
                userSnap.data()
              );

            }

            /* Fetch Bookings */
            const bookingsQuery =
              query(
                collection(
                  db,
                  "bookings"
                ),
                where(
                  "userId",
                  "==",
                  currentUser.uid
                )
              );

            const querySnapshot =
              await getDocs(
                bookingsQuery
              );

            const bookings =
              [];

            querySnapshot.forEach(
              (doc) => {

                bookings.push({
                  id: doc.id,
                  ...doc.data(),
                });

              }
            );

            setBookingHistory(
              bookings
            );

            setLoading(
              false
            );

          } catch (
            error
          ) {

            console.log(
              error
            );

            setLoading(
              false
            );

          }

        }
      );

    return () =>
      unsubscribe();

  }, []);

  const handleLogout = () => {

    localStorage.removeItem(
      "travelgoLoggedIn"
    );

    auth.signOut();

    window.location.href =
      "/";

  };

  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">

        Loading...

      </div>

    );

  }

  return (

    <div className="bg-gray-100 min-h-screen pt-28 md:pt-24 p-5 md:p-10">

      <div className="max-w-7xl mx-auto space-y-10">

        {/* Profile */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 h-52"></div>

          <div className="relative px-6 md:px-10 pb-10">

            {/* Profile Image */}
            <div className="absolute -top-16 left-8">

              <div className="w-32 h-32 rounded-full bg-white p-2 shadow-xl">

                <img
                  src={
                    user?.photo ||
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />

              </div>

            </div>

            {/* User Info */}
            <div className="pt-24">

              <h1 className="text-3xl md:text-5xl font-bold">

                Welcome,
                {" "}
                {user?.name} 👋

              </h1>

              <p className="text-lg text-gray-600 mt-4">

                Manage your profile,
                bookings and upcoming trips.

              </p>

              {/* User Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

                <div className="bg-gray-100 p-5 rounded-2xl shadow-md">

                  <h3 className="text-lg font-bold text-blue-600">

                    📧 Email Address

                  </h3>

                  <p className="mt-3 text-gray-700 text-lg break-all">

                    {user?.email}

                  </p>

                </div>

                <div className="bg-gray-100 p-5 rounded-2xl shadow-md">

                  <h3 className="text-lg font-bold text-blue-600">

                    📞 Phone Number

                  </h3>

                  <p className="mt-3 text-gray-700 text-lg">

                    {user?.phone}

                  </p>

                </div>

                <div className="bg-gray-100 p-5 rounded-2xl shadow-md">

                  <h3 className="text-lg font-bold text-blue-600">

                    🌍 Traveler Type

                  </h3>

                  <p className="mt-3 text-gray-700 text-lg">

                    Frequent Traveler

                  </p>

                </div>

                <div className="bg-gray-100 p-5 rounded-2xl shadow-md">

                  <h3 className="text-lg font-bold text-blue-600">

                    ✈ Favorite Destinations

                  </h3>

                  <p className="mt-3 text-gray-700 text-lg">

                    Goa • Kashmir • Manali

                  </p>

                </div>

              </div>

              {/* Logout */}
              <div className="mt-10">

                <button
                  onClick={
                    handleLogout
                  }
                  className="bg-red-500 text-white px-8 py-4 rounded-2xl text-xl font-bold hover:bg-red-600 transition"
                >

                  Logout

                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-xl text-center">

            <h2 className="text-5xl font-bold text-blue-600">

              {
                bookingHistory.length
              }

            </h2>

            <p className="mt-4 text-xl font-semibold">

              Total Trips

            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl text-center">

            <h2 className="text-5xl font-bold text-green-600">

              {
                bookingHistory.filter(
                  (
                    trip
                  ) =>
                    trip.status ===
                    "Confirmed"
                ).length
              }

            </h2>

            <p className="mt-4 text-xl font-semibold">

              Confirmed Trips

            </p>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl text-center">

            <h2 className="text-5xl font-bold text-orange-500">

              {
                bookingHistory.filter(
                  (
                    trip
                  ) =>
                    trip.status ===
                    "Pending"
                ).length
              }

            </h2>

            <p className="mt-4 text-xl font-semibold">

              Pending Trips

            </p>

          </div>

        </div>

        {/* Booking History */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">

          <h2 className="text-3xl font-bold mb-8">

            Booking History

          </h2>

          {bookingHistory.length ===
          0 ? (

            <div className="text-center py-16">

              <img
                src="https://cdn-icons-png.flaticon.com/512/4076/4076478.png"
                alt="No bookings"
                className="w-40 mx-auto"
              />

              <h3 className="text-3xl font-bold mt-8">

                No Trips Yet

              </h3>

              <p className="text-gray-600 mt-4 text-lg">

                Your future bookings will appear here after successful payment.

              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {bookingHistory.map(
                (trip) => (

                  <div
                    key={trip.id}
                    className="bg-gray-100 p-6 rounded-3xl shadow-lg"
                  >

                    <h3 className="text-2xl font-bold">

                      {
                        trip.package
                      }

                    </h3>

                    <p className="mt-4 text-lg">

                      👥 Persons:
                      {" "}
                      {
                        trip.persons
                      }

                    </p>

                    <p className="mt-3 text-lg">

                      📅 Date:
                      {" "}
                      {
                        trip.bookingDate
                      }

                    </p>

                    <p className="mt-3 text-lg">

                      🍽 Food:
                      {" "}
                      {
                        trip.food
                      }

                    </p>

                    <p className="mt-3 text-lg break-all">

                      💳 Payment ID:
                      {" "}
                      {
                        trip.paymentId
                      }

                    </p>

                    <p className="mt-4 text-2xl font-bold text-blue-600">

                      ₹
                      {
                        trip.total?.toLocaleString()
                      }

                    </p>

                    <span className="inline-block mt-5 bg-green-500 text-white px-5 py-2 rounded-xl font-semibold">

                      {
                        trip.status
                      }

                    </span>

                  </div>

                )
              )}

            </div>

          )}

        </div>

      </div>

    </div>

  );

};

export default Dashboard;