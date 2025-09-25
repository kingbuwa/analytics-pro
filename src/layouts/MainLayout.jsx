import { NavLink } from "react-router-dom";
import { LayoutDashboard, ShoppingCart, Users, Settings } from "lucide-react";

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/orders", label: "Orders", icon: ShoppingCart },
  { to: "/customers", label: "Customers", icon: Users },
  { to: "/settings", label: "Settings", icon: Settings },
];

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-neutral-900 text-neutral-100">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-800/60 border-r border-neutral-700/50 flex flex-col justify-between">
        <div>
          <div className="p-6 text-xl font-semibold">Analytics Pro</div>
          <nav className="px-2 space-y-1">
            {nav.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                    isActive
                      ? "bg-neutral-700/70 ring-1 ring-neutral-600"
                      : "hover:bg-neutral-700/40"
                  }`
                }
              >
                <Icon size={18} />
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* User card */}
        <div className="m-4 rounded-xl bg-neutral-900/40 p-3 ring-1 ring-neutral-700/50">
          <div className="flex items-center gap-3">
            <img
              src="https://avatars.githubusercontent.com/u/9919?v=4"
              alt="avatar"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="text-xs">
              <div className="font-medium">King Buwa</div>
              <div className="text-neutral-400">buwaking@gmail.com</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content (full width) */}
      <main className="flex-1 overflow-y-auto bg-neutral-900 p-8">
        {children}
      </main>
    </div>
  );
}

