export default function StatCard({ title, value, right }) {
  return (
    <div className="rounded-xl border border-neutral-700/60 bg-neutral-900/40 p-4">
      <div className="flex items-start justify-between">
        <div className="text-sm text-neutral-300">{title}</div>
        {right}
      </div>
      <div className="mt-2 text-4xl font-semibold tracking-tight">{value}</div>
    </div>
  );
}

