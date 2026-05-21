import {
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  setDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../firebase";

const Register = () => {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleRegister =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        /* Create User */
        const userCredential =
          await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

        const user =
          userCredential.user;

        /* Save User to Firestore */
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

            photo:
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",

            createdAt:
              new Date(),

          }
        );

        alert(
          "Registration Successful"
        );

        window.location.href =
          "/";

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

    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-5">

      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-blue-600 text-white p-8 text-center">

          <h1 className="text-4xl font-bold">

            Create Account

          </h1>

          <p className="mt-3 text-lg">

            Join TravelGo today

          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={
            handleRegister
          }
          className="p-8 space-y-6"
        >

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="w-full p-4 border rounded-2xl outline-none shadow-md"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full p-4 border rounded-2xl outline-none shadow-md"
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
            className="w-full p-4 border rounded-2xl outline-none shadow-md"
            required
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
            className="w-full p-4 border rounded-2xl outline-none shadow-md"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl text-xl font-bold hover:bg-blue-700 transition disabled:opacity-50"
          >

            {
              loading
                ? "Creating Account..."
                : "Register"
            }

          </button>

          <p className="text-center">

            Already have account?

            <Link
              to="/login"
              className="text-blue-600 ml-2 font-semibold"
            >

              Login

            </Link>

          </p>

        </form>

      </div>

    </div>

  );

};

export default Register;