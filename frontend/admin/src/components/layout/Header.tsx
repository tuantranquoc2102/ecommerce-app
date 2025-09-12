import { Bell, MessageSquare, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      {/* Search */}
      <div className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-lg w-80">
        <Search size={16} className="text-slate-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none flex-1 text-sm"
        />
      </div>

      {/* Icons + User */}
      <div className="flex items-center gap-4">
        <MessageSquare className="text-slate-600" />
        <Bell className="text-slate-600" />
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold">
          R
        </div>
      </div>
    </header>
  );
}