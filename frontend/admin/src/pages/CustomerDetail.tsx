"use client";

import { Button } from "@shared/ui/button";
import { Card, CardContent } from "@shared/ui/card";
import { TextArea } from "@shared/ui/text-area";
import { Badge } from "@shared/ui/badge";
import { TagInput } from "@shared/ui/tag-input";

export default function CustomerDetailPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Customer Information</h1>
        <div className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Save</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Card */}
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-lg font-semibold">
                R
              </div>
              <div className="flex-1">
                <div className="font-semibold">Randhir Kumar</div>
                <div className="text-sm text-slate-500">India</div>
                <div className="text-sm text-slate-500">5 Orders · Customer for 2 years</div>
              </div>
              <div className="text-yellow-500">⭐⭐⭐⭐☆</div>
            </CardContent>
          </Card>

          {/* Notes */}
          <Card>
            <CardContent className="p-6 space-y-2">
              <h2 className="text-lg font-semibold">Customer Notes</h2>
              <TextArea placeholder="Add notes about customer" />
            </CardContent>
          </Card>

          {/* Orders */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Customer Orders</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500">
                    <th className="py-2">Order</th>
                    <th className="py-2">Date</th>
                    <th className="py-2">Order Status</th>
                    <th className="py-2">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td>#23534D</td>
                    <td>May 25, 3:12 PM</td>
                    <td><Badge variant="warning">Pending</Badge></td>
                    <td>$29.74</td>
                  </tr>
                  <tr>
                    <td>#12512B</td>
                    <td>May 10, 2:00 PM</td>
                    <td><Badge variant="success">Completed</Badge></td>
                    <td>$23.06</td>
                  </tr>
                  <tr>
                    <td>#23534D</td>
                    <td>Apr 18, 8:00 AM</td>
                    <td><Badge variant="success">Completed</Badge></td>
                    <td>$29.74</td>
                  </tr>
                  <tr>
                    <td>#76543E</td>
                    <td>Apr 12, 8:00 AM</td>
                    <td><Badge variant="success">Completed</Badge></td>
                    <td>$23.06</td>
                  </tr>
                  <tr>
                    <td>#51323C</td>
                    <td>Apr 10, 4:12 PM</td>
                    <td><Badge variant="success">Completed</Badge></td>
                    <td>$23.06</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Overview */}
          <Card>
            <CardContent className="p-6 space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Overview</h2>
                <Button variant="link" size="sm" className="text-blue-600">Edit</Button>
              </div>
              <div className="text-sm text-slate-600">
                <p>Address: Panapur langa, Hajipur, Vaishali, India</p>
                <p>Email: randhirppl@gmail.com</p>
                <p>Phone: +91 8804789764</p>
              </div>
              <Button variant="link" size="sm" className="text-red-600">Delete Customer</Button>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardContent className="p-6 space-y-2">
              <h2 className="text-lg font-semibold">Tags</h2>
              <TagInput defaultTags={["Vip Customer", "Europe"]} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}