import React from "react";

interface TestimonialCardProps {
  name: string;
  text: string;
  avatar?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  text,
  avatar,
}) => (
  <div
    className="bg-gradient-to-br from-amber-50 via-orange-50 to-orange-100 rounded-3xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 group backdrop-blur-sm p-7 flex-1 flex flex-col items-center text-center min-w-[250px] max-w-xs mx-auto snap-center"
    style={{ boxShadow: "0 4px 24px 0 rgba(251, 191, 36, 0.10)" }}
  >
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-200 to-amber-100 flex items-center justify-center mb-5 text-2xl shadow-lg border-2 border-orange-200">
      {avatar ? (
        <img
          src={avatar}
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <span>🍩</span>
      )}
    </div>
    <blockquote className="italic text-amber-800 mb-3 text-base leading-relaxed">
      "{text}"
    </blockquote>
    <div className="text-sm text-orange-700 font-bold mt-2 tracking-wide bg-orange-100 px-3 py-1 rounded-full shadow-sm">
      {name}
    </div>
  </div>
);

export default TestimonialCard;
