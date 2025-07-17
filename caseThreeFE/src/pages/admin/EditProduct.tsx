import React, { useEffect, useState } from "react";
import { getProductById, updateProduct } from "../../api/products";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    popular: false,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getProductById(id!)
      .then((res) => {
        setForm(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch product");
        setLoading(false);
      });
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccess("");
    setError("");
    try {
      await updateProduct(id!, form);
      setSuccess("Product updated successfully!");
      setTimeout(() => navigate("/product"), 1200);
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          "Failed to update product. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-orange-100 pt-28 pb-16 px-4">
      <div className="max-w-lg mx-auto bg-white/90 rounded-3xl shadow-2xl border border-orange-200 p-8">
        <h2 className="text-3xl font-extrabold text-orange-700 mb-6 tracking-wide text-center">
          Edit Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {success && (
            <div className="text-green-600 text-center font-semibold">
              {success}
            </div>
          )}
          {error && (
            <div className="text-red-600 text-center font-semibold">
              {error}
            </div>
          )}
          <div>
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
              placeholder="Product name"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-amber-800">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={3}
              className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-amber-50/50 placeholder:text-amber-400"
              placeholder="Product description"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-amber-800">
              Price
            </label>
            <input
              type="text"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
              className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-amber-50/50 placeholder:text-amber-400"
              placeholder="e.g. 12K"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-amber-800">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              required
              className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 bg-amber-50/50 placeholder:text-amber-400"
              placeholder="/images/donuts1.png"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="popular"
              checked={form.popular}
              onChange={handleChange}
              className="accent-orange-600 w-5 h-5"
            />
            <label className="text-amber-800 font-medium">
              Popular Product
            </label>
          </div>
          <button
            type="submit"
            disabled={saving}
            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-full font-bold shadow hover:from-amber-700 hover:to-orange-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg tracking-wide disabled:opacity-60"
          >
            {saving ? "Saving..." : "Update Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
