"use client";

import React from "react";
import { Card, CardContent } from "@shared/ui/card";
import { Button } from "@shared/ui/button";
import { Label } from "@shared/ui/label";
import { TextInput } from "@shared/ui/text-input";
import { TextArea } from "@shared/ui/text-area";
import { Select } from "@shared/ui/select";
import { Switch } from "@shared/ui/switch";
import { Checkbox } from "@shared/ui/checkbox";
import { TagInput } from "@shared/ui/tag-input";

export default function AddProductPage() {
  const [tags, setTags] = React.useState(["T-Shirt", "Men Clothes", "Summer Collection"]);
  const [multiOptions, setMultiOptions] = React.useState(true);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Add Product</h1>
        <div className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column (Main form) */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="space-y-6 p-6">
              {/* Info */}
              <div>
                <div className="mb-2 text-sm font-semibold">Information</div>
                <div className="space-y-4">
                  <div>
                    <Label>Product Name</Label>
                    <TextInput placeholder="Name" defaultValue="Summer T-Shirt" />
                  </div>
                  <div>
                    <Label>Product Description</Label>
                    <TextArea placeholder="Description" defaultValue="Product description" />
                  </div>
                </div>
              </div>

              {/* Images */}
              <div>
                <div className="mb-2 text-sm font-semibold">Images</div>
                <div className="flex h-40 items-center justify-center rounded-md border-2 border-dashed">
                  <div className="flex flex-col items-center">
                    <Button variant="outline" size="sm">Add File</Button>
                    <p className="mt-1 text-xs text-slate-400">Or drag and drop files</p>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div>
                <div className="mb-2 text-sm font-semibold">Price</div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label>Product Price</Label>
                    <TextInput placeholder="Enter price" />
                  </div>
                  <div>
                    <Label>Discount Price</Label>
                    <TextInput placeholder="Price at discount" />
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Switch id="add-tax" />
                  <Label htmlFor="add-tax">Add tax for this product</Label>
                </div>
              </div>

              {/* Options */}
              <div>
                <div className="mb-2 text-sm font-semibold">Different Options</div>
                <div className="flex items-center gap-2">
                  <Switch
                    id="multi-options"
                    checked={multiOptions}
                    onCheckedChange={setMultiOptions}
                  />
                  <Label htmlFor="multi-options">
                    This product has multiple options
                  </Label>
                </div>
                {multiOptions && (
                  <div className="mt-4 space-y-3">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label>Size</Label>
                        <Select>
                          <option>Size</option>
                          <option>Color</option>
                        </Select>
                      </div>
                      <div>
                        <Label>Value</Label>
                        <TagInput
                          tags={["S", "M", "L", "XL"]}
                          onChange={(t) => console.log(t)}
                        />
                      </div>
                    </div>
                    <Button variant="link" size="sm" className="text-sky-600">+ Add More</Button>
                  </div>
                )}
              </div>

              {/* Shipping */}
              <div>
                <div className="mb-2 text-sm font-semibold">Shipping</div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label>Weight</Label>
                    <TextInput placeholder="Enter weight" />
                  </div>
                  <div>
                    <Label>Country</Label>
                    <Select>
                      <option>Select country</option>
                      <option>Vietnam</option>
                      <option>USA</option>
                      <option>France</option>
                    </Select>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Checkbox id="digital" />
                  <Label htmlFor="digital">This is digital item</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column (Side panels) */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="mb-3 text-sm font-semibold">Categories</div>
              <div className="space-y-2">
                {["Women", "Men", "T-Shirt", "Hoodie", "Dress"].map((cat) => (
                  <div key={cat} className="flex items-center gap-2">
                    <Checkbox id={cat} />
                    <Label htmlFor={cat}>{cat}</Label>
                  </div>
                ))}
              </div>
              <Button variant="link" size="sm" className="mt-2 text-sky-600">
                Create New
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="mb-3 text-sm font-semibold">Tags</div>
              <TagInput tags={tags} onChange={setTags} />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-3">
              <div className="text-sm font-semibold">SEO Settings</div>
              <div>
                <Label>Title</Label>
                <TextInput placeholder="Title" />
              </div>
              <div>
                <Label>Description</Label>
                <TextArea placeholder="Description" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}