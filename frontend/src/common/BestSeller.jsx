import React, { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";
import Card from "./Card";

const BestSeller = () => {
  const { products } = useContext(ShopContext);

  const bestSellerProducts = products.filter(
    (item) => item.bestseller === true
  );

  return (
    <section className="py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Best Sellers
        </h1>

        <div className="w-24 h-1 bg-black mx-auto mt-3 rounded"></div>

        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Discover our most loved products chosen by customers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {bestSellerProducts.slice(0, 3).map((item) => (
          <Card
            key={item._id}
            product={item}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSeller;