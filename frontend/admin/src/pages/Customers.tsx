"use client";

import React from "react";
import { Card, CardContent } from "@shared/ui/card";
import { Button } from "@shared/ui/button";
import { Search, SlidersHorizontal, Pencil, Trash2, Download } from "lucide-react";
import { Link } from "@shared/ui/link";

type Customer = {
  id: string;
  name: string;
  location: string;
  orders: number;
  spent: number;
  checked?: boolean;
};

const rows: Customer[] = [
  { id: "c1", name: "Rakesh Mishra",         location: "Sawaynchester", orders: 5,  spent: 96.14,  },
  { id: "c2", name: "Lakshman singh",        location: "Kaydenville",   orders: 12, spent: 22.18,  },
  { id: "c3", name: "Dinananth sah",         location: "East Freidaton",orders: 6,  spent: 59.64,  },
  { id: "c4", name: "Anmol yadav",           location: "South Marcellus",orders:3,  spent: 54.52,  },
  { id: "c5", name: "Raushan singh Rajput",  location: "South Olestad", orders: 15, spent: 45.80,  },
  { id: "c6", name: "Lokesh Rahul",          location: "Dereckberg",    orders: 12, spent: 85.78,  },
  { id: "c7", name: "Randhir Kumar",         location: "Franeckview",   orders: 5,  spent: 128.66, },
  { id: "c8", name: "Khushi Kumari",         location: "Port Kathryne", orders: 7,  spent: 113.39, },
  { id: "c9", name: "Pooja Kumari",          location: "McGlynntown",   orders: 14, spent: 80.80,  },
  { id: "c10",name: "Ruhi Kumari",           location: "Krystalview",   orders: 5,  spent: 42.03,  },
];

const currency = (v: number) => `$${v.toFixed(2)}`;

function InitialAvatar({ name }: { name: string }) {
  const ch = name.trim().charAt(0).toUpperCase();
  return (
    <div className="grid h-8 w-8 place-items-center rounded-full bg-slate-200 text-[12px] font-semibold text-slate-700">
      {ch}
    </div>
  );
}

export default function CustomersPage() {
  const [tab, setTab] = React.useState<"all" | "new" | "eu" | "returning">("all");

  return (
    <div>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Customers</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> Export
          </Button>
          <Link to="/customers/new">
            <Button className="gap-2">+ Add Customer</Button>
          </Link>
        </div>
      </div>

      <Card>
        <CardContent className="p-4 md:p-5">
          {/* Tabs */}
          <div className="mb-3 flex flex-wrap gap-2 text-sm">
            <TabBtn active={tab === "all"} onClick={() => setTab("all")}>All Customers</TabBtn>
            <TabBtn active={tab === "new"} onClick={() => setTab("new")}>New Customers</TabBtn>
            <TabBtn active={tab === "eu"} onClick={() => setTab("eu")}>From Europe</TabBtn>
            <TabBtn active={tab === "returning"} onClick={() => setTab("returning")}>Returning Customers</TabBtn>
          </div>

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
                  <th>Name</th>
                  <th>Location</th>
                  <th>Orders</th>
                  <th className="text-right">Spent</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {rows.map((r) => (
                  <tr key={r.id} className="bg-white hover:bg-slate-50">
                    <td className="px-3 py-3">
                      <input type="checkbox" aria-label={`Select ${r.name}`} />
                    </td>
                    <td className="px-3 py-3">
                      <Link
                        to={`/customers/${r.id}`}
                        className="group inline-flex items-center gap-3"
                        aria-label={`View detail of ${r.name}`}
                      >
                        <InitialAvatar name={r.name} />
                        <span className="font-medium text-blue-600 group-hover:underline">
                          {r.name}
                        </span>
                      </Link>
                    </td>
                    <td className="px-3 py-3 text-slate-600">{r.location}</td>
                    <td className="px-3 py-3">{r.orders}</td>
                    <td className="px-3 py-3 text-right font-medium">{currency(r.spent)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <button className="rounded border px-2 py-1">{"<"}</button>
              {Array.from({ length: 7 }).map((_, i) => (
                <button
                  key={i}
                  className={`rounded border px-2 py-1 ${i === 1 ? "bg-slate-900 text-white" : ""}`}
                >
                  {i + 1}
                </button>
              ))}
              <span className="px-1">…</span>
              <button className="rounded border px-2 py-1">{">"}</button>
            </div>
            <div>154 Results</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* small UI */
function TabBtn({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-3 py-1.5 ${
        active ? "bg-slate-900 text-white" : "bg-white text-slate-700 border"
      }`}
    >
      {children}
    </button>
  );
}