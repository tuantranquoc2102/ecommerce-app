"use client";

import React from "react";
import { Card, CardContent } from "@shared/ui/card";
import { Button } from "@shared/ui/button";
import { Label } from "@shared/ui/label";
import { TextInput } from "@shared/ui/text-input";
import { Select } from "@shared/ui/select";

/* Tabs mock */
const tabs = ["Profile", "Notifications", "Accounts", "Security"];

export default function PersonalSettingsPage() {
  const [active, setActive] = React.useState("Profile");

  return (
    <div>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Settings</h1>
        <div className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-4 flex border-b">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`-mb-px border-b-2 px-4 py-2 text-sm ${
              active === t
                ? "border-sky-500 font-medium text-sky-600"
                : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="space-y-6 p-6">
          {/* Profile Details */}
          <div>
            <div className="mb-2 text-sm font-semibold">Profile Details</div>
            <p className="mb-4 text-xs text-slate-500">
              Enter your profile information
            </p>

            {/* Upload box */}
            <div className="mb-6 flex h-32 items-center justify-center rounded-md border-2 border-dashed">
              <div className="flex flex-col items-center">
                <Button variant="outline" size="sm">
                  Add File
                </Button>
                <p className="mt-1 text-xs text-slate-400">
                  Or drag and drop files
                </p>
              </div>
            </div>

            {/* Name */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label>First Name</Label>
                <TextInput placeholder="First Name" />
              </div>
              <div>
                <Label>Last Name</Label>
                <TextInput placeholder="Last Name" />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label>Email Address</Label>
                <TextInput placeholder="Email" type="email" />
              </div>
              <div>
                <Label>Phone Number</Label>
                <TextInput placeholder="Phone" type="tel" />
              </div>
            </div>
          </div>

          {/* Regional Settings */}
          <div>
            <div className="mb-2 text-sm font-semibold">Regional Settings</div>
            <p className="mb-4 text-xs text-slate-500">
              Set your language and timezone
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label>Language</Label>
                <Select>
                  <option>English</option>
                  <option>Vietnamese</option>
                  <option>French</option>
                </Select>
              </div>
              <div>
                <Label>Timezone</Label>
                <Select>
                  <option>GMT +02:00</option>
                  <option>GMT +07:00</option>
                  <option>GMT +09:00</option>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}