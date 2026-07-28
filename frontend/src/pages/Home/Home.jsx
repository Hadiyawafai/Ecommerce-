import React, { useContext } from "react";
import one from "../../assets/one.jpg";
import { ShopContext } from "../../context/Shopcontext";
import Card from "../../common/Card";
import { Link } from "react-router-dom";
import Footer from "../../common/Footer";
import BestSeller from "../../common/BestSeller";
import Letterbox from "../../common/Letterbox";

const Home = () => {
  const {products}=useContext(ShopContext)
  return (
    <div className="px-6 py-10">

      {/* Bestseller Banner */}
      <div className="max-w-4xl mx-auto border-2 border-black rounded-lg py-4 text-center text-xl font-semibold font-serif shadow-md">
        Our Bestsellers
      </div>

      {/* Latest Arrivals Section */}
      <div className="max-w-5xl mx-auto mt-12 border-2 border-black rounded-xl p-8 shadow-lg flex flex-col md:flex-row items-center gap-8">

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Latest Arrivals
          </h2>

          <p className="text-gray-600 text-lg">
            Discover our newest collection featuring trendy styles,
            premium quality, and exclusive designs made just for you.
          </p>

          <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:scale-105 transition">
            Shop Now
          </button>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={one}
            alt="Latest Arrivals"
            className="w-full h-[350px] object-cover rounded-xl shadow-md"
          />
        </div>

      </div >
      <Link to='/products' className="flex justify-end text-2xl font-serif relative top-5 hover:text-gray-700">view all pieces</Link>
        <div className="flex flex-wrap gap-6 mt-6 px-50">
      {products.slice(0, 3).map((item) => (
      <Card
      key={item.id}
      product={item}
    />
  ))}
</div>
<BestSeller/>
<Letterbox/>
<Footer/>
    </div>
  );
};

export default Home;