import { useCallback, useState } from 'react';
import { exchangeCurrency } from '../services/currencyApi';

/**
 * Manages the fetch lifecycle (idle/loading/error/data) for a city search.
 */
export function useExchangeCurrency() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState(null);

  const convert = useCallback( async (base, quote, value) => {
    if (!base?.trim()) return;
    if (!quote?.trim()) return;
    if (!value?.trim()) return;

    setStatus('loading');
    setError(null);

    try {
      const result = await exchangeCurrency(base.trim(), quote.trim(), value.trim());
      console.log("pota", result)
      setData(result)
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  }, []);
  
  return { data, status, error, convert };
}