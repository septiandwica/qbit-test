import React from "react";

export interface Donut {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  popular: boolean;
}

export interface DonutCardProps {
  donut: Donut;
  onAddToCart?: (donut: Donut) => void;
  handleImageError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const DonutCard: React.FC<DonutCardProps> = ({
  donut,
  onAddToCart,
  handleImageError,
}) => (
  <div
    className="bg-gradient-to-br from-amber-50 via-orange-50 to-orange-100 rounded-3xl overflow-hidden shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 group backdrop-blur-sm"
    style={{ boxShadow: "0 4px 24px 0 rgba(251, 191, 36, 0.10)" }}
  >
    {/* Image Container */}
    <div className="relative aspect-square overflow-hidden flex items-center justify-center bg-gradient-to-br from-orange-100 to-amber-100">
      <img
        src={donut.image}
        alt={donut.name}
        className="w-4/5 h-4/5 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-xl"
        onError={handleImageError}
      />
      {donut.popular && (
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow">
          Popular
        </div>
      )}
    </div>
    {/* Content */}
    <div className="p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold text-orange-700 tracking-wide drop-shadow-sm">
          {donut.name}
        </h3>
        <span className="text-xl font-bold text-amber-800 bg-orange-100 px-3 py-1 rounded-full shadow-sm">
          {donut.price}
        </span>
      </div>
      <p className="text-amber-700 text-sm mb-4 leading-relaxed flex-1">
        {donut.description}
      </p>
      {onAddToCart && (
        <button
          className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-full font-semibold shadow hover:from-amber-700 hover:to-orange-700 transition-all duration-200 mt-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onClick={() => onAddToCart(donut)}
        >
          Add to Cart
        </button>
      )}
    </div>
  </div>
);

export default DonutCard;
