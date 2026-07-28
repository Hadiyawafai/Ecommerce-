import React, { useContext, useMemo, useState } from "react";
import { ShopContext } from "../../context/Shopcontext";
import { useNavigate } from "react-router-dom";

const Collections = () => {
  const { products, search, addToCart } = useContext(ShopContext);

  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("default");

  // Handle category selection
  const handleCategoryChange = (e) => {
    const value = e.target.value;

    if (category.includes(value)) {
      setCategory(category.filter((item) => item !== value));
    } else {
      setCategory([...category, value]);
    }
  };

  // Filter + Search + Sort
  const filteredProducts = useMemo(() => {
    let items = [...products];

    // Category Filter
    if (category.length > 0) {
      items = items.filter((item) =>
        category.includes(item.category)
      );
    }

    // Search Filter
    if (search.trim() !== "") {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase().trim())
      );
    }

    // Sorting
    if (sortType === "low-high") {
      items.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      items.sort((a, b) => b.price - a.price);
    }

    return items;
  }, [products, category, search, sortType]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 px-8 py-8 bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-white rounded-xl shadow-md p-6 h-fit">
        <h2 className="text-2xl font-bold border-b pb-3 mb-5">
          Filters
        </h2>

        <p className="font-semibold text-lg mb-4">Categories</p>

        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              value="Men"
              checked={category.includes("Men")}
              onChange={handleCategoryChange}
            />
            Men
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              value="Women"
              checked={category.includes("Women")}
              onChange={handleCategoryChange}
            />
            Women
          </label>

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              value="Kids"
              checked={category.includes("Kids")}
              onChange={handleCategoryChange}
            />
            Kids
          </label>
        </div>
      </div>

      {/* Products */}
      <div className="flex-1">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            All Collections
          </h1>

          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="border px-4 py-2 rounded-lg"
          >
            <option value="default">Default</option>
            <option value="low-high">Price Low → High</option>
            <option value="high-low">Price High → Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filteredProducts.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-4">

                <h2 className="text-lg font-semibold">
                  {item.name}
                </h2>

                <p className="text-xl text-blue-600 font-bold mt-2">
                  ₹{item.price}
                </p>

                <p className="mt-2">
                  {item.category}
                </p>

                <div className="flex gap-3 mt-5">

                  <button
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="flex-1 bg-black text-white py-2 rounded-lg"
                  >
                    Buy Now
                  </button>

                  <button
                    onClick={() => {
                      addToCart(item.id);
                      navigate("/cart");
                    }}
                    className="flex-1 border-2 border-black py-2 rounded-lg hover:bg-black hover:text-white"
                  >
                    Add to Cart
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Collections;