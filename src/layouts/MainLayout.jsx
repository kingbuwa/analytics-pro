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
    <div className="min-h-screen bg-neutral-900 text-neutral-100">
      <div className="mx-auto max-w-[1200px] px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-56 shrink-0 rounded-2xl bg-neutral-800/60 p-4 ring-1 ring-neutral-700/50">
            <div className="mb-4 text-lg font-semibold tracking-wide">Analytics Pro</div>
            <nav className="space-y-1">
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

            {/* little user card */}
            <div className="mt-8 rounded-xl bg-neutral-900/40 p-3 ring-1 ring-neutral-700/50">
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

          {/* Main content area */}
          <main className="flex-1">
            <div className="rounded-2xl bg-neutral-800/60 p-5 ring-1 ring-neutral-700/50">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

