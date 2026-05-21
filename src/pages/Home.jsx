import { Link } from "react-router-dom";

import {
  FaPlaneDeparture,
  FaRobot,
  FaGlobeAsia,
  FaHotel,
  FaMapMarkedAlt,
  FaStar,
} from "react-icons/fa";

import AITravelChat from "../components/AITravelChat";

const Home = () => {

  return (

    <div className="bg-gray-950 text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-black px-6 md:px-16 lg:px-24 flex items-center relative overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>

        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-400/20 px-6 py-3 rounded-full mb-8">

              <FaPlaneDeparture className="text-cyan-400 text-xl" />

              <span className="text-cyan-300 font-semibold">

                Premium AI Travel Platform

              </span>

            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight">

              Explore The{" "}

              <span className="text-cyan-400">

                World

              </span>

              <br />

              With TravelGo

            </h1>

            <p className="text-gray-300 text-lg md:text-2xl mt-8 leading-relaxed max-w-3xl">

              Discover luxury destinations,
              premium travel experiences,
              breathtaking adventures and
              unforgettable memories with
              the power of AI travel
              planning.

            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-12">

              <Link
                to="/packages"
                className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl"
              >

                Explore Packages

              </Link>

    

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16">

              <div>

                <h2 className="text-4xl font-black text-cyan-400">

                  500+

                </h2>

                <p className="text-gray-400 mt-2">

                  Destinations

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-cyan-400">

                  10K+

                </h2>

                <p className="text-gray-400 mt-2">

                  Happy Travelers

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-cyan-400">

                  4.9★

                </h2>

                <p className="text-gray-400 mt-2">

                  Ratings

                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Travel"
              className="rounded-[40px] shadow-2xl object-cover h-[650px] w-full border border-white/10"
            />

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">

              <div className="flex items-center gap-4">

                <div className="bg-cyan-500 p-4 rounded-2xl">

                  <FaMapMarkedAlt className="text-2xl" />

                </div>

                <div>

                  <h3 className="text-2xl font-bold">

                    Bali, Indonesia

                  </h3>

                  <p className="text-gray-300">

                    Trending Destination

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-28 px-6 md:px-16 lg:px-24 bg-gray-950">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black">

              Why Choose{" "}

              <span className="text-cyan-400">

                TravelGo

              </span>

            </h2>

            <p className="text-gray-400 mt-6 text-xl">

              Experience next-generation
              travel planning powered by AI.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-[30px] hover:-translate-y-3 transition duration-300">

              <FaRobot className="text-5xl text-cyan-400 mb-6" />

              <h3 className="text-2xl font-bold mb-4">

                AI Travel Assistant

              </h3>

              <p className="text-gray-400 leading-relaxed">

                Smart AI chatbot helping
                with destinations, hotels,
                budgets and sightseeing.

              </p>

            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[30px] hover:-translate-y-3 transition duration-300">

              <FaHotel className="text-5xl text-cyan-400 mb-6" />

              <h3 className="text-2xl font-bold mb-4">

                Luxury Hotels

              </h3>

              <p className="text-gray-400 leading-relaxed">

                Discover premium hotels and
                luxury stays across the
                globe.

              </p>

            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[30px] hover:-translate-y-3 transition duration-300">

              <FaGlobeAsia className="text-5xl text-cyan-400 mb-6" />

              <h3 className="text-2xl font-bold mb-4">

                Global Tours

              </h3>

              <p className="text-gray-400 leading-relaxed">

                Explore international and
                domestic destinations with
                ease.

              </p>

            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[30px] hover:-translate-y-3 transition duration-300">

              <FaStar className="text-5xl text-cyan-400 mb-6" />

              <h3 className="text-2xl font-bold mb-4">

                Premium Experience

              </h3>

              <p className="text-gray-400 leading-relaxed">

                Enjoy personalized luxury
                experiences and unforgettable
                adventures.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* AI CHAT SECTION */}
      <section className="py-28 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-950 to-blue-950">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-black">

              AI Powered{" "}

              <span className="text-cyan-400">

                Travel Planner

              </span>

            </h2>

            <p className="text-gray-400 text-xl mt-6">

              Ask anything about travel,
              sightseeing, hotels, weather,
              budgets and trip planning.

            </p>

          </div>

          <AITravelChat />

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-10 text-center text-gray-400">

        <h2 className="text-3xl font-black text-white">

          TravelGo

        </h2>

        <p className="mt-4">

          © 2026 TravelGo. All Rights Reserved.

        </p>

      </footer>

    </div>

  );

};

export default Home;