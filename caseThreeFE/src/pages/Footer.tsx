import React from "react";

const Footer: React.FC = () => (
  <div className=" border-t border-orange-100 w-full">
    <footer>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 py-10 px-4">
        <div className="flex-1 min-w-[200px] flex flex-col gap-3 mb-6 md:mb-0">
          <div className="flex items-center mb-2">
          <img src="/images/logo.png" alt="" width={80} />
            <span className="text-2xl font-bold text-orange-700">
            Buevn.co
            </span>
          </div>
          <div className="text-amber-700 text-sm">Japanese Authentic Donuts</div>
          <div className="text-amber-700 text-sm">info@buevndonuts.com</div>
          <div className="text-amber-700 text-sm">+62 812-3456-7890</div>
        </div>
        <div className="flex-1 min-w-[200px] flex flex-col gap-2 text-amber-800 font-medium mb-6 md:mb-0">
          <a href="/about" className="hover:text-orange-600 transition">
            About Us
          </a>
          <a href="/contact" className="hover:text-orange-600 transition">
            Contact Us
          </a>
          <a href="/product" className="hover:text-orange-600 transition">
            Product
          </a>
        </div>
        <div className="flex-1 min-w-[200px] flex flex-col items-start md:items-end gap-2">
          <div className="font-semibold text-orange-800 mb-2">
            Follow Us on Social Media
          </div>
          <div className="flex gap-3">
            <a
              href="https://instagram.com/buevnbakehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="inline-block"
              >
                <rect
                  width="18"
                  height="18"
                  x="3"
                  y="3"
                  rx="5"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="4" strokeWidth="2" />
                <circle cx="17" cy="7" r="1.2" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-orange-100 mt-6 p-4 text-center text-amber-700 text-xs">
        &copy; {new Date().getFullYear()} Buevn.co | All rights reserved.
      </div>
    </footer>
  </div>
);

export default Footer;
