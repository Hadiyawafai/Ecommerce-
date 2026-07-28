import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShopContext } from "../../context/Shopcontext";

const Products = () => {
  const { productId } = useParams();

  const { products, addToCart } = useContext(ShopContext);

  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(productId)
  );

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-red-500">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <div className="grid md:grid-cols-2 gap-10 bg-white rounded-xl shadow-lg p-8">

        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">

          <p className="text-blue-600 font-semibold text-lg">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {product.name}
          </h1>

          <p className="text-3xl text-green-600 font-bold mt-5">
            ₹{product.price}
          </p>

          <p className="text-gray-600 mt-6 leading-7">
            {product.description}
          </p>

          <div className="mt-8 space-y-2">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </p>

            <p>
              <span className="font-semibold">Sub Category:</span>{" "}
              {product.subCategory}
            </p>
          </div>

          <div className="flex gap-4 mt-10">

            <button
              onClick={() => {
                addToCart(product.id);
                navigate("/cart");
              }}
              className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>

            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Buy Now
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Products;