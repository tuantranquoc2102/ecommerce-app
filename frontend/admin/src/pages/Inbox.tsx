"use client";

import React from "react";
import { Card, CardContent } from "@shared/ui/card";
import { Button } from "@shared/ui/button";
import { TextInput } from "@shared/ui/text-input";
import { Search } from "lucide-react";

type Conversation = {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: number;
  online?: boolean;
};

const conversations: Conversation[] = [
  {
    id: "1",
    name: "Tom Anderson",
    avatar: "https://i.pravatar.cc/40?u=tom",
    lastMessage: "Hello, I’m interested in this item...",
    time: "12:24 AM",
    unread: 8,
    online: true,
  },
  {
    id: "2",
    name: "Luis Pittman",
    avatar: "https://i.pravatar.cc/40?u=luis",
    lastMessage: "Hi, can I ask if there is anything...",
    time: "10:50 AM",
    unread: 5,
    online: true,
  },
  {
    id: "3",
    name: "Alisson Mack",
    avatar: "https://i.pravatar.cc/40?u=ali",
    lastMessage: "I want to complain about item",
    time: "Yesterday",
  },
  {
    id: "4",
    name: "Barry George",
    avatar: "https://i.pravatar.cc/40?u=barry",
    lastMessage: "Is there any chance to get a refu...",
    time: "09:54 AM",
    online: true,
  },
  {
    id: "5",
    name: "Jenny Lloyd",
    avatar: "https://i.pravatar.cc/40?u=jenny",
    lastMessage: "I’m not sure if this is what I want",
    time: "Yesterday",
  },
  {
    id: "6",
    name: "Andrew Larson",
    avatar: "https://i.pravatar.cc/40?u=andrew",
    lastMessage: "Can you help me choose from t...",
    time: "Yesterday",
  },
];

type Message = {
  id: string;
  from: "me" | "them";
  text?: string;
  time: string;
  images?: string[];
};

const messages: Message[] = [
  { id: "m1", from: "them", text: "Hi, I wonder when if there is going to be anything new for spring?", time: "12:24 AM" },
  { id: "m2", from: "me", text: "Hi Luis, can you please be more specific?", time: "12:31 AM" },
  { id: "m3", from: "them", text: "Sure, I want to know when the new spring collection for men is coming", time: "12:35 AM" },
  { id: "m4", from: "me", text: "Thank you for taking interest in our upcoming products. You can have a look at the upcoming collection in our blog post.", time: "12:45 AM" },
  { id: "m5", from: "me", images: ["https://picsum.photos/seed/shirt1/100", "https://picsum.photos/seed/shirt2/100"], time: "12:59 AM" },
];

export default function InboxPage() {
  const [activeId, setActiveId] = React.useState("2");

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Inbox</h1>
        <Button>+ New Message</Button>
      </div>

      <Card className="h-[calc(100vh-180px)]">
        <CardContent className="flex h-full p-0">
          {/* Sidebar */}
          <div className="w-1/3 border-r">
            <div className="p-3">
              <div className="flex items-center gap-2 rounded-md border px-3 py-2">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  placeholder="Search..."
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
            </div>
            <div className="overflow-y-auto">
              {conversations.map((c) => (
                <div
                  key={c.id}
                  onClick={() => setActiveId(c.id)}
                  className={`flex cursor-pointer items-center gap-3 px-3 py-3 hover:bg-slate-50 ${
                    activeId === c.id ? "bg-slate-100" : ""
                  }`}
                >
                  <img src={c.avatar} alt={c.name} className="h-10 w-10 rounded-full" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{c.name}</span>
                      <span className="text-xs text-slate-400">{c.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-slate-500">{c.lastMessage}</span>
                      {c.unread && (
                        <span className="ml-2 rounded-full bg-sky-500 px-2 text-[10px] font-semibold text-white">
                          {c.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat panel */}
          <div className="flex flex-1 flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b px-4 py-3">
              <div className="flex items-center gap-2">
                <img
                  src="https://i.pravatar.cc/40?u=luis"
                  alt="Luis Pittman"
                  className="h-8 w-8 rounded-full"
                />
                <span className="font-medium">Luis Pittman</span>
                <span className="ml-1 h-2 w-2 rounded-full bg-emerald-500"></span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Button variant="ghost" size="icon">👤</Button>
                <Button variant="ghost" size="icon">⚙️</Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg px-3 py-2 text-sm ${
                      m.from === "me"
                        ? "bg-sky-500 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {m.text && <p>{m.text}</p>}
                    {m.images && (
                      <div className="mt-2 flex gap-2">
                        {m.images.map((src, i) => (
                          <img
                            key={i}
                            src={src}
                            alt="attachment"
                            className="h-20 w-20 rounded object-cover"
                          />
                        ))}
                      </div>
                    )}
                    <div className="mt-1 text-[10px] opacity-70">{m.time}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t p-3">
              <TextInput placeholder="Your message..." className="flex-1" />
              <Button>Send</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}