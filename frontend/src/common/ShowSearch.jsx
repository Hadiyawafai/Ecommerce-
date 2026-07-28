import React, { useContext } from 'react';
import { ShopContext } from '../context/Shopcontext';
import { X } from 'lucide-react';

const ShowSearch = () => {
  const {
    search,
    setSearch,
    setShowSearch,
  } = useContext(ShopContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClose = () => {
    setSearch('');
    setShowSearch(false);
  };

  return (
    <div className="flex justify-center py-4">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-lg"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full border-2 border-gray-300 rounded-full px-4 py-2 pr-10 outline-none focus:border-black transition"
        />

        {search && (
          <X
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black"
            onClick={handleClose}
          />
        )}
      </form>
    </div>
  );
};

export default ShowSearch;