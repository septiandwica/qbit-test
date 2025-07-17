import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionNav = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") {
      sessionStorage.setItem("scrollToSection", sectionId);
      navigate("/");
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50">
      <nav className="bg-amber-50/80 backdrop-blur-md border-b border-amber-100 fixed w-full top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center flex-shrink-0">
              <img src="/images/logo.png" alt="" width={80} />
              <div>
                <div className="text-2xl font-bold text-amber-800 tracking-wide">
                  Buevn.co
                </div>
              </div>
            </div>

            <div className="hidden md:flex flex-1 justify-center">
              <ul className="flex items-center space-x-10">
                <li>
                  <a
                    href="#home"
                    className="text-amber-800 hover:text-orange-700 font-medium text-sm tracking-wide transition-colors duration-200 relative group"
                    onClick={handleSectionNav("home")}
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-700 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <Link
                    to="/product"
                    className="text-amber-800 hover:text-orange-700 font-medium text-sm tracking-wide transition-colors duration-200 relative group"
                  >
                    Products
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-700 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-amber-800 hover:text-orange-700 font-medium text-sm tracking-wide transition-colors duration-200 relative group"
                  >
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-700 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="text-amber-800 hover:text-orange-700 font-medium text-sm tracking-wide transition-colors duration-200 relative group"
                  >
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-700 transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden md:flex flex-shrink-0">
              <Link
                to="/order"
                className="ml-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full font-semibold shadow hover:from-amber-700 hover:to-orange-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                style={{ minWidth: 120 }}
              >
                Order Now
              </Link>
            </div>

            <button
              className="md:hidden ml-auto flex items-center text-amber-800 hover:text-orange-700 focus:outline-none transition-colors duration-200"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-amber-50/95 backdrop-blur-md border-t border-amber-100">
            <ul className="flex flex-col px-6 py-4 space-y-1">
              <li>
                <a
                  href="#home"
                  className="block text-amber-800 hover:text-orange-700 font-medium text-sm tracking-wide py-3 transition-colors duration-200"
                  onClick={handleSectionNav("home")}
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to="/product"
                  className="block text-amber-800 hover:text-orange-700 font-medium text-sm tracking-wide py-3 transition-colors duration-200"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block text-amber-800 hover:text-orange-700 font-medium text-sm tracking-wide py-3 transition-colors duration-200"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-amber-800 hover:text-orange-700 font-medium text-sm tracking-wide py-3 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="px-6 pb-4">
              <Link
                to="/order"
                className="block w-full text-center bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-full font-semibold shadow hover:from-amber-700 hover:to-orange-700 transition-all duration-200 mt-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
