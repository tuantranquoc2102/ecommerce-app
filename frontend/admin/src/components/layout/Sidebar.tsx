import {
  Home, ShoppingCart, Users, BarChart, Settings,
  Gift, FoldersIcon, TicketPercent, MessagesSquare
} from "lucide-react";
import { NavLink } from "react-router-dom";

// nếu có badge số lượng (vd orders)
type MenuItem = {
  name: string;
  icon: React.ReactNode;
  path: string;
  badge?: number;
};

const menuItems: MenuItem[] = [
  { name: "Dashboard",  icon: <Home size={18} />,           path: "/" },
  { name: "Orders",     icon: <ShoppingCart size={18} />,   path: "/orders", badge: 16 },
  { name: "Products",   icon: <Gift size={18} />,           path: "/products" },
  { name: "Categories", icon: <FoldersIcon size={18} />,    path: "/categories" },
  { name: "Customers",  icon: <Users size={18} />,          path: "/customers" },
  { name: "Reports",    icon: <BarChart size={18} />,       path: "/reports" },
  { name: "Coupons",    icon: <TicketPercent size={18} />,  path: "/coupons" },
  { name: "Inbox",      icon: <MessagesSquare size={18} />, path: "/inbox" },
  { name: "Settings",   icon: <Settings size={18} />,       path: "/personalsettings" },
];

const baseItem =
  "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors";
const activeItem =
  "bg-white/10 text-white";
const inactiveItem =
  "text-blue-100 hover:bg-white/5 hover:text-white";

export default function Sidebar() {
  return (
    <aside className="flex w-60 flex-col bg-blue-600 text-white">
      <div className="px-4 py-6 text-xl font-bold text-center">STORE NAME</div>

      <nav className="flex-1 space-y-1 px-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            // isActive mặc định so khớp “startsWith” khi path có nested (vd: /orders/123)
            className={({ isActive }) =>
              [baseItem, isActive ? activeItem : inactiveItem].join(" ")
            }
            end={item.path === "/"} // để Dashboard chỉ active đúng “/”
          >
            <span className="shrink-0">{item.icon}</span>
            <span className="flex-1 truncate">{item.name}</span>

            {typeof item.badge === "number" && (
              <span className="ml-auto rounded-full bg-blue-500 px-2 text-[10px] font-semibold">
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
