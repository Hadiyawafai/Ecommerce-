import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const PlaceOrder = () => {
  const location = useLocation();

  const { subtotal, total } = location.state;

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    address: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
    console.log("Subtotal:", subtotal);
    console.log("Total:", total);

    alert("Order Placed Successfully");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Place Order</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={form.first_name}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={form.last_name}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={form.pincode}
          onChange={handleChange}
          className="border p-2 w-full"
        />

        <div className="border rounded p-4 bg-gray-100">
          <h2 className="text-xl font-bold mb-2">Order Summary</h2>

          <p>
            <strong>Subtotal:</strong> ₹{subtotal}
          </p>

          <p>
            <strong>Total:</strong> ₹{total}
          </p>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PlaceOrder;