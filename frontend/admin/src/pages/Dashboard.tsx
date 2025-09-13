"use client";

import {  Card, CardContent } from "@shared/ui/card";
import { Button } from "@shared/ui/button";
import { Badge } from "@shared/ui/badge";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from "recharts";

const kpis = [
  { label: "Total Revenue", value: "$10.54", change: +22.45 },
  { label: "Orders", value: "1,056", change: +15.34 },
  { label: "Unique Visits", value: "5,420", change: -10.24 },
  { label: "New Users", value: "1,650", change: +15.34 },
  { label: "Existing User", value: "9,653", change: +22.45 },
];

const ordersOverTime = [
  { h: "4am", d1: 5, d2: 8 },
  { h: "5am", d1: 10, d2: 12 },
  { h: "6am", d1: 8, d2: 15 },
  { h: "7am", d1: 18, d2: 28 },
  { h: "8am", d1: 34, d2: 22 },
  { h: "9am", d1: 30, d2: 18 },
  { h: "10am", d1: 20, d2: 16 },
  { h: "11am", d1: 12, d2: 25 },
  { h: "12pm", d1: 28, d2: 12 },
  { h: "1pm", d1: 15, d2: 20 },
  { h: "2pm", d1: 22, d2: 28 },
  { h: "3pm", d1: 18, d2: 24 },
];

const last7Days = [
  { d: "12", v: 20 },
  { d: "13", v: 24 },
  { d: "14", v: 18 },
  { d: "15", v: 30 },
  { d: "16", v: 28 },
  { d: "17", v: 26 },
  { d: "18", v: 22 },
];

const transactions = [
  { name: "Jagarnath S.", date: "24.05.2023", amount: 124.97, status: "Paid" },
  { name: "Anand G.", date: "23.05.2023", amount: 55.42, status: "Pending" },
  { name: "Kartik S.", date: "23.05.2023", amount: 89.90, status: "Paid" },
  { name: "Rakesh S.", date: "22.05.2023", amount: 144.94, status: "Pending" },
  { name: "Anup S.", date: "22.05.2023", amount: 70.52, status: "Paid" },
];

const topProducts = [
  { name: "Men Grey Hoodie", price: 49.9, units: 204, img: "https://picsum.photos/seed/tp1/64" },
  { name: "Women Striped T-Shirt", price: 34.9, units: 155, img: "https://picsum.photos/seed/tp2/64" },
  { name: "Women White T-Shirt", price: 40.9, units: 120, img: "https://picsum.photos/seed/tp3/64" },
  { name: "Men White T-Shirt", price: 49.9, units: 204, img: "https://picsum.photos/seed/tp4/64" },
  { name: "Women Red T-Shirt", price: 34.9, units: 155, img: "https://picsum.photos/seed/tp5/64" },
];

const StatCard = ({ label, value, change }: any) => (
  <Card className="shadow-sm">
    <CardContent className="p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-2 text-xl font-semibold">{value}</div>
      <div className={`mt-3 inline-flex items-center rounded px-2 py-0.5 text-[11px] ${
        change >= 0 ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
      }`}>
        {change >= 0 ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
      </div>
    </CardContent>
  </Card>
);

export default function DashboardPage() {
  return (
    // <AdminShell>
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button variant="outline">Manage</Button>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {kpis.map((k) => (
          <StatCard key={k.label} {...k} />
        ))}
      </div>

      {/* Charts */}
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardContent className="p-5">
            <div className="mb-3">
              <div className="text-xl font-semibold">Orders Over Time</div>
              <div className="text-xs text-slate-500">Last 12 hours</div>
            </div>
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ordersOverTime}>
                  <XAxis dataKey="h" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="d2" stroke="#3b82f6" strokeWidth={3} dot={false} />
                  <Line type="monotone" dataKey="d1" stroke="#cbd5e1" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="mb-3 text-xl font-semibold">Last 7 Days Sales</div>
            <div className="text-sm text-slate-500">1,259 Items Sold • $12,546 Revenue</div>
            <div className="mt-4 h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={last7Days}>
                  <XAxis dataKey="d" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="v" radius={[4,4,0,0]} fill="#22c55e" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tables */}
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardContent className="p-5">
            <div className="mb-3 text-xl font-semibold">Recent Transactions</div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-slate-500">
                  <tr>
                    <th className="py-2">Name</th>
                    <th className="py-2">Date</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((t) => (
                    <tr key={t.name} className="border-t">
                      <td className="py-2">{t.name}</td>
                      <td className="py-2">{t.date}</td>
                      <td className="py-2">${t.amount.toFixed(2)}</td>
                      <td className="py-2">
                        <Badge className={t.status === "Paid" 
                          ? "bg-emerald-100 text-emerald-700" 
                          : "bg-slate-100 text-slate-700"}>
                          {t.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="mb-3 text-xl font-semibold">Top Products by Units Sold</div>
            <div className="space-y-3">
              {topProducts.map((p) => (
                <div key={p.name} className="flex items-center justify-between gap-3 rounded border p-2">
                  <div className="flex items-center gap-3">
                    <img src={p.img} alt={p.name} className="h-10 w-10 rounded object-cover" />
                    <div>
                      <div className="text-sm font-medium">{p.name}</div>
                      <div className="text-xs text-slate-500">${p.price.toFixed(2)}</div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold">{p.units}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    {/* <AdminShell> */}
    </div>
  );
}
