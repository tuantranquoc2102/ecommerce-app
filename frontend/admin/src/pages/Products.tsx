"use client";
import { Card, CardContent } from "@shared/ui/card";
import { Button } from "@shared/ui/button";
import { Badge } from "@shared/ui/badge";
import {
  Search, SlidersHorizontal, Pencil, Trash2, Download
} from "lucide-react";
import { Link } from "@shared/ui/link";

type ProductRow = {
  id: string;
  name: string;
  category: string;
  image: string;
  inventory: string;
  color: string;
  price: number;
  rating: number;
  votes: number;
  checked?: boolean;
};

const rows: ProductRow[] = [
  { id: "p1", name: "Men Grey Hoodie", category: "Hoodies", image: "https://picsum.photos/seed/p1/64", inventory: "96 in stock", color: "Black", price: 49.9, rating: 5.0, votes: 32, checked: true },
  { id: "p2", name: "Women Striped T-Shirt", category: "T-Shirt", image: "https://picsum.photos/seed/p2/64", inventory: "56 in stock", color: "White", price: 34.9, rating: 4.8, votes: 24, checked: true },
  { id: "p3", name: "Women White T-Shirt", category: "T-Shirt", image: "https://picsum.photos/seed/p3/64", inventory: "78 in stock", color: "White", price: 40.9, rating: 5.0, votes: 54 },
  { id: "p4", name: "Men White T-Shirt", category: "T-Shirt", image: "https://picsum.photos/seed/p4/64", inventory: "32 in stock", color: "White", price: 49.9, rating: 4.5, votes: 31, checked: true },
  { id: "p5", name: "Women Red T-Shirt", category: "T-Shirt", image: "https://picsum.photos/seed/p5/64", inventory: "32 in stock", color: "White", price: 34.9, rating: 4.9, votes: 22, checked: true },
  { id: "p6", name: "Men Grey Hoodie", category: "Hoodies", image: "https://picsum.photos/seed/p6/64", inventory: "96 in stock", color: "Black", price: 49.9, rating: 5.0, votes: 32 },
  { id: "p7", name: "Women Striped T-Shirt", category: "T-Shirt", image: "https://picsum.photos/seed/p7/64", inventory: "56 in stock", color: "White", price: 34.9, rating: 4.8, votes: 24 },
  { id: "p8", name: "Women White T-Shirt", category: "T-Shirt", image: "https://picsum.photos/seed/p8/64", inventory: "Out of Stock", color: "White", price: 40.9, rating: 5.0, votes: 54 },
  { id: "p9", name: "Men White T-Shirt", category: "T-Shirt", image: "https://picsum.photos/seed/p9/64", inventory: "Out of Stock", color: "White", price: 49.9, rating: 4.5, votes: 31 },
  { id: "p10", name: "Women Red T-Shirt", category: "T-Shirt", image: "https://picsum.photos/seed/p10/64", inventory: "Out of Stock", color: "White", price: 34.9, rating: 4.9, votes: 22 },
];

const currency = (v: number) => `$${v.toFixed(2)}`;

export default function ProductsPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" /> Export
          </Button>
          <Link to="/products/new">
            <Button variant="primary" className="gap-2">+ Add Product</Button>
          </Link>
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
                  <th>Product</th>
                  <th>Inventory</th>
                  <th>Color</th>
                  <th>Price</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {rows.map((r) => (
                  <tr key={r.id} className="bg-white hover:bg-slate-50">
                    <td className="px-3 py-3">
                      <input type="checkbox" defaultChecked={!!r.checked} aria-label={`Select ${r.name}`} />
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-3">
                        <img src={r.image} alt={r.name} className="h-10 w-10 rounded object-cover" />
                        <div>
                          <div className="font-medium">{r.name}</div>
                          <div className="text-xs text-slate-500">{r.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3">
                      {r.inventory.includes("Out of Stock") ? (
                        <Badge className="bg-slate-200 text-slate-600">Out of Stock</Badge>
                      ) : (
                        <span>{r.inventory}</span>
                      )}
                    </td>
                    <td className="px-3 py-3">{r.color}</td>
                    <td className="px-3 py-3 font-medium">{currency(r.price)}</td>
                    <td className="px-3 py-3">
                      {r.rating.toFixed(1)}{" "}
                      <span className="text-slate-400">({r.votes} Votes)</span>
                    </td>
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
            <div>146 Results</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
