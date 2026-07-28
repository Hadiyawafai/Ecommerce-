import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ product, currency }) => {
  const navigate = useNavigate();

  return (
    <div className="w-60 border-2 border-black p-4 rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover"
      />

      <h2 className="font-bold mt-2">{product.name}</h2>

      <p className="text-sm text-gray-600">
        {product.description}
      </p>

      <p className="font-semibold mt-2">
        {currency}${product.price}
      </p>

      <button
        onClick={() => navigate(`/products/${product.id}`)}
        className="border-2 border-black bg-gray-300 text-black rounded-lg h-10 w-20"
      >
        Buy Now
      </button>
    </div>
  );
};

export default Card;