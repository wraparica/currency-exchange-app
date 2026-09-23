import { useState } from 'react';

export default function ExchangeCurrency({ isLoading, currencies, onConvert }) {
  const [value, setValue] = useState('');
  const [fromCurrency, setFromCurrency] = useState("PHP");
  const [toCurrency, setToCurrency] = useState("USD");
  function handleSubmit(e) {
    e.preventDefault();
    onConvert(fromCurrency, toCurrency, value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 w-full"
    >
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end">

        {/* From + To */}
        <div className="flex w-full flex-1 gap-3">
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <label
              htmlFor="fromCurrency"
              className="font-mono text-xs uppercase tracking-wider text-slate-500"
            >
              From
            </label>

            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full rounded-md border border-[#253241] bg-[#101820]
                     px-3 py-3 font-mono text-sm text-slate-100 outline-none
                     focus:border-amber-400/60"
            >
              {currencies.map((currency) => (
                <option
                  key={currency.iso_code}
                  value={currency.iso_code}
                >
                  {currency.iso_code}
                </option>
              ))}
            </select>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <label
              htmlFor="toCurrency"
              className="font-mono text-xs uppercase tracking-wider text-slate-500"
            >
              To
            </label>

            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full rounded-md border border-[#253241] bg-[#101820]
                     px-3 py-3 font-mono text-sm text-slate-100 outline-none
                     focus:border-amber-400/60"
            >
              {currencies.map((currency) => (
                <option
                  key={currency.iso_code}
                  value={currency.iso_code}
                >
                  {currency.iso_code}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Amount + Check */}
        <div className="flex w-full flex-1 gap-3">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter an amount..."
            aria-label="Amount"
            className="min-w-0 flex-1 rounded-md border border-[#253241]
                   bg-[#101820] px-4 py-3 font-sans text-sm text-slate-100
                   placeholder:text-slate-500 outline-none transition-colors
                   duration-200 focus:border-amber-400/60
                   focus:ring-2 focus:ring-amber-400/10"
          />

          <button
            type="submit"
            disabled={isLoading || !value.trim()}
            className="shrink-0 rounded-md border border-amber-400/40
                   bg-amber-400/10 px-4 py-3 font-mono text-xs uppercase
                   tracking-widest text-amber-400 transition-all duration-200
                   hover:border-amber-400/60 hover:bg-amber-400/20
                   active:scale-[0.97] disabled:cursor-not-allowed
                   disabled:opacity-40 disabled:hover:bg-amber-400/10
                   sm:px-5"
          >
            {isLoading ? 'Reading…' : 'Check'}
          </button>
        </div>

      </div>
    </form>
  );
}
