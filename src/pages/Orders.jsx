import StatCard from "../components/StatCard.jsx";
import Panel from "../components/Panel.jsx";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { recentOrders, itemsSold, growth } from "../data/mock.js";

export default function Orders() {
  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold tracking-wide">ORDERS</h1>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard title="Pending Orders" value="258" />
        <StatCard title="Completed Orders" value="853" />
        <StatCard title="Cancelled Orders" value="15" />
      </div>

      <Panel title="Recent Orders">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-neutral-300">
              <tr className="border-b border-neutral-700/60">
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

      <div className="grid gap-4 lg:grid-cols-3">
        <Panel title="Orders Over Time" >
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

        <Panel title="Most Sold Items">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-neutral-300">
                <tr className="border-b border-neutral-700/60">
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

        <div />
      </div>
    </div>
  );
}

