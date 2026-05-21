import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import {
  FaPlaneDeparture,
} from "react-icons/fa";

/* Firebase */
import {
  auth,
} from "./firebase";

/* Components */
import ProtectedRoute from "./components/ProtectedRoute";

/* Pages */
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import AuthPage from "./pages/AuthPage";

function App() {

  const [
    isLoggedIn,
    setIsLoggedIn,
  ] = useState(false);

  /* Auth Listener */
  useEffect(() => {

    const unsubscribe =
      auth.onAuthStateChanged(
        (user) => {

          setIsLoggedIn(
            !!user
          );

        }
      );

    return () =>
      unsubscribe();

  }, []);

  /* Logout */
  const handleLogout =
    async () => {

      try {

        await auth.signOut();

        window.location.href =
          "/";

      } catch (
        error
      ) {

        console.log(
          error
        );

      }

    };

  return (

    <BrowserRouter>

      <div className="min-h-screen bg-gray-100">

        {/* NAVBAR */}
        <nav className="bg-gradient-to-r from-blue-700 to-cyan-500 backdrop-blur-xl text-white px-5 md:px-10 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-2xl border-b border-white/10">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >

            <div className="bg-white/20 p-3 rounded-2xl">

              <FaPlaneDeparture className="text-2xl md:text-3xl" />

            </div>

            <div>

              <h1 className="text-2xl md:text-3xl font-black tracking-wide">

                TravelGo

              </h1>

              <p className="text-white/80 text-xs md:text-sm">

                Luxury Travel Platform

              </p>

            </div>

          </Link>

          {/* Menu */}
          <div className="flex items-center gap-3 md:gap-6 text-sm md:text-base">

            <Link
              to="/"
              className="hover:text-gray-200 transition font-semibold"
            >

              Home

            </Link>

            <Link
              to="/packages"
              className="hover:text-gray-200 transition font-semibold"
            >

              Packages

            </Link>

            <Link
              to="/contact"
              className="hover:text-gray-200 transition font-semibold"
            >

              Contact

            </Link>

            {/* Auth Buttons */}
            {isLoggedIn ? (

              <div className="flex items-center gap-3">

                {/* Profile */}
                <Link
                  to="/profile"
                  className="bg-white text-blue-700 px-5 py-2.5 rounded-2xl font-bold hover:bg-gray-100 transition shadow-lg"
                >

                  Profile

                </Link>

               
                

                

              </div>

            ) : (

              <Link
                to="/auth"
                className="bg-white text-blue-700 px-5 py-2.5 rounded-2xl font-bold hover:bg-gray-100 transition shadow-lg"
              >

                Login / Register

              </Link>

            )}

          </div>

        </nav>

        {/* ROUTES */}
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Packages */}
          <Route
            path="/packages"
            element={<Packages />}
          />

          {/* Package Details */}
          <Route
            path="/packages/:id"
            element={
              <PackageDetails />
            }
          />

          {/* Booking */}
          <Route
            path="/booking"
            element={
              <ProtectedRoute>

                <Booking />

              </ProtectedRoute>
            }
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* Auth */}
          <Route
            path="/auth"
            element={<AuthPage />}
          />

          {/* Profile */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>

                <Dashboard />

              </ProtectedRoute>
            }
          />

          {/* Admin */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute
                adminOnly={true}
              >

                <Admin />

              </ProtectedRoute>
            }
          />

        </Routes>

      </div>

    </BrowserRouter>

  );

}

export default App;