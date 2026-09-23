

export default function ConversionPanel({data}) {

  if (data == null) {
    return null;
  }

  return (
    <div className="mt-6 rounded-xl border border-slate-700/50 bg-[#151E2A] px-6 py-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400">
        Conversion Result
      </p>

      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-sm text-slate-400">
            {Number(data.amount).toLocaleString()} {data.data.base}
          </p>

          <p className="mt-1 text-3xl font-semibold text-slate-50">
            {Number(data.convertedAmount).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{' '}
            <span className="text-lg text-slate-400">
              {data.data.quote}
            </span>
          </p>
        </div>

        <div className="text-right">
          <p className="font-mono text-[9px] uppercase tracking-wider text-slate-500">
            Exchange Rate
          </p>

          <p className="mt-1 font-mono text-xs text-slate-300">
            1 {data.data.base} = {Number(data.data.rate).toFixed(4)} {data.data.quote}
          </p>
        </div>
      </div>
    </div>
  );
}