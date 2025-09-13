"use client";

import { Button } from "@shared/ui/button";
import { Label } from "@shared/ui/label";
import { TextInput } from "@shared/ui/text-input";
import { TextArea } from "@shared/ui/text-area";
import { Select } from "@shared/ui/select";

export default function AddCustomerPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Add Customer</h1>
        <div className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Save</Button>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-8">
        {/* Customer Information */}
        <section>
          <h2 className="text-lg font-semibold">Customer Information</h2>
          <p className="text-sm text-slate-500 mb-4">Most important information about the customer</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <TextInput id="firstName" placeholder="First Name" />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <TextInput id="lastName" placeholder="Last Name" />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <TextInput id="email" type="email" placeholder="Email Address" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <TextInput id="phone" type="tel" placeholder="Phone Number" />
            </div>
          </div>
        </section>

        {/* Customer Address */}
        <section>
          <h2 className="text-lg font-semibold">Customer Address</h2>
          <p className="text-sm text-slate-500 mb-4">Shipping address information</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="address">Address</Label>
              <TextInput id="address" placeholder="Address" />
            </div>
            <div>
              <Label htmlFor="apartment">Apartment</Label>
              <TextInput id="apartment" placeholder="Apartment" />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <TextInput id="city" placeholder="City" />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Select id="country">
                <option value="">Choose</option>
                <option value="vn">Vietnam</option>
                <option value="us">United States</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="postal">Postal Code</Label>
              <TextInput id="postal" placeholder="Postal Code" />
            </div>
            <div>
              <Label htmlFor="phone2">Phone</Label>
              <TextInput id="phone2" type="tel" placeholder="Phone" />
            </div>
          </div>
        </section>

        {/* Customer Notes */}
        <section>
          <h2 className="text-lg font-semibold">Customer Notes</h2>
          <p className="text-sm text-slate-500 mb-4">Add notes about customer</p>
          <TextArea id="notes" placeholder="Add notes about customer" />
        </section>
      </div>
    </div>
  );
}