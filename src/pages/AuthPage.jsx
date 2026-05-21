import {
  useState,
} from "react";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  auth,
} from "../firebase";

const AuthPage = () => {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const [
    isLogin,
    setIsLogin,
  ] = useState(true);

  const [
    email,
    setEmail,
  ] = useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    error,
    setError,
  ] = useState("");

  const handleAuth =
    async (e) => {

      e.preventDefault();

      setLoading(true);

      setError("");

      try {

        if (isLogin) {

          await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

        } else {

          await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

        }

        navigate(
          location.state?.from
            ?.pathname ||
            "/"
        );

      } catch (err) {

        setError(
          err.message
        );

      }

      setLoading(false);

    };

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-black flex items-center justify-center px-5 py-20">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-[35px] p-8 shadow-2xl">

        {/* Heading */}
        <h1 className="text-4xl font-black text-center text-white">

          TravelGo

        </h1>

        <p className="text-center text-gray-300 mt-3">

          {isLogin
            ? "Login to continue your journey"
            : "Create your travel account"}

        </p>

        {/* Error */}
        {error && (

          <div className="bg-red-500/20 border border-red-500 text-red-200 p-4 rounded-2xl mt-6 text-sm">

            {error}

          </div>

        )}

        {/* Form */}
        <form
          onSubmit={
            handleAuth
          }
          className="mt-8 space-y-5"
        >

          {/* Email */}
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
            className="w-full p-4 rounded-2xl bg-white text-black placeholder-gray-500 outline-none"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full p-4 rounded-2xl bg-white text-black placeholder-gray-500 outline-none"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-2xl text-xl font-bold hover:scale-105 duration-300"
          >

            {loading
              ? "Please wait..."
              : isLogin
              ? "Login"
              : "Register"}

          </button>

        </form>

        {/* Toggle */}
        <div className="text-center mt-8 text-gray-300">

          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            onClick={() =>
              setIsLogin(
                !isLogin
              )
            }
            className="ml-2 text-cyan-400 font-bold"
          >

            {isLogin
              ? "Register"
              : "Login"}

          </button>

        </div>

      </div>

    </div>

  );

};

export default AuthPage;