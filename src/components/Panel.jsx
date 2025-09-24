export default function Panel({ title, children }) {
  return (
    <section className="rounded-xl border border-neutral-700/60 bg-neutral-900/40 p-4">
      {title && <h3 className="mb-3 text-sm font-semibold text-neutral-300">{title}</h3>}
      {children}
    </section>
  );
}

