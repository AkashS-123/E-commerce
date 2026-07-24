import { Package } from "lucide-react";

const orders = [
  { id: "SW-10482", date: "Jun 14, 2026", status: "Delivered", total: "$579.00" },
  { id: "SW-10311", date: "May 2, 2026", status: "Shipped", total: "$979.00" },
  { id: "SW-10022", date: "Mar 21, 2026", status: "Delivered", total: "$659.00" },
];

const statusStyles: Record<string, string> = {
  Delivered: "bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-300",
  Shipped: "bg-sky-50 text-sky-600 dark:bg-sky-900/30 dark:text-sky-300",
};

export default function MyOrders() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">My Order</h1>

      {orders.length === 0 ? (
        <div className="mt-8 flex flex-col items-center rounded-xl bg-gray-50 py-16 text-center dark:bg-gray-800/60">
          <Package size={36} className="text-gray-300 dark:text-gray-600" />
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            You haven't placed any orders yet.
          </p>
        </div>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-800">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-gray-50 text-xs font-bold uppercase text-gray-500 dark:bg-gray-800/60 dark:text-gray-400">
              <tr>
                <th className="px-5 py-3">Order</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-5 py-4 font-semibold text-gray-800 dark:text-gray-100">
                    {order.id}
                  </td>
                  <td className="px-5 py-4 text-gray-500 dark:text-gray-400">{order.date}</td>
                  <td className="px-5 py-4">
                    <span
                      className={
                        "rounded-full px-3 py-1 text-xs font-bold " + statusStyles[order.status]
                      }
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right font-semibold text-gray-800 dark:text-gray-100">
                    {order.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
