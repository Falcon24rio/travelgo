import { motion } from "framer-motion";
import { useState } from "react";

const Reviews = () => {

  const [reviews, setReviews] =
    useState([
      {
        name: "Rahul",
        rating: 5,
        message:
          "Amazing Goa trip experience!",
      },

      {
        name: "Priya",
        rating: 4,
        message:
          "Kashmir was beautiful ❤️",
      },
    ]);

  const [name, setName] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [rating, setRating] =
    useState(5);

  const handleSubmit = (e) => {

    e.preventDefault();

    const newReview = {
      name,
      message,
      rating,
    };

    setReviews([
      newReview,
      ...reviews,
    ]);

    setName("");

    setMessage("");

    setRating(5);

  };

  return (

    <motion.div
  initial={{
    opacity: 0,
    y: 100,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
  }}
  viewport={{
    once: true,
  }}
  className="max-w-6xl mx-auto mt-20"
>

      <h1 className="text-5xl font-bold text-center mb-10">

        Customer Reviews ⭐

      </h1>

      {/* Review Form */}
      <div className="bg-white p-10 rounded-3xl shadow-2xl">

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border p-4 rounded-2xl"
            required
          />

          <textarea
            placeholder="Write Review"
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            className="w-full border p-4 rounded-2xl h-32"
            required
          />

          <select
            value={rating}
            onChange={(e) =>
              setRating(e.target.value)
            }
            className="w-full border p-4 rounded-2xl"
          >

            <option value="5">
              ⭐⭐⭐⭐⭐
            </option>

            <option value="4">
              ⭐⭐⭐⭐
            </option>

            <option value="3">
              ⭐⭐⭐
            </option>

            <option value="2">
              ⭐⭐
            </option>

            <option value="1">
              ⭐
            </option>

          </select>

          <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-xl hover:bg-blue-700">

            Submit Review

          </button>

        </form>

      </div>

      {/* Reviews List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

        {reviews.map(
          (review, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-xl"
            >

              <h2 className="text-2xl font-bold">

                {review.name}

              </h2>

              <p className="text-yellow-500 text-xl mt-2">

                {"⭐".repeat(
                  review.rating
                )}

              </p>

              <p className="mt-4 text-gray-700">

                {review.message}

              </p>

            </div>

          )
        )}

      </div>

    </motion.div>

  );

};

export default Reviews;