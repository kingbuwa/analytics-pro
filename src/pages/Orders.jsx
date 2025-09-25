import StatCard from "../components/StatCard.jsx";
import Panel from "../components/Panel.jsx";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { recentOrders, itemsSold, ordersOverTime } from "../data/mock.js";

export default function Orders() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold tracking-wide mb-4">ORDERS</h1>

      {/* ===== TOP SECTION ===== */}
      <div className="grid gap-6 md:grid-cols-3">
        <StatCard title="Pending Orders" value={258} />
        <StatCard title="Completed Orders" value={853} />
        <StatCard title="Cancelled Orders" value={15} />
      </div>

      {/* ===== MIDDLE SECTION ===== */}
      <Panel title="Recent Orders">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-neutral-300 border-b border-neutral-700/60">
              <tr>
                <th className="py-2">Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr key={o.id} className="border-b border-neutral-800/70">
                  <td className="py-2">{o.id}</td>
                  <td>{o.customer}</td>
                  <td>{o.product}</td>
                  <td>${o.amount}</td>
                  <td>{o.status}</td>
                  <td>{o.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Orders Over Time Chart */}
        <Panel title="Orders Over Time">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ordersOverTime}
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
                  domain={[0, 6000]}
                  ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000]}
                  tickFormatter={(v) => `${v}`}
                  tick={{ fill: "#e5e7eb", fontSize: 12 }}
                  axisLine={{ stroke: "#525252" }}
                  tickLine={{ stroke: "#525252" }}
                />

                <Tooltip formatter={(v) => `${v}`} />

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

        {/* Most Sold Items */}
        <Panel title="Most Sold Items">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-neutral-300 border-b border-neutral-700/60">
                <tr>
                  <th className="py-2">Item</th>
                  <th>Quantity Sold</th>
                </tr>
              </thead>
              <tbody>
                {itemsSold.map((i) => (
                  <tr key={i.name} className="border-b border-neutral-800/70">
                    <td className="py-2">{i.name}</td>
                    <td>{i.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </div>
  );
}

