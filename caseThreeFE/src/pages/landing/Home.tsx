import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const donutImages = [
  "/images/donuts1.png",
  "/images/donuts2.png",
  "/images/donuts3.png",
];

const Home: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  // slider untuk hero section setting auto 3s
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % donutImages.length);
    }, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  // Handle drag
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };
  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current || startX.current === null) return;
    const diff = e.clientX - startX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        // Next
        setCurrent((prev) => (prev + 1) % donutImages.length);
      } else {
        // Prev
        setCurrent(
          (prev) => (prev - 1 + donutImages.length) % donutImages.length
        );
      }
    }
    isDragging.current = false;
    startX.current = null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full">
                  <span className="text-amber-800 text-sm font-medium">
                    🍩 Authentic Japanese Donuts
                  </span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
                  Taste the
                  <span className="block text-orange-700">Authentic</span>
                  <span className="block">Japanese Donuts</span>
                </h1>
                <p className="text-lg text-amber-700 leading-relaxed max-w-lg">
                  Experience the perfect blend of traditional Japanese baking
                  techniques with modern flavors. Each bite tells a story of
                  craftsmanship and dedication.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/order"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-4xl font-semibold hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
                >
                  Order Now
                </Link>
                <Link
                  to="/product"
                  className="border-2 border-amber-600 text-amber-600 px-6 py-2 rounded-4xl font-semibold hover:bg-amber-600 hover:text-white transition-all duration-200 text-center"
                >
                  Find Taste
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center items-center">
              <div className="relative z-10 w-full max-w-lg mx-auto select-none">
                <div
                  className="relative rounded-full p-8 flex items-center justify-center cursor-pointer"
                  onPointerDown={handlePointerDown}
                  onPointerUp={handlePointerUp}
                  style={{ touchAction: "pan-x" }}
                >
                  <img
                    src={donutImages[current]}
                    alt="Donuts"
                    className="w-96 h-96 object-contain drop-shadow-xl lg:w-[500px] lg:h-[500px] transition-all duration-500"
                    draggable={false}
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {donutImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`focus:outline-none rounded-full border-2 transition-all duration-200 ${
                          idx === current
                            ? "border-orange-600 scale-110"
                            : "border-amber-200 opacity-70"
                        }`}
                        style={{ padding: 0 }}
                      >
                        <img
                          src={img}
                          alt={`Donut ${idx + 1}`}
                          className={`w-8 h-8 object-contain rounded-full ${
                            idx === current ? "" : "grayscale"
                          }`}
                          draggable={false}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-amber-300 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-2xl">🍩</span>
                </div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-orange-300 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-2xl">🥖</span>
                </div>
                <div className="absolute top-1/2 right-0 w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-300 -translate-y-1/2 translate-x-1/2">
                  <span className="text-lg">🍞</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
