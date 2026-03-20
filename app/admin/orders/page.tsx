"use client";

import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Order } from "@/lib/orders";

const STATUS_COLORS: Record<Order["status"], string> = {
  pending: "bg-yellow-100 text-yellow-800",
  paid: "bg-green-100 text-green-800",
  shipped: "bg-blue-100 text-blue-800",
  cancelled: "bg-red-100 text-red-800",
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data: Order[]) => setOrders(data))
      .catch(() => setOrders([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-heading text-3xl text-foreground mb-6">
          Orders
        </h1>

        {loading && (
          <p className="text-muted-foreground font-body">Loading orders…</p>
        )}

        {!loading && orders.length === 0 && (
          <div className="rounded-xl border border-foreground/10 p-8 text-center">
            <p className="text-muted-foreground font-body">
              No orders yet. Orders will appear here after customers complete
              checkout.
            </p>
          </div>
        )}

        {!loading && orders.length > 0 && (
          <div className="overflow-x-auto rounded-xl border border-foreground/10">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="bg-secondary text-left">
                  <th className="px-4 py-3 font-medium">Order</th>
                  <th className="px-4 py-3 font-medium">Date</th>
                  <th className="px-4 py-3 font-medium">Customer</th>
                  <th className="px-4 py-3 font-medium">Items</th>
                  <th className="px-4 py-3 font-medium text-right">Total</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/10">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-secondary/50">
                    <td className="px-4 py-3 font-medium text-foreground">
                      {order.id}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {new Date(order.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-3 text-foreground">
                      {order.email}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {order.lineItems.length} item
                      {order.lineItems.length > 1 ? "s" : ""}
                    </td>
                    <td className="px-4 py-3 text-right font-medium text-foreground">
                      ${order.total.toFixed(2)}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${STATUS_COLORS[order.status]}`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
