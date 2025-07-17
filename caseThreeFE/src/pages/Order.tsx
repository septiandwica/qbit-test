import React, { useState, useEffect } from "react";
import axios from "axios";
import { createOrder } from "../api/order";

const Order: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: 1,
  });
  const [products, setProducts] = useState<string[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5038/api/products")
      .then((res) => {
        setProducts(res.data.map((p: any) => p.name));
        setLoadingProducts(false);
      })
      .catch(() => setLoadingProducts(false));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await createOrder({
        ...form,
        quantity: Number(form.quantity),
      });
      setSubmitted(true);
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          "Failed to submit order. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-orange-100 pt-28 pb-16">
      <section className="relative flex flex-col items-center justify-center py-16 px-6 max-w-7xl mx-auto">
        <div className="max-w-md w-full flex flex-col items-center">
          <div className="flex flex-col items-center mb-4">
            <h2 className="text-3xl font-extrabold text-orange-700 mb-1 tracking-wide">
              Order Donuts
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mb-2"></div>
            <p className="text-amber-700 text-center text-base lg:text-lg font-medium mb-2">
              Fill out the form below to order your favorite donuts!
            </p>
          </div>
          {submitted ? (
            <div className="text-green-600 text-center font-semibold py-8">
              Thank you! Your order has been received.
              <br />
              We will contact you soon for confirmation.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full bg-white/90 p-8 rounded-3xl shadow-2xl border border-orange-200 backdrop-blur-sm"
            >
              {error && (
                <div className="text-red-600 text-center font-semibold mb-4">
                  {error}
                </div>
              )}
              <div className="mb-5">
                <label className="block mb-1 font-semibold text-amber-800">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-amber-50/50 placeholder:text-amber-400"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-5">
                <label className="block mb-1 font-semibold text-amber-800">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-amber-50/50 placeholder:text-amber-400"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-5">
                <label className="block mb-1 font-semibold text-amber-800">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-amber-50/50 placeholder:text-amber-400"
                  placeholder="08xxxxxxxxxx"
                />
              </div>
              <div className="mb-5">
                <label className="block mb-1 font-semibold text-amber-800">
                  Product
                </label>
                <select
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  required
                  className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-amber-50/50 text-amber-800"
                  disabled={loadingProducts}
                >
                  <option value="">
                    {loadingProducts ? "Loading products..." : "Select product"}
                  </option>
                  {products.map((p, i) => (
                    <option key={i} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label className="block mb-1 font-semibold text-amber-800">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  min={1}
                  value={form.quantity}
                  onChange={handleChange}
                  required
                  className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-amber-50/50 placeholder:text-amber-400"
                  placeholder="Order quantity"
                />
              </div>
              <button
                type="submit"
                disabled={loading || loadingProducts}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-full font-bold shadow hover:from-orange-700 hover:to-amber-700 transition-all duration-200 mt-2 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg tracking-wide disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Order"}
              </button>
            </form>
          )}
        </div>
        <div className="flex flex-col gap-4 mt-8 w-full max-w-md mx-auto">
          <a
            href="https://maps.app.goo.gl/3NFEUn5ixpu1FwHv9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-orange-200 to-amber-200 text-orange-800 py-3 rounded-full font-bold shadow hover:from-orange-300 hover:to-amber-300 transition-all duration-200 text-center"
          >
            Find Our Outlet
          </a>
          <a
            href="https://gofood.co.id/jakarta/restaurant/donat-jepang-buevn-bakehouse-cikarang-timur-dace3927-8d3b-4b61-98eb-ee38b22b8960"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 text-white py-3 rounded-full font-bold shadow hover:bg-green-600 transition-all duration-200 text-center flex items-center justify-center gap-2"
          >
            <img
              src="/images/gofood-logo.jpg"
              alt="GoFood"
              className="h-6 w-6"
            />
            Order via GoFood
          </a>
        </div>
      </section>
    </div>
  );
};

export default Order;
