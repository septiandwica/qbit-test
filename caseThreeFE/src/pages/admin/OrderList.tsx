import React, { useEffect, useState } from "react";
import { getOrders } from "../../api/order";

interface Order {
  id: number;
  name: string;
  email: string;
  phone: string;
  product: string;
  quantity: number;
  createdAt: string;
}

const OrderList: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getOrders()
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch orders");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-orange-100 pt-28 pb-16 px-4">
      <div className="max-w-5xl mx-auto bg-white/90 rounded-3xl shadow-2xl border border-orange-200 p-8">
        <h2 className="text-3xl font-extrabold text-orange-700 mb-6 tracking-wide text-center">
          Order List
        </h2>
        {loading ? (
          <div className="text-center py-8 text-amber-700">Loading...</div>
        ) : error ? (
          <div className="text-center py-8 text-red-600">{error}</div>
        ) : orders.length === 0 ? (
          <div className="text-center py-8 text-amber-700">
            No orders found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-orange-100 rounded-xl overflow-hidden">
              <thead className="bg-gradient-to-r from-amber-200 to-orange-200">
                <tr>
                  <th className="px-4 py-2 text-left text-orange-800 font-bold">
                    No
                  </th>
                  <th className="px-4 py-2 text-left text-orange-800 font-bold">
                    Name
                  </th>
                  <th className="px-4 py-2 text-left text-orange-800 font-bold">
                    Email
                  </th>
                  <th className="px-4 py-2 text-left text-orange-800 font-bold">
                    Phone
                  </th>
                  <th className="px-4 py-2 text-left text-orange-800 font-bold">
                    Product
                  </th>
                  <th className="px-4 py-2 text-left text-orange-800 font-bold">
                    Quantity
                  </th>
                  <th className="px-4 py-2 text-left text-orange-800 font-bold">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, i) => (
                  <tr
                    key={order.id}
                    className="border-b border-orange-100 hover:bg-orange-50/50"
                  >
                    <td className="px-4 py-2 text-amber-800">{i + 1}</td>
                    <td className="px-4 py-2 text-amber-800">{order.name}</td>
                    <td className="px-4 py-2 text-amber-800">{order.email}</td>
                    <td className="px-4 py-2 text-amber-800">{order.phone}</td>
                    <td className="px-4 py-2 text-amber-800">
                      {order.product}
                    </td>
                    <td className="px-4 py-2 text-amber-800">
                      {order.quantity}
                    </td>
                    <td className="px-4 py-2 text-amber-800 whitespace-nowrap">
                      {new Date(order.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderList;
