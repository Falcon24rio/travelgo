const Contact = () => {

  return (

    <div className="bg-gray-100 min-h-screen pt-24 p-10">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left */}
        <div className="bg-white rounded-3xl shadow-2xl p-10">

          <h1 className="text-5xl font-bold mb-8">

            Contact Us

          </h1>

          <div className="space-y-6 text-lg">

            <p>

              📍 Kolkata, India

            </p>

            <p>

              📞 +91 6291719050

            </p>

            <p>

              📧 support@travelgo.com

            </p>

          </div>

        </div>

        {/* Right */}
        <div className="bg-white rounded-3xl shadow-2xl p-10">

          <h2 className="text-4xl font-bold mb-8">

            Send Message

          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-4 rounded-2xl"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-4 rounded-2xl"
            />

            <textarea
              placeholder="Your Message"
              className="w-full border p-4 rounded-2xl h-40"
            />

            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-xl hover:bg-blue-700">

              Send Message

            </button>

          </form>

        </div>

      </div>

    </div>

  );

};

export default Contact;