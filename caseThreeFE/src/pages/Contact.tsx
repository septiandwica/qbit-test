import React from "react";

const Contact: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-orange-100 pt-28 pb-16">
    <section className="relative flex flex-col items-center justify-center py-16 px-6 max-w-7xl mx-auto">
      <div className="max-w-md w-full flex flex-col items-center">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-3xl font-extrabold text-orange-700 mb-1 tracking-wide">
            Contact
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mb-2"></div>
          <p className="text-amber-700 text-center text-base lg:text-lg font-medium mb-2">
            We are ready to help and hear your message!
            <br />
            Don't hesitate to contact us.
          </p>
        </div>
        <p className="mb-6 text-amber-700 text-center text-base lg:text-lg">
          Contact us at{" "}
          <a
            href="mailto:info@buevndonuts.com"
            className="text-orange-600 underline font-semibold hover:text-orange-800 transition"
          >
            info@buevndonuts.com
          </a>
        </p>
        <form className="w-full bg-white/90 p-8 rounded-3xl shadow-2xl border border-orange-200 backdrop-blur-sm">
          <div className="mb-5">
            <label className="block mb-1 font-semibold text-amber-800">
              Name
            </label>
            <input
              type="text"
              className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-amber-50/50 placeholder:text-amber-400"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-1 font-semibold text-amber-800">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-amber-50/50 placeholder:text-amber-400"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-semibold text-amber-800">
              Message
            </label>
            <textarea
              className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-amber-50/50 placeholder:text-amber-400"
              rows={4}
              placeholder="Write your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-full font-bold shadow hover:from-orange-700 hover:to-amber-700 transition-all duration-200 mt-2 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg tracking-wide"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  </div>
);

export default Contact;
