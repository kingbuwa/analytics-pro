import StatCard from "../components/StatCard.jsx";
import Panel from "../components/Panel.jsx";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";

import { growth, revenue, affiliates } from "../data/mock.js";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold tracking-wide mb-4">
        BUSINESS PERFORMANCE
      </h1>

      {/* ===== ROW 1 - Stat Cards ===== */}
     <div className="grid gap-6 md:grid-cols-3">
  <StatCard title="Total Sales" value={5000} prefix="$" />
  <StatCard title="Total Products Sold" value={868} />
  <StatCard title="New Customers" value={238} />
</div>


      {/* ===== ROW 2 - Growth + Pending Orders ===== */}
      <div className="grid gap-6 md:grid-cols-2">
        <Panel title="Growth">
  <div className="h-64">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={growth}
        margin={{ top: 8, right: 8, bottom: 8, left: 8 }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.35} />

        <XAxis
          dataKey="name"
          tick={{ fill: "#e5e7eb", fontSize: 12 }}
          axisLine={{ stroke: "#525252" }}
          tickLine={{ stroke: "#525252" }}
        />

        <YAxis
          domain={[0, 50]}
          ticks={[0, 10, 20, 30, 40, 50]}
          tickFormatter={(v) => `${v}%`}
          tick={{ fill: "#e5e7eb", fontSize: 12 }}
          axisLine={{ stroke: "#525252" }}
          tickLine={{ stroke: "#525252" }}
        />

        <Tooltip formatter={(v) => `${v}%`} />

        {/* ✅ gray bars with white outline */}
        <Bar
          dataKey="value"
          barSize={18}
          radius={[6, 6, 0, 0]}
          fill="#4b5563"
          stroke="#ffffff"
          strokeWidth={1}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
</Panel>



        <Panel title="Pending Orders">
  <div className="flex h-64 items-center">
    <span className="text-8xl font-bold leading-none tracking-tight pl-6">
      258
    </span>
  </div>
</Panel>


      </div>

      {/* ===== ROW 3 - Revenue + Affiliates ===== */}
      <div className="grid gap-6 md:grid-cols-2">
        <Panel title="Revenue">
  <div className="h-64">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={revenue}
        margin={{ top: 8, right: 8, bottom: 8, left: 8 }}
      >
        {/* ✅ grid lines */}
        <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.35} />

        {/* ✅ months Jan → Dec */}
        <XAxis
          dataKey="name"
          tick={{ fill: "#e5e7eb", fontSize: 12 }}
          axisLine={{ stroke: "#525252" }}
          tickLine={{ stroke: "#525252" }}
        />

        {/* ✅ $0 → $5000 scale */}
        <YAxis
          domain={[0, 5000]}
          ticks={[0, 1000, 2000, 3000, 4000, 5000]}
          tickFormatter={(v) => `$${v}`}
          tick={{ fill: "#e5e7eb", fontSize: 12 }}
          axisLine={{ stroke: "#525252" }}
          tickLine={{ stroke: "#525252" }}
        />

        <Tooltip formatter={(v) => `$${v}`} />

        {/* ✅ gray bars with white borders */}
        <Bar
          dataKey="value"
          barSize={18}
          radius={[6, 6, 0, 0]}
          fill="#4b5563"        // gray
          stroke="#ffffff"      // white border
          strokeWidth={1}
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
</Panel>


        <Panel title="Affiliates">
          <div className="grid gap-3 text-sm">
            {affiliates.map((a) => (
              <div
                key={a.name}
                className="flex items-center justify-between rounded-md bg-neutral-800/60 px-4 py-3 ring-1 ring-neutral-700/50"
              >
                <span>{a.name}</span>
                <span className="font-semibold">${a.income.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

