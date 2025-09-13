"use client";
import { Card, CardContent } from "@shared/ui/card";
import { Button } from "@shared/ui/button";
import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";
import { Download } from "lucide-react";

/* ---------- mock data ---------- */
const customerGrowth = [
  { month: "Jan", new: 200, returning: 400 },
  { month: "Feb", new: 180, returning: 380 },
  { month: "Mar", new: 220, returning: 420 },
  { month: "Apr", new: 160, returning: 360 },
  { month: "May", new: 260, returning: 460 },
  { month: "Jun", new: 200, returning: 500 },
];

const avgOrderValue = [
  { h: "4am", v: 20 },
  { h: "8am", v: 40 },
  { h: "12pm", v: 35 },
  { h: "4pm", v: 70 },
  { h: "8pm", v: 50 },
  { h: "12am", v: 60 },
];

const funnel = [
  { step: "Visited Site", v: 500 },
  { step: "Added to Cart", v: 400 },
  { step: "Proceed to Checkout", v: 350 },
  { step: "Made a Purchase", v: 280 },
];

const ageDistribution = [
  { name: "0-18 years", value: 50 },
  { name: "18-30 years", value: 30 },
  { name: "30-40 years", value: 10 },
  { name: "Other", value: 10 },
];

const COLORS = ["#2563eb", "#facc15", "#22c55e", "#f43f5e"];

/* ---------- page ---------- */
export default function ReportsPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Reports</h1>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Customer Growth */}
      <Card className="mb-4">
        <CardContent className="p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-semibold">Customer Growth</h2>
            <span className="text-sm text-slate-500">Last 12 Months</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={customerGrowth}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="returning" fill="#94a3b8" />
                <Bar dataKey="new" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* KPIs */}
      <div className="mb-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: "Existing Users", value: "5,653", change: "+22.45%" },
          { label: "New Users", value: "1,650", change: "+15.34%" },
          { label: "Total Visits", value: "9,504", change: "-18.25%" },
          { label: "Unique Visits", value: "5,423", change: "-10.24%" },
        ].map((k) => (
          <Card key={k.label}>
            <CardContent className="p-4">
              <div className="text-xs text-slate-500">{k.label}</div>
              <div className="mt-2 text-xl font-semibold">{k.value}</div>
              <div className="mt-1 text-sm text-emerald-600">{k.change}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Middle row */}
      <div className="mb-4 grid gap-4 lg:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <div className="mb-2 text-sm font-semibold">Sales Goal</div>
            <div className="text-2xl font-bold">75%</div>
            <div className="text-xs text-slate-500">Sold for: $15,000 / Goal: $20,000</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="mb-2 text-sm font-semibold">Conversion Rate</div>
            <div className="text-2xl font-bold">25%</div>
            <div className="text-xs text-slate-500">Cart → Checkout → Purchase</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="mb-2 text-sm font-semibold">Average Order Value</div>
            <div className="h-28">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={avgOrderValue}>
                  <XAxis dataKey="h" />
                  <YAxis />
                  <Tooltip />
                  <Line dataKey="v" stroke="#2563eb" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customer Demographics + Side widgets */}
      <div className="mb-4 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardContent className="p-4">
            <div className="mb-2 text-sm font-semibold">Customer Demographics</div>
            <p className="text-xs text-slate-500">[Map visualization placeholder]</p>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="mb-2 text-sm font-semibold">Visits by Device</div>
              <ul className="space-y-1 text-sm">
                <li>Mobile — 62%</li>
                <li>Laptop — 20%</li>
                <li>Tablet — 13%</li>
                <li>Other — 5%</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="mb-2 text-sm font-semibold">Online Sessions</div>
              <div className="text-2xl font-bold">128</div>
              <div className="text-xs text-emerald-600">Active Users</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom row */}
      <div className="mb-4 grid gap-4 lg:grid-cols-2">
        <Card>
          <CardContent className="p-4">
            <div className="mb-2 text-sm font-semibold">Top Customers</div>
            <ul className="space-y-1 text-sm">
              <li>Lee Henry — 52 orders — $969.37</li>
              <li>Myrtie McBride — 43 orders — $909.54</li>
              <li>Tommy Walker — 41 orders — $728.80</li>
              <li>Lela Cannon — 38 orders — $679.42</li>
              <li>Jimmy Cook — 34 orders — $549.71</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="mb-2 text-sm font-semibold">Top Products</div>
            <ul className="space-y-1 text-sm">
              <li>Men White T-Shirt — 195 units</li>
              <li>Women White T-Shirt — 146 units</li>
              <li>Women Striped T-Shirt — 122 units</li>
              <li>Men Grey Hoodie — 110 units</li>
              <li>Women Red T-Shirt — 87 units</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Funnel + Age */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardContent className="p-4">
            <div className="mb-2 text-sm font-semibold">Store Funnel</div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={funnel}>
                  <XAxis dataKey="step" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="v" fill="#2563eb" radius={[4,4,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="mb-2 text-sm font-semibold">Age Distribution</div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ageDistribution}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={80}
                    label
                  >
                    {ageDistribution.map((entry, idx) => (
                      <Cell key={`c-${idx}`} fill={COLORS[idx % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}