import React, { useState, useEffect, useRef } from "react";
import TestimonialCard from "../../components/TestimonialCard";
import { getTestimonials } from "../../api/testimonial";

interface Testi {
  name: string;
  text: string;
  avatar?: string;
}

function getSlideCount(width: number) {
  if (width < 640) return 1; // kembaliin card buat slider hanya berjumlah 1 ketika di mobile
  if (width < 1024) return 2; //  kembaliin card buat slider hanya berjumlah 2 ketika di tablet
  return 3; // dan ini di desktop
}

const Testimonial: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testi[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(
    getSlideCount(window.innerWidth)
  );
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    getTestimonials()
      .then((res) => {
        setTestimonials(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const totalSlides = Math.ceil(testimonials.length / slideCount);

  // Responsiveness
  useEffect(() => {
    const handleResize = () => {
      setSlideCount(getSlideCount(window.innerWidth));
      setIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, totalSlides]);

  // Slide data
  const getSlideData = () => {
    const start = index * slideCount;
    return testimonials.slice(start, start + slideCount);
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="pt-28 pb-16">
      <section className="relative flex flex-col items-center justify-center py-16 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            Testimonial
          </h2>
          <p className="text-amber-700 max-w-xl mx-auto text-base lg:text-lg">
            Stories from our customers about their experience enjoying Japanese
            donuts from Buevn Bakehouse.
          </p>
        </div>
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex gap-8 justify-center items-stretch overflow-x-auto scroll-smooth snap-x snap-mandatory">
            {getSlideData().map((t, i) => (
              <TestimonialCard
                key={i}
                name={t.name}
                text={t.text}
                avatar={t.avatar}
              />
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-orange-600" : "bg-amber-200"
                } border border-orange-400`}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
