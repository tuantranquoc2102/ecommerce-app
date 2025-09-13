"use client";
import { Card, CardContent } from "@shared/ui/card";
import { Button } from "@shared/ui/button";
import { Badge } from "@shared/ui/badge";
import { Search, SlidersHorizontal, Pencil, Trash2, Download } from "lucide-react";

type PaymentStatus = "Paid" | "Pending" | "Refunded";
type OrderStatus = "Ready" | "Shipped" | "Received" | "Cancelled";

type OrderRow = {
  id: string;               // '#12512B'
  date: string;             // 'May 5, 4:20 PM'
  customer: string;         // 'Tom Anderson'
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  total: number;            // 49.90
  checked?: boolean;
};

const rows: OrderRow[] = [
  { id: "#12512B", date: "May 5, 4:20 PM", customer: "Tom Anderson",       paymentStatus: "Paid",    orderStatus: "Ready",    total: 49.90, checked: true  },
  { id: "#12523C", date: "May 5, 4:15 PM", customer: "Jayden Walker",      paymentStatus: "Paid",    orderStatus: "Ready",    total: 34.36, checked: true  },
  { id: "#51232A", date: "May 5, 4:15 PM", customer: "Inez Kim",           paymentStatus: "Paid",    orderStatus: "Ready",    total: 5.51  },
  { id: "#23534D", date: "May 5, 4:12 PM", customer: "Francisco Henry",    paymentStatus: "Paid",    orderStatus: "Shipped",  total: 29.74 },
  { id: "#51323C", date: "May 5, 4:12 PM", customer: "Violet Phillips",    paymentStatus: "Paid",    orderStatus: "Shipped",  total: 23.06 },
  { id: "#35622A", date: "May 5, 4:12 PM", customer: "Rosetta Becker",     paymentStatus: "Paid",    orderStatus: "Shipped",  total: 87.44 },
  { id: "#34232D", date: "May 5, 4:10 PM", customer: "Dean Love",          paymentStatus: "Paid",    orderStatus: "Ready",    total: 44.55 },
  { id: "#56212D", date: "May 5, 4:08 PM", customer: "Nettie Tyler",       paymentStatus: "Paid",    orderStatus: "Ready",    total: 36.79 },
  { id: "#76543E", date: "May 5, 4:08 PM", customer: "Lawe Weaver",        paymentStatus: "Paid",    orderStatus: "Shipped",  total: 28.78 },
  { id: "#12512B", date: "May 5, 4:05 PM", customer: "Vincent Cannon",     paymentStatus: "Paid",    orderStatus: "Shipped",  total: 96.46 },
  { id: "#12523C", date: "May 5, 4:05 PM", customer: "Nettie Palmer",      paymentStatus: "Paid",    orderStatus: "Received", total: 25.53 },
  { id: "#23534D", date: "May 5, 4:04 PM", customer: "Miguel Harris",      paymentStatus: "Pending", orderStatus: "Ready",    total: 50.54 },
  { id: "#12523C", date: "May 5, 4:04 PM", customer: "Angel Conner",       paymentStatus: "Pending", orderStatus: "Ready",    total: 63.47 },
  { id: "#51232A", date: "May 5, 4:03 PM", customer: "Rosalie Singleton",  paymentStatus: "Pending", orderStatus: "Received", total: 91.63 },
];

// small helpers
const currency = (v: number) => `$${v.toFixed(2)}`;

function PaymentBadge({ value }: { value: PaymentStatus }) {
  const map: Record<PaymentStatus, string> = {
    Paid: "bg-emerald-100 text-emerald-700",
    Pending: "bg-slate-200 text-slate-700",
    Refunded: "bg-amber-100 text-amber-700",
  };
  return <Badge className={map[value]}>{value}</Badge>;
}

function OrderBadge({ value }: { value: OrderStatus }) {
  const map: Record<OrderStatus, string> = {
    Ready: "bg-amber-100 text-amber-800",
    Shipped: "bg-slate-300 text-slate-800",
    Received: "bg-blue-500 text-white",
    Cancelled: "bg-rose-100 text-rose-700",
  };
  return <Badge className={map[value]}>{value}</Badge>;
}

export default function OrdersPage() {
  return (
    <div>
      {/* Header actions */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Orders</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">
            + Add Order
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-4 md:p-5">
          {/* Toolbar */}
          <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" className="gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filter
              </Button>
              <div className="flex items-center gap-2 rounded-md border bg-white px-3 py-2">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  placeholder="Search…"
                  className="w-56 bg-transparent text-sm outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="outline" size="icon" aria-label="Edit">
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" aria-label="Delete">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-md border">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr className="[&>th]:px-3 [&>th]:py-3">
                  <th style={{ width: 36 }}>
                    <input type="checkbox" aria-label="Select all" />
                  </th>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Payment status</th>
                  <th>Order Status</th>
                  <th className="text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {rows.map((r) => (
                  <tr key={`${r.id}-${r.customer}`} className="bg-white hover:bg-slate-50">
                    <td className="px-3 py-3">
                      <input type="checkbox" defaultChecked={!!r.checked} aria-label={`Select ${r.id}`} />
                    </td>
                    <td className="px-3 py-3 text-sky-700 hover:underline">{r.id}</td>
                    <td className="px-3 py-3 text-slate-600">{r.date}</td>
                    <td className="px-3 py-3">{r.customer}</td>
                    <td className="px-3 py-3">
                      <PaymentBadge value={r.paymentStatus} />
                    </td>
                    <td className="px-3 py-3">
                      <OrderBadge value={r.orderStatus} />
                    </td>
                    <td className="px-3 py-3 text-right font-medium">{currency(r.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination footer */}
          <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <button className="rounded border px-2 py-1">{'<'}</button>
              {Array.from({ length: 7 }).map((_, i) => (
                <button
                  key={i}
                  className={`rounded border px-2 py-1 ${i === 1 ? 'bg-slate-900 text-white' : ''}`}
                >
                  {i + 1}
                </button>
              ))}
              <span className="px-1">…</span>
              <button className="rounded border px-2 py-1">{'>'}</button>
            </div>
            <div>274 Results</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}