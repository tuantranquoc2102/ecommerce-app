"use client";

import { Card, CardContent } from "@shared/ui/card";
import { Button } from "@shared/ui/button";
import { Pencil, Plus } from "lucide-react";
import { Link } from "@shared/ui/link";

type Category = {
  id: string;
  name: string;
  count: number;
  image: string;
};

const categories: Category[] = [
  { id: "men", name: "Men Clothes", count: 24, image: "https://picsum.photos/seed/men/640/400" },
  { id: "women", name: "Women Clothes", count: 12, image: "https://picsum.photos/seed/women/640/400" },
  { id: "acc", name: "Accessories", count: 43, image: "https://picsum.photos/seed/acc/640/400" },
  { id: "cotton", name: "Cotton Clothes", count: 31, image: "https://picsum.photos/seed/cotton/640/400" },
  { id: "summer", name: "Summer Clothes", count: 26, image: "https://picsum.photos/seed/summer/640/400" },
  { id: "wedding", name: "Wedding Clothes", count: 52, image: "https://picsum.photos/seed/wedding/640/400" },
  { id: "spring", name: "Spring Collection", count: 24, image: "https://picsum.photos/seed/spring/640/400" },
  { id: "casual", name: "Casual Clothes", count: 52, image: "https://picsum.photos/seed/casual/640/400" },
  { id: "hats", name: "Hats", count: 26, image: "https://picsum.photos/seed/hats/640/400" },
];

export default function CategoriesPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Categories</h1>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Category
        </Button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} data={cat} />
        ))}
      </div>
    </div>
  );
}

/* -------- Components -------- */
function CategoryCard({ data }: { data: Category }) {
  return (
    <Card className="overflow-hidden">
      <div className="group relative aspect-[16/10] w-full">
        <img
          src={data.image}
          alt={data.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {/* Hover Edit */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
          <Button
            variant="outline"
            size="sm"
            className="pointer-events-auto gap-2 bg-white/90 backdrop-blur"
          >
            <Link to={`/categories/${data.id}`}>
              <Pencil className="h-4 w-4" />
              Edit
            </Link>
          </Button>
        </div>
      </div>

      <CardContent className="flex items-center justify-between p-4">
        <div>
          <div className="font-semibold">{data.name}</div>
          <div className="text-xs text-slate-500">{data.count} items</div>
        </div>
        {/* Optional: CTA nhỏ */}
        {/* <Button variant="outline" size="sm">Manage</Button> */}
      </CardContent>
    </Card>
  );
}