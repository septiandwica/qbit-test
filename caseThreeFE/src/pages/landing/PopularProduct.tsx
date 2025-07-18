import React, { useEffect, useState } from "react";
import DonutCard, { type Donut } from "../../components/DonutCard";
import { Link } from "react-router-dom";
import { getPopularProducts } from "../../api/popularProducts";

const PopularProduct: React.FC = () => {
  const [donuts, setDonuts] = useState<Donut[]>([]);
  const [loading, setLoading] = useState(true);

  // fetch data product tertama yang popular dari api pakai axios
  useEffect(() => {
    getPopularProducts()
      .then(setDonuts)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-amber-100/30 pt-28 pb-16">
      <section className="relative flex flex-col items-center justify-center py-8 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            Popular Product
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Enjoy our most favorite and best-selling Japanese donuts, made fresh
            every day with premium ingredients!
          </p>
        </div>
        <div className="w-full max-w-6xl mx-auto pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donuts.map((donut) => (
              <DonutCard
                key={donut.id}
                donut={donut}
                handleImageError={(e) =>
                  ((e.target as HTMLImageElement).src = "/images/donuts1.png")
                }
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/product"
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow hover:from-amber-700 hover:to-orange-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg tracking-wide"
          >
            More Product
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PopularProduct;
