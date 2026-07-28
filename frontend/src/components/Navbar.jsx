import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import myntra from "../assets/myntra.jpg";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-4 font-serif relative">
      {/* Logo */}
      <img
        src={myntra}
        alt="Myntra Logo"
        className="w-16 h-16 md:w-20 md:h-20"
      />

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6">
        <NavLink to="/" className={({ isActive }) => (isActive ? "border-b-2 pb-1" : "")}>
          Home
        </NavLink>

        <NavLink
          to="/collections"
          className={({ isActive }) => (isActive ? "border-b-2 pb-1" : "")}
        >
          Collection
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "border-b-2 pb-1" : "")}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "border-b-2 pb-1" : "")}
        >
          Contact
        </NavLink>
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex gap-4 items-center relative">
        <Search
          size={20}
          className="cursor-pointer"
          onClick={() => setShow(true)}
        />

        {show && (
          <form
            onSubmit={handleSubmit}
            className="absolute top-10 right-20"
          >
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-72 border border-gray-300 rounded-full px-4 py-2 pr-10 outline-none focus:border-black"
              />

              <X
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => {
                  setShow(false);
                  setSearch("");
                }}
              />
            </div>
          </form>
        )}

        <User
          size={20}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />

        <ShoppingCart size={20} />

        {open && (
          <div className="absolute top-8 right-0 bg-white shadow-lg rounded-md p-3 flex flex-col gap-2 min-w-[140px]">
            <Link to="/profile">My Profile</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/logout">Logout</Link>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        {mobileOpen ? (
          <X
            size={24}
            className="cursor-pointer"
            onClick={() => setMobileOpen(false)}
          />
        ) : (
          <Menu
            size={24}
            className="cursor-pointer"
            onClick={() => setMobileOpen(true)}
          />
        )}
      </div>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col gap-4 p-5 md:hidden">
          <NavLink to="/" onClick={() => setMobileOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/collections" onClick={() => setMobileOpen(false)}>
            Collection
          </NavLink>

          <NavLink to="/about" onClick={() => setMobileOpen(false)}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={() => setMobileOpen(false)}>
            Contact
          </NavLink>

          <hr />

          <div className="flex gap-4">
            <Search size={20} />
            <User size={20} />
            <ShoppingCart size={20} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;