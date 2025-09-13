"use client";

import React from "react";
import { Card, CardContent } from "@shared/ui/card";
import { Button } from "@shared/ui/button";
import { Badge } from "@shared/ui/badge";
import {
  Search, SlidersHorizontal, Pencil, Trash2, Plus
} from "lucide-react";
import { Link } from "@shared/ui/link";

type CouponStatus = "Active" | "Expired";

type Coupon = {
  id: string;
  title: string;        // Summer discount 10% off
  code: string;         // Summer2020
  usage: number;        // 15 → "15 times"
  status: CouponStatus;
  date: string;         // May 5, 2020 – May 15, 2020
  checked?: boolean;
};

const rows: Coupon[] = [
  { id: "c1", title: "Summer discount 10% off", code: "Summer2020", usage: 15, status: "Active",  date: "May 5, 2020 - May 15, 2020" },
  { id: "c2", title: "Free shipping on all items", code: "Shipfreeonme15", usage: 42, status: "Active", date: "May 5, 2020 - May 15, 2020" },
  { id: "c3", title: "Discount for women clothes 5%", code: "Womenclothing5", usage: 12, status: "Active", date: "Apr 12, 2020 - Apr 20, 2020" },
  { id: "c4", title: "Summer discount 10% off", code: "Summer2020", usage: 8, status: "Active", date: "Apr 12, 2020 - Apr 20, 2020" },
  { id: "c5", title: "Free shipping on all items", code: "Shipfreeonme15", usage: 18, status: "Active", date: "Apr 12, 2020 - Apr 20, 2020" },
  { id: "c6", title: "Discount for women clothes 10%", code: "Womenclothing10", usage: 57, status: "Active", date: "Feb 14, 2020 - Feb 20, 2020" },
  { id: "c7", title: "Summer discount 15% off", code: "Summer2020", usage: 16, status: "Active", date: "Feb 14, 2020 - Feb 20, 2020" },
  { id: "c8", title: "Free shipping on all items", code: "Shipfreeonme15", usage: 15, status: "Expired", date: "Feb 14, 2020 - Feb 20, 2020" },
  { id: "c9", title: "Discount for women clothes 10%", code: "Womenclothing10", usage: 12, status: "Expired", date: "Feb 14, 2020 - Feb 20, 2020" },
  { id: "c10", title: "Discount for women clothes 5%", code: "Womenclothing5", usage: 76, status: "Expired", date: "Feb 14, 2020 - Feb 20, 2020" },
];

function StatusBadge({ value }: { value: CouponStatus }) {
  const map: Record<CouponStatus, string> = {
    Active: "bg-emerald-100 text-emerald-700",
    Expired: "bg-slate-200 text-slate-700",
  };
  return <Badge className={map[value]}>{value}</Badge>;
}

function TabBtn({
  active, children, onClick,
}: { active?: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      className={`rounded-md px-3 py-1.5 text-sm ${
        active ? "bg-slate-900 text-white" : "bg-white text-slate-700 border"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function CouponsPage() {
  const [tab, setTab] = React.useState<"all" | "active" | "expired">("all");

  const filtered = rows.filter((r) =>
    tab === "all" ? true : tab === "active" ? r.status === "Active" : r.status === "Expired"
  );

  return (
    <div>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Coupons</h1>
        <Link to="/coupons/new">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create
          </Button>
        </Link>
      </div>

      <Card>
        <CardContent className="p-4 md:p-5">
          {/* Tabs */}
          <div className="mb-3 flex flex-wrap gap-2">
            <TabBtn active={tab === "all"} onClick={() => setTab("all")}>All Coupons</TabBtn>
            <TabBtn active={tab === "active"} onClick={() => setTab("active")}>Active Coupons</TabBtn>
            <TabBtn active={tab === "expired"} onClick={() => setTab("expired")}>Expired Coupons</TabBtn>
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
              <Button variant="outline" size="icon" aria-label="Edit selected">
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" aria-label="Delete selected">
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
                  <th>Coupon Name</th>
                  <th>Usage</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filtered.map((r) => (
                  <tr key={r.id} className="bg-white hover:bg-slate-50">
                    <td className="px-3 py-3">
                      <input type="checkbox" aria-label={`Select ${r.title}`} />
                    </td>
                    <td className="px-3 py-3">
                      <div>
                        <div className="font-medium">{r.title}</div>
                        <div className="text-xs text-slate-500">{r.code}</div>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-slate-600">{r.usage} times</td>
                    <td className="px-3 py-3">
                      <StatusBadge value={r.status} />
                    </td>
                    <td className="px-3 py-3 text-slate-600">{r.date}</td>
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
            <div>120 Results</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}