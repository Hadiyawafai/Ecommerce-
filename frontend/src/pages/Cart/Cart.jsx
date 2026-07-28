import React, { useContext } from "react";
import { ShopContext } from "../../context/Shopcontext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const {
    products,
    cartItems,
    currency,
    delivery_fee,
    addToCart,
    removeFromCart,
  } = useContext(ShopContext);

  // Calculate Subtotal
  let subtotal = 0;

  products.forEach((item) => {
    if (cartItems[item.id]) {
      subtotal = subtotal + item.price * cartItems[item.id];
    }
  });

  const total = subtotal + delivery_fee;

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Shopping Cart
      </h1>

      {products.map((item) => {

        if (!cartItems[item.id]) return null;

        return (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-5"
          >

            {/* Product */}

            <div className="flex items-center gap-4">

              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover"
              />

              <div>
                <h2 className="text-lg font-semibold">
                  {item.name}
                </h2>

                <p>
                  {currency}
                  {item.price}
                </p>
              </div>

            </div>

            {/* Quantity */}

            <div className="flex items-center gap-3">

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-gray-300 px-3 py-1 rounded"
              >
                -
              </button>

              <span className="text-lg font-semibold">
                {cartItems[item.id]}
              </span>

              <button
                onClick={() => addToCart(item.id)}
                className="bg-gray-300 px-3 py-1 rounded"
              >
                +
              </button>

            </div>

            {/* Item Total */}

            <div className="font-bold">
              {currency}
              {item.price * cartItems[item.id]}
            </div>

          </div>
        );
      })}

      {/* Cart Total */}

      <div className="mt-8 border-t pt-5 flex flex-col items-end">

        <p className="mb-2">
          <span className="font-semibold">Subtotal:</span> {currency}
          {subtotal}
        </p>

        <p className="mb-2">
          <span className="font-semibold">Delivery Fee:</span> {currency}
          {delivery_fee}
        </p>

        <h2 className="text-2xl font-bold">
          Total: {currency}
          {total}
        </h2>

      </div>

      {/* Buy Now Button */}

       <div className="mt-8 text-center">
        <button
          onClick={() =>
            navigate("/place-order", {
              state: {
                subtotal,
                total,
              },
            })
          }
          className="bg-black text-white px-8 py-3 rounded"
        >
          Buy Now
        </button>
      </div>

    </div>
  );
};

export default Cart;