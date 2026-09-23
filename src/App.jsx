import { useDisplayCurrency } from './hooks/useDisplayCurrency';
import { useCurrencyList } from './hooks/useCurrencyList';
import { useExchangeCurrency } from './hooks/useExchangeCurrency';
import ExchangeCurrency from './components/ExchangeCurrency';
import CurrencyListPanel from './components/CurrencyListPanel';
import { EmptyState, LoadingState, ErrorState } from './components/StatusStates';
import ConversionPanel from './components/ConversionPanel';

export default function App() {

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0F1620] text-slate-100">

      {/* Background glow */}
      <div
        className="pointer-events-none fixed left-1/2 top-0 h-[36rem] w-[36rem]
                   -translate-x-1/2 -translate-y-1/3 rounded-full
                   bg-amber-400/10 blur-[120px]"
        aria-hidden="true"
      />

      {/* Two Exchange components */}
      <div className="relative mx-auto grid min-h-screen w-full max-w-[1400px] grid-cols-1 gap-10 px-8 py-15 md:grid-cols-2">

        <Exchange />

        <CurrencyList />

      </div>

    </div>
  );
}

function Exchange() {
  const { data: currencyList, status: currencyListStatus, error: currencyListError } = useCurrencyList();
  const { data: currencyData, status: currencyStatus, error: currencyError, convert } = useExchangeCurrency();
  return (
    <div className="relative flex min-h-screen flex-col justify-center px-5 py-12">
      <header className="mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
          Currency
        </p>

        <h1 className="font-serif text-xl text-slate-50">
          Exchange
        </h1>
      </header>

      <ExchangeCurrency
        isLoading={currencyStatus === "loading"}
        currencies={currencyList}
        onConvert={convert}
      />

      <div className="mt-6">
        {currencyStatus === "idle" && <EmptyState />}

        {(currencyStatus === "loading" || currencyListStatus === "loading") && <LoadingState />}

        {currencyError === "error" && (
          <ErrorState message={currencyError} />
        )}
        {currencyListError === "error" && (
          <ErrorState message={currencyListError} />
        )}
        {currencyStatus === 'success' && currencyData && <ConversionPanel data={currencyData} />}
        
      </div>
    </div>
  );
}


function CurrencyList() {
  const { data, status, error } = useDisplayCurrency();
  return (
  <div className="relative flex min-h-screen flex-col justify-center px-5 py-12">
        <div className="flex items-center justify-between border-b border-slate-700/50 px-6 py-5">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">
            Currency
          </p>

          <h1 className="font-serif text-xl text-slate-50">
            Rates
          </h1>
        </div>
      </div>

        <div className="mt-6">
            {status === "idle" && <EmptyState />}

            {status === "loading" && <LoadingState />}

            {status === "error" && (
              <ErrorState message={error} />
            )}

            {status === "success" && data && (
              <CurrencyListPanel data={data} />
            )}
        </div>
    </div>
  );
}

