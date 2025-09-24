import StatCard from "../components/StatCard.jsx";
import Panel from "../components/Panel.jsx";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { customersRecent, newCustomersPerMonth, topSpenders } from "../data/mock.js";

export default function Customers() {
  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold tracking-wide">CUSTOMERS</h1>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard title="Total Customers" value="1,230" />
        <StatCard title="New Customers" value="78" />
        <StatCard title="Returning Customers" value="452" />
      </div>

      <Panel title="Recent Customers">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-neutral-300">
              <tr className="border-b border-neutral-700/60">
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

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="New Customers per Month">
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={newCustomersPerMonth}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="Top 3 Spenders">
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={topSpenders} dataKey="value" nameKey="name" label />
                {topSpenders.map((_, i) => (
                  <Cell key={i} />
                ))}
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>
    </div>
  );
}

