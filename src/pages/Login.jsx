import { useState } from "react";

import {
  Link,
} from "react-router-dom";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  auth,
} from "../firebase";

const Login = () => {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin =
    async (e) => {

      e.preventDefault();

      try {

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        localStorage.setItem(
          "travelgoLoggedIn",
          "true"
        );

        alert(
          "Login Successful"
        );

        window.location.href =
  "/";

      } catch (error) {

        alert(
          error.message
        );

      }

    };

  return (

    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-5">

      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden">

        <div className="bg-blue-600 text-white p-8 text-center">

          <h1 className="text-4xl font-bold">

            Welcome Back

          </h1>

        </div>

        <form
          onSubmit={
            handleLogin
          }
          className="p-8 space-y-6"
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full p-4 border rounded-2xl"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full p-4 border rounded-2xl"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-2xl text-xl font-bold"
          >

            Login

          </button>

          <p className="text-center">

            Don’t have account?

            <Link
              to="/register"
              className="text-blue-600 ml-2"
            >

              Register

            </Link>

          </p>

        </form>

      </div>

    </div>

  );

};
export default Login;