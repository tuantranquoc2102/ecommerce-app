import { Home, ShoppingCart, Users, BarChart, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: <Home size={18} />, path: "/" },
  { name: "Orders", icon: <ShoppingCart size={18} />, path: "/orders" },
  { name: "Customers", icon: <Users size={18} />, path: "/customers" },
  { name: "Reports", icon: <BarChart size={18} />, path: "/reports" },
  { name: "Settings", icon: <Settings size={18} />, path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-slate-900 text-white flex flex-col">
      <div className="px-4 py-6 text-xl font-bold">fastcart</div>
      <nav className="flex-1 px-2 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}