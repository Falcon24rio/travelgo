import {
  useState,
} from "react";

import {
  FaRobot,
  FaPaperPlane,
} from "react-icons/fa";

const AITravelChat = () => {

  const [question, setQuestion] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [messages, setMessages] =
    useState([
      {

        role: "ai",

        text:
          "Hello 👋 I am TravelGo AI Assistant. Ask me anything about destinations, sightseeing, hotels, weather, budgets and trip planning ✈️",

      },
    ]);

  /* Ask AI */
  const askAI =
    async () => {

      if (
        !question.trim()
      )
        return;

      const userQuestion =
        question;

      /* Add User Message */
      setMessages(
        (prev) => [

          ...prev,

          {

            role: "user",

            text:
              userQuestion,

          },

        ]
      );

      setQuestion("");

      setLoading(true);

      try {

        const response =
          await fetch(

            "https://openrouter.ai/api/v1/chat/completions",

            {

              method: "POST",

              headers: {

                Authorization:
                  `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,

                "Content-Type":
                  "application/json",

              },

              body: JSON.stringify({

                model:

   "openrouter/auto",

                messages: [

                  {

                    role:
                      "system",

                    content: `

You are TravelGo AI,
a smart luxury travel assistant.

Help users with:
- travel destinations
- sightseeing
- hotels
- travel budget
- weather
- honeymoon trips
- family vacations
- local food
- transportation
- travel tips

Always answer professionally and clearly.

                    `,

                  },

                  {

                    role:
                      "user",

                    content:
                      userQuestion,

                  },

                ],

              }),

            }

          );

        const data =
          await response.json();

        console.log(
          "FULL RESPONSE:",
          data
        );

        const text =

          data?.choices?.[0]
            ?.message
            ?.content ||

          data?.error
            ?.message ||

          "⚠️ No response received.";

        /* Add AI Message */
        setMessages(
          (prev) => [

            ...prev,

            {

              role: "ai",

              text,

            },

          ]
        );

      } catch (
        error
      ) {

        console.log(
          error
        );

        setMessages(
          (prev) => [

            ...prev,

            {

              role: "ai",

              text:
                "❌ AI temporarily unavailable.",

            },

          ]
        );

      } finally {

        setLoading(false);

      }

    };

  return (
<div className="bg-gradient-to-br from-blue-950 via-blue-900 to-black rounded-[35px]
     overflow-hidden shadow-2xl border border-gray-200">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white flex items-center gap-4">

        <div className="bg-white/20 p-4 rounded-2xl">

          <FaRobot className="text-3xl" />

        </div>

        <div>

          <h2 className="text-3xl font-bold">

            TravelGo AI Assistant

          </h2>

          <p className="text-white/80 mt-1">

            Your smart travel companion ✈️

          </p>

        </div>

      </div>

      {/* Messages */}
      <div className="h-[500px] overflow-y-auto bg-white/5
       p-6 space-y-5">

        {messages.map(
          (msg, index) => (

            <div
              key={index}
              className={`max-w-[85%] p-5 rounded-3xl shadow-md whitespace-pre-wrap leading-relaxed ${
                msg.role ===
                "user"
                  ? "ml-auto bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                  : "bg-white/10 backdrop-blur-xl text-white border border-white/10"
              }`}
            >

              {msg.text}

            </div>

          )
        )}

        {/* Loading */}
        {loading && (

          <div className="bg-white p-5 rounded-3xl shadow-md w-fit">

            AI is typing...

          </div>

        )}

      </div>

      {/* Input */}
      <div className="p-5 border-t bg-white flex gap-4">

        <input
          type="text"
          value={question}
          onChange={(e) =>
            setQuestion(
              e.target.value
            )
          }
          onKeyDown={(e) => {

            if (
              e.key ===
              "Enter"
            ) {

              askAI();

            }

          }}
          placeholder="Ask about destinations, sightseeing, hotels..."
          className="flex-1 p-5 rounded-2xl border outline-none focus:border-red-500"
        />

        <button
          onClick={askAI}
          disabled={loading}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 rounded-2xl hover:scale-105 transition disabled:opacity-50 flex items-center justify-center"
        >

          <FaPaperPlane />

        </button>

      </div>

    </div>

  );

};

export default AITravelChat;