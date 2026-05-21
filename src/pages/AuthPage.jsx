import {
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../firebase";

import {
  FaPlaneDeparture,
  FaUserShield,
} from "react-icons/fa";

const AuthPage = () => {

  const navigate =
    useNavigate();

  /* Modes */
  const [mode, setMode] =
    useState("login");

  /*
    Modes:
    login
    register
    admin
  */

  /* States */
  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  /* Submit */
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        /* USER LOGIN */
        if (
          mode ===
          "login"
        ) {

          await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

          alert(
            "Login Successful"
          );

          navigate("/");

        }

        /* USER REGISTER */
        else if (
          mode ===
          "register"
        ) {

          const userCredential =
            await createUserWithEmailAndPassword(
              auth,
              email,
              password
            );

          const user =
            userCredential.user;

          await setDoc(
            doc(
              db,
              "users",
              user.uid
            ),
            {

              uid:
                user.uid,

              name,

              email,

              phone,

              role:
                "user",

              photo:
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

              createdAt:
                new Date(),

            }
          );

          alert(
            "Registration Successful"
          );

          navigate("/");

        }

        /* ADMIN LOGIN */
        else {

          const userCredential =
            await signInWithEmailAndPassword(
              auth,
              email,
              password
            );

          const user =
            userCredential.user;

          const userRef =
            doc(
              db,
              "users",
              user.uid
            );

          const userSnap =
            await getDoc(
              userRef
            );

          if (
            userSnap.exists() &&
            userSnap.data()
              .role ===
              "admin"
          ) {

            alert(
              "Admin Login Successful"
            );

            navigate(
              "/admin"
            );

          } else {

            alert(
              "Unauthorized Admin Access"
            );

          }

        }

      } catch (
        error
      ) {

        console.log(
          error
        );

        alert(
          error.message
        );

      } finally {

        setLoading(false);

      }

    };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center p-5 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-10 left-10"></div>

      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* Main Card */}
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[40px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)] grid grid-cols-1 lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center p-16 text-white relative">

          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10"></div>

          <div className="relative z-10">

            {/* Logo */}
            <div className="flex items-center gap-4">

              <div className="bg-white/10 p-5 rounded-3xl border border-white/20">

                <FaPlaneDeparture className="text-5xl text-cyan-300" />

              </div>

              <div>

                <h1 className="text-5xl font-black tracking-wide">

                  TravelGo

                </h1>

                <p className="text-cyan-200 mt-2">

                  Luxury Travel Platform

                </p>

              </div>

            </div>

            {/* Headline */}
            <h2 className="mt-14 text-5xl font-black leading-tight">

              Discover
              <br />

              Your Dream
              <br />

              Destination ✈️

            </h2>

            <p className="mt-8 text-lg text-gray-300 leading-relaxed">

              Experience premium travel packages,
              luxury stays,
              unforgettable adventures and seamless bookings with TravelGo.

            </p>

            {/* Features */}
            <div className="mt-12 space-y-5">

              <div className="bg-white/10 border border-white/10 backdrop-blur-lg p-5 rounded-2xl">

                🌍 30+ International & Domestic Destinations

              </div>

              <div className="bg-white/10 border border-white/10 backdrop-blur-lg p-5 rounded-2xl">

                🏨 Luxury Hotels & Personalized Experiences

              </div>

              <div className="bg-white/10 border border-white/10 backdrop-blur-lg p-5 rounded-2xl">

                💳 Secure Razorpay Payments & Real-Time Bookings

              </div>

            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="bg-white p-8 md:p-14 flex flex-col justify-center">

          {/* Top Logo Mobile */}
          <div className="lg:hidden flex justify-center mb-10">

            <div className="bg-blue-600 p-5 rounded-3xl shadow-xl">

              <FaPlaneDeparture className="text-4xl text-white" />

            </div>

          </div>

          {/* Tabs */}
          <div className="bg-gray-100 p-2 rounded-3xl flex items-center gap-2 mb-10 shadow-inner">

            <button
              onClick={() =>
                setMode(
                  "login"
                )
              }
              className={`flex-1 py-4 rounded-2xl font-bold transition-all duration-300 ${
                mode ===
                "login"
                  ? "bg-blue-600 text-white shadow-lg scale-[1.02]"
                  : "text-gray-600"
              }`}
            >

              User Login

            </button>

            <button
              onClick={() =>
                setMode(
                  "register"
                )
              }
              className={`flex-1 py-4 rounded-2xl font-bold transition-all duration-300 ${
                mode ===
                "register"
                  ? "bg-blue-600 text-white shadow-lg scale-[1.02]"
                  : "text-gray-600"
              }`}
            >

              Register

            </button>

            <button
              onClick={() =>
                setMode(
                  "admin"
                )
              }
              className={`flex-1 py-4 rounded-2xl font-bold transition-all duration-300 ${
                mode ===
                "admin"
                  ? "bg-red-500 text-white shadow-lg scale-[1.02]"
                  : "text-gray-600"
              }`}
            >

              Admin

            </button>

          </div>

          {/* Title */}
          <div className="text-center">

            {mode ===
            "admin" ? (

              <div className="bg-red-100 text-red-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-lg">

                <FaUserShield className="text-5xl" />

              </div>

            ) : (

              <div className="bg-blue-100 text-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-lg">

                <FaPlaneDeparture className="text-5xl" />

              </div>

            )}

            <h2 className="text-4xl font-black mt-8">

              {mode ===
              "login"
                ? "Welcome Back"
                : mode ===
                  "register"
                ? "Create Account"
                : "Admin Login"}

            </h2>

            <p className="text-gray-500 mt-4 text-lg">

              {mode ===
              "admin"
                ? "Authorized company access only"
                : "Continue your luxury travel experience"}

            </p>

          </div>

          {/* Form */}
          <form
            onSubmit={
              handleSubmit
            }
            className="mt-10 space-y-6"
          >

            {/* Register Fields */}
            {mode ===
              "register" && (

              <>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) =>
                    setName(
                      e.target.value
                    )
                  }
                  className="w-full p-5 rounded-2xl border border-gray-300 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 shadow-sm"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value
                    )
                  }
                  className="w-full p-5 rounded-2xl border border-gray-300 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 shadow-sm"
                  required
                />
              </>
            )}

            {/* Email */}
            <input
              type="email"
              placeholder={
                mode ===
                "admin"
                  ? "Admin Email"
                  : "Email Address"
              }
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="w-full p-5 rounded-2xl border border-gray-300 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 shadow-sm"
              required
            />

            {/* Password */}
            <input
              type="password"
              placeholder={
                mode ===
                "admin"
                  ? "Admin Password"
                  : "Password"
              }
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="w-full p-5 rounded-2xl border border-gray-300 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 shadow-sm"
              required
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-5 rounded-2xl text-xl font-black text-white transition-all duration-300 shadow-2xl hover:scale-[1.02] ${
                mode ===
                "admin"
                  ? "bg-gradient-to-r from-red-500 to-pink-600"
                  : "bg-gradient-to-r from-blue-600 to-cyan-500"
              }`}
            >

              {loading
                ? "Please Wait..."
                : mode ===
                  "login"
                ? "Login"
                : mode ===
                  "register"
                ? "Create Account"
                : "Admin Login"}

            </button>

          </form>

          {/* Footer */}
          <div className="mt-10 text-center">

            <p className="text-gray-500">

              Secure Authentication Powered by Firebase 🔥

            </p>

            <Link
              to="/"
              className="inline-block mt-5 text-blue-600 font-bold hover:underline"
            >

              ← Back to Home

            </Link>

          </div>

        </div>

      </div>

    </div>

  );

};

export default AuthPage;