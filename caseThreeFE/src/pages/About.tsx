import React from "react";

// data dummy untuk values dari BuildEnvironment.co
const values = [
  {
    icon: "🍩",
    title: "Authentic Japanese",
    desc: "Original Japanese recipe, soft texture and unique taste you won't find in regular donuts.",
  },
  {
    icon: "🥇",
    title: "Premium Ingredients",
    desc: "We use only high-quality selected ingredients, no preservatives, always fresh every day.",
  },
  {
    icon: "👩‍🍳",
    title: "Handmade",
    desc: "Every donut is handmade by experienced bakers, crafted with dedication and love.",
  },
  {
    icon: "💡",
    title: "Innovative",
    desc: "A blend of classic and modern flavors, always bringing new and exciting varieties.",
  },
];

const About: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-orange-100 pt-28 pb-16">
    <section className="relative flex flex-col items-center justify-center py-16 px-6 max-w-7xl mx-auto">
      <div className="max-w-2xl w-full flex flex-col items-center mb-12">
        <h2 className="text-3xl font-extrabold text-orange-700 mb-1 tracking-wide">
          About Us
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mb-2"></div>
        <p className="text-amber-700 text-center text-base lg:text-lg font-medium mb-2">
          Buevn Bakehouse is a bakery specializing in authentic Japanese donuts
          in Indonesia. Established in 2023, our mission is to bring a new
          experience of enjoying donuts that are soft, light, and full of
          flavor.
        </p>
      </div>
      <div className="max-w-3xl w-full bg-white/90 p-8 rounded-3xl shadow-2xl border border-orange-200 backdrop-blur-sm mb-12">
        <h3 className="text-2xl font-bold text-orange-700 mb-3">Our Story</h3>
        <p className="text-amber-800 mb-4">
          Born from a passion for Japanese culture and baking, we crafted a
          donut recipe that combines traditional Japanese techniques with a
          modern touch. Every donut is handmade, preservative-free, and always
          fresh every day.
        </p>
        <h3 className="text-xl font-bold text-orange-600 mb-2 mt-6">Vision</h3>
        <p className="text-amber-800 mb-4">
          To become the pioneer of authentic Japanese donuts in Indonesia, loved
          by everyone.
        </p>
        <h3 className="text-xl font-bold text-orange-600 mb-2 mt-6">Mission</h3>
        <ul className="list-disc pl-6 text-amber-800 space-y-1">
          <li>
            Deliver premium quality donuts with authentic and innovative
            flavors.
          </li>
          <li>
            Provide friendly service and a delightful experience for every
            customer.
          </li>
          <li>Continuously innovate with new flavors and bakery products.</li>
        </ul>
      </div>
      <div className="w-full max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-orange-700 mb-8 text-center">
          Our Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-amber-50 via-orange-50 to-orange-100 rounded-3xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 group backdrop-blur-sm p-7 flex flex-col items-center text-center"
              style={{ boxShadow: "0 4px 24px 0 rgba(251, 191, 36, 0.10)" }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-200 to-amber-100 flex items-center justify-center mb-5 text-3xl shadow-lg border-2 border-orange-200">
                <span>{v.icon}</span>
              </div>
              <div className="text-lg font-bold text-orange-700 mb-2">
                {v.title}
              </div>
              <div className="text-amber-800 text-sm">{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
