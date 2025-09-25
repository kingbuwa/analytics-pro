import CountUp from "react-countup";

export default function StatCard({ title, value, prefix = "", suffix = "" }) {
  return (
    <div className="rounded-xl border border-neutral-700/60 bg-neutral-900/40 p-6">
      <div className="text-sm text-neutral-300 mb-2">{title}</div>

      <div className="text-4xl font-bold tracking-tight">
        <CountUp
          start={0}
          end={parseInt(value)}
          duration={2.5}      // animation time (seconds)
          separator=","
          prefix={prefix}
          suffix={suffix}
        />
      </div>
    </div>
  );
}

