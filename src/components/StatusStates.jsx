export function EmptyState() {
  return (
    <div className="rounded-md border border-dashed border-[#253241] px-6 py-12 text-center sm:py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-slate-500">Standing by</p>
      <p className="mt-2 text-sm text-slate-400">Convert a currency now.</p>
    </div>
  );
}

export function LoadingState() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-md border border-[#253241] px-6 py-12 text-center sm:py-16">
      <span
        className="h-6 w-6 animate-spin rounded-full border-2 border-amber-400/25 border-t-amber-400"
        aria-hidden="true"
      />
      <p className="font-mono text-xs uppercase tracking-widest text-amber-400">
        Calculating…
      </p>
    </div>
  );
}

export function ErrorState({ message }) {
  return (
    <div className="animate-panel-in rounded-md border border-red-400/30 bg-red-400/5 px-6 py-8 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-red-400">Calculation failed..</p>
      <p className="mt-2 text-sm text-slate-400">{message}</p>
    </div>
  );
}