"use client";

import React from "react";
import { Card, CardContent } from "@shared/ui/card";
import { Button } from "@shared/ui/button";
//import { Label } from "@shared/ui/label";
import { TextInput } from "@shared/ui/text-input";
import { Switch } from "@shared/ui/switch";
import { Pencil, Trash2, GripVertical, Plus } from "lucide-react";

type Product = { id: string; name: string; image: string };

const mockProducts: Product[] = [
  { id: "p1", name: "Women Striped T-Shirt", image: "https://picsum.photos/seed/1/64" },
  { id: "p2", name: "Women White T-Shirt",   image: "https://picsum.photos/seed/2/64" },
  { id: "p3", name: "Women White T-Shirt",   image: "https://picsum.photos/seed/3/64" },
  { id: "p4", name: "Women Black Dress",     image: "https://picsum.photos/seed/4/64" },
  { id: "p5", name: "Women Striped T-Shirt", image: "https://picsum.photos/seed/5/64" },
  { id: "p6", name: "Women White T-Shirt",   image: "https://picsum.photos/seed/6/64" },
  { id: "p7", name: "Women White T-Shirt",   image: "https://picsum.photos/seed/7/64" },
  { id: "p8", name: "Women Black Dress",     image: "https://picsum.photos/seed/8/64" },
];

export default function CategoryDetailPage() {
  // mock: fetch category by id từ params
  const [name, setName] = React.useState("Women Clothes");
  const [visible, setVisible] = React.useState(true);
  const [products, setProducts] = React.useState<Product[]>(mockProducts);

  const onRemove = (id: string) => setProducts((p) => p.filter((x) => x.id !== id));
  const onSave = () => alert("Saved (mock)");

  return (
    <div>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/categories" className="text-sm text-slate-500 hover:underline">&lt; Back</a>
          <h1 className="text-2xl font-bold">{name}</h1>
        </div>
        <div className="hidden gap-2 md:flex">
          <Button variant="outline">Cancel</Button>
          <Button onClick={onSave}>Save</Button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
        {/* LEFT: product list */}
        <Card>
          <CardContent className="p-0">
            <div className="border-b p-4 text-sm font-semibold">
              Products <span className="text-slate-500">{products.length}</span>
            </div>

            <ul className="space-y-3 p-4">
              {products.map((p) => (
                <li
                  key={p.id}
                  className="flex items-center gap-3 rounded-md border bg-white px-3 py-2"
                >
                  <span className="text-slate-400">
                    <GripVertical className="h-4 w-4" />
                  </span>
                  <img src={p.image} className="h-10 w-10 rounded object-cover" alt={p.name} />
                  <input
                    className="flex-1 rounded-md border border-transparent px-2 py-1 text-sm outline-none focus:border-slate-200"
                    defaultValue={p.name}
                  />
                  <div className="flex items-center gap-1">
                    <Button variant="outline" size="icon" aria-label="Edit">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="text-rose-600"
                      aria-label="Delete"
                      onClick={() => onRemove(p.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </li>
              ))}

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-md border border-dashed py-2 text-sm text-sky-600 hover:bg-sky-50"
                onClick={() =>
                  setProducts((ps) => [
                    ...ps,
                    {
                      id: crypto.randomUUID(),
                      name: "New Product",
                      image: "https://picsum.photos/seed/new/64",
                    },
                  ])
                }
              >
                <Plus className="h-4 w-4" />
                Add Product
              </button>
            </ul>
          </CardContent>
        </Card>

        {/* RIGHT: visibility + info */}
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="mb-2 text-sm font-semibold">Category Visibility</div>
              <div className="flex items-center gap-2">
                <Switch id="visible" checked={visible} onCheckedChange={setVisible} />
                <Label htmlFor="visible" className="text-sm">Visible on site</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4 p-4">
              <div className="text-sm font-semibold">Category Info</div>
              <div>
                <Label>Category Name</Label>
                <TextInput value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div>
                <Label>Image</Label>
                <div className="grid place-items-center rounded-md border-2 border-dashed p-8 text-center">
                  <Button variant="outline" size="sm">Add File</Button>
                  <p className="mt-1 text-xs text-slate-400">Or drag and drop files</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* sticky footer (mobile) */}
      <div className="sticky bottom-3 mt-6 flex items-center justify-end gap-2 lg:hidden">
        <Button variant="outline">Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </div>
    </div>
  );
}

/* small shared */
function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} className={"mb-1 block text-sm font-medium text-slate-700 " + (props.className ?? "")} />;
}