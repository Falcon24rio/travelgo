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

        {/* Navbar */}
        <nav className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white px-5 md:px-10 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-2xl">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >

            <FaPlaneDeparture className="text-3xl" />

            <div>

              <h1 className="text-2xl md:text-3xl font-black">
                TravelGo
              </h1>

              <p className="text-sm text-white/80">
                Explore The World
              </p>

            </div>

          </Link>

          {/* Menu */}
          <div className="flex items-center gap-3 md:gap-6 text-sm md:text-base">

            <Link
              to="/"
              className="hover:text-gray-200 transition"
            >
              Home
            </Link>

            <Link
              to="/packages"
              className="hover:text-gray-200 transition"
            >
              Packages
            </Link>

            <Link
              to="/contact"
              className="hover:text-gray-200 transition"
            >
              Contact
            </Link>

            {isLoggedIn ? (

              <div className="flex items-center gap-3">

                <Link
                  to="/profile"
                  className="bg-white text-blue-700 px-4 py-2 rounded-xl font-bold hover:bg-gray-100 transition"
                >
                  Profile
                </Link>

                <button
                  onClick={
                    handleLogout
                  }
                  className="bg-red-500 px-4 py-2 rounded-xl font-bold hover:bg-red-600 transition"
                >
                  Logout
                </button>

              </div>

            ) : (

              <Link
                to="/auth"
                className="bg-white text-blue-700 px-4 py-2 rounded-xl font-bold hover:bg-gray-100 transition"
              >
                Login
              </Link>

            )}

          </div>

        </nav>

        {/* Routes */}
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
            path="/packages/:name"
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

          {/* Dashboard */}
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