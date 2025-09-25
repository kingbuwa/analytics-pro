import Panel from "../components/Panel.jsx";
import StatCard from "../components/StatCard.jsx";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  customersRecent,
  newCustomersPerMonth,
  topSpenders,
} from "../data/mock.js";

export default function Customers() {
  // for progress bar widths
  const maxNewCustomers = Math.max(
    ...newCustomersPerMonth.map((m) => m.value)
  );

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold tracking-wide mb-4">CUSTOMERS</h1>

      {/* === Top Stats === */}
      <div className="grid gap-6 md:grid-cols-3">
        <StatCard title="Total Customers" value={1230} />
        <StatCard title="New Customers" value={78} />
        <StatCard title="Returning Customers" value={452} />
      </div>

      {/* === Recent Customers === */}
      <Panel title="Recent Customers">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-neutral-300 border-b border-neutral-700/60">
              <tr>
                <th className="py-2">Customer ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Total Orders</th>
                <th>Total Spent</th>
                <th>Date Joined</th>
              </tr>
            </thead>
            <tbody>
              {customersRecent.map((c) => (
                <tr key={c.id} className="border-b border-neutral-800/70">
                  <td className="py-2">{c.id}</td>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.orders}</td>
                  <td>${c.spent}</td>
                  <td>{c.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      {/* === Bottom Section === */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* New Customers per Month (left-to-right progress list) */}
        <Panel title="New Customers per Month">
          <div className="space-y-3">
            {newCustomersPerMonth.map((m) => {
              const pct = Math.round((m.value / maxNewCustomers) * 100);
              return (
                <div
                  key={m.name}
                  className="grid grid-cols-12 items-center gap-3"
                >
                  <div className="col-span-2 text-sm text-neutral-200">
                    {m.name}
                  </div>
                  <div className="col-span-10">
                    <div className="relative h-7 rounded-md ring-1 ring-neutral-600 bg-neutral-900/40 overflow-hidden">
                      {/* value centered */}
                      <div className="absolute inset-0 flex items-center justify-center text-xs text-neutral-100">
                        {m.value}
                      </div>
                      {/* filled portion */}
                      <div
                        className="h-full bg-neutral-600"
                        style={{
                          width: `${pct}%`,
                          borderRight: "1px solid #ffffff",
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Panel>

        {/* Top 3 Spenders (amounts only on slices) */}
        <Panel title="Top 3 Spenders">
          <div className="h-72 flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={topSpenders}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  stroke="#ffffff"
                  strokeWidth={1}
                  label={({ value }) => `$${value}`} // amounts only
                >
                  {/* distinct colors for readability */}
                  <Cell fill="#6366F1" /> {/* $840 */}
                  <Cell fill="#22C55E" /> {/* $620 */}
                  <Cell fill="#F97316" /> {/* $430 */}
                </Pie>
                {/* no legend, no tooltip since no names needed */}
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>
    </div>
  );
}

