import React, { useEffect, useState } from "react";
import DonutCard, { type Donut } from "../components/DonutCard";
import { getProducts } from "../api/products";

const Products: React.FC = () => {
  const [donuts, setDonuts] = useState<Donut[]>([]);
  const [loading, setLoading] = useState(true);

  // fetch data products dari api pakai axios
  useEffect(() => {
    getProducts()
      .then((res) => {
        setDonuts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-amber-100/30 pt-28 pb-16">
      <section className="relative flex flex-col items-center justify-center py-8 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            Our Product
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Enjoy all our Japanese donuts, made fresh every day!
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
      </section>
    </div>
  );
};

export default Products;
