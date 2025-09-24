import StatCard from "../components/StatCard.jsx";
import Panel from "../components/Panel.jsx";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { growth, revenue, affiliates } from "../data/mock.js";

export default function Dashboard() {
  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold tracking-wide">BUSINESS PERFORMANCE</h1>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard title="Total Sales" value="$5,000" />
        <StatCard title="Total Products Sold" value="868" />
        <StatCard title="New Customers" value="238" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Panel title="Growth" >
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={growth}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="Pending Orders">
          <div className="flex h-48 items-center justify-center text-7xl font-semibold">258</div>
        </Panel>

        <Panel title="Revenue">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenue}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>

      <Panel title="Affiliates">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5">
          {affiliates.map((a) => (
            <div key={a.name} className="flex items-center justify-between rounded-lg border border-neutral-700/60 bg-neutral-800/40 px-3 py-2 text-sm">
              <span>{a.name}</span>
              <span className="font-semibold">${a.income.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}

