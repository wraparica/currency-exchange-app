export default function CurrencyListPanel({data}) {
    return (
    

      <div className="divide-y divide-slate-700/30">
 
        {data.map((currency) => (
            <div
              key={currency.quote}
              className="group flex items-center justify-between px-6 py-2 transition-colors hover:bg-slate-800/40"
            >
              {/* Currency */}
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-12 items-center justify-center rounded-lg bg-slate-800/70">
                  <span className="font-mono text-sm font-semibold text-amber-400">
                    {currency.quote}
                  </span>
                </div>
              </div>

              {/* Rate */}
              <div className="text-right">
                <p className="font-mono text-sm font-semibold text-slate-100">
                  {Number(currency.rate).toFixed(4)}
                </p>

                <p className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-slate-600">
                  Rate
                </p>
              </div>
            </div>
          ))}
      </div>
  );
}