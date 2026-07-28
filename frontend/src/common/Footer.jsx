import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              ShopEase
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Your one-stop destination for fashion, electronics,
              and lifestyle products. Quality products at the
              best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/collection" className="hover:text-white transition">
                  Collection
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Us
            </h3>

            <div className="space-y-2">
              <p>Email: support@shopease.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: New Delhi, India</p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ShopEase. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;