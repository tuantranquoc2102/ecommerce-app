"use client";

import React from "react";
import { Card, CardContent,} from "@shared/ui/card";
import { Button } from "@shared/ui/button";
import { Label } from "@shared/ui/label";
import { TextInput } from "@shared/ui/text-input";
import { Select } from "@shared/ui/select";
import { Checkbox } from "@shared/ui/checkbox";
import { DollarSign, Percent, Tag, Truck } from "lucide-react";

/* Coupon types */
const couponTypes = [
  { key: "fixed", label: "Fixed Discount", icon: <DollarSign className="h-5 w-5" /> },
  { key: "percent", label: "Percentage Discount", icon: <Percent className="h-5 w-5" /> },
  { key: "shipping", label: "Free Shipping", icon: <Truck className="h-5 w-5" /> },
  { key: "price", label: "Price Discount", icon: <Tag className="h-5 w-5" /> },
];

export default function CreateCouponPage() {
  const [type, setType] = React.useState("fixed");

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Create Coupon</h1>
        <div className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </div>
      </div>

      <Card>
        <CardContent className="space-y-6 p-6">
          {/* Coupon Info */}
          <div>
            <div className="mb-2 text-sm font-semibold">Coupon Information</div>
            <p className="mb-4 text-xs text-slate-500">
              Code will be used by users in checkout
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label>Coupon Code</Label>
                <TextInput placeholder="Enter code" defaultValue="Shipfree20" />
              </div>
              <div>
                <Label>Coupon Name</Label>
                <TextInput placeholder="Name" defaultValue="Free Shipping" />
              </div>
            </div>
          </div>

          {/* Coupon Type */}
          <div>
            <div className="mb-2 text-sm font-semibold">Coupon Type</div>
            <p className="mb-4 text-xs text-slate-500">
              Type of coupon you want to create
            </p>
            <div className="grid gap-3 md:grid-cols-4">
              {couponTypes.map((ct) => (
                <button
                  key={ct.key}
                  onClick={() => setType(ct.key)}
                  className={`flex flex-col items-center justify-center gap-2 rounded-md border p-4 text-sm font-medium ${
                    type === ct.key
                      ? "border-sky-500 bg-sky-50 text-sky-600"
                      : "border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {ct.icon}
                  {ct.label}
                </button>
              ))}
            </div>
          </div>

          {/* Discount */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label>Discount Value</Label>
              <TextInput placeholder="Amount" />
            </div>
            <div>
              <Label>Applies to</Label>
              <Select>
                <option>Choose</option>
                <option>All products</option>
                <option>Selected category</option>
              </Select>
            </div>
          </div>

          {/* Duration + Usage */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label>Duration</Label>
              <TextInput type="date" placeholder="Set Duration" />
              <div className="mt-2 flex items-center gap-2">
                <Checkbox id="no-duration" />
                <Label htmlFor="no-duration">Don't set duration</Label>
              </div>
            </div>
            <div>
              <Label>Usage Limits</Label>
              <TextInput placeholder="Amount of uses" />
              <div className="mt-2 flex items-center gap-2">
                <Checkbox id="no-limit" />
                <Label htmlFor="no-limit">Don't limit amount of uses</Label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}