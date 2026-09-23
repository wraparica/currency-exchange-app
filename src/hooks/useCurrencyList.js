import { useEffect, useState } from 'react';
import { fetchCurrencyList } from '../services/currencyApi';

/**
 * Manages the fetch lifecycle (idle/loading/error/data) for a city search.
 */
export function useCurrencyList() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState(null);
  useEffect(() => {
  async function loadData() {
    setStatus('loading');
    setError(null);

    try {
      const result = await fetchCurrencyList();
      setData(result);
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  }

  loadData();
}, []);

  return { data, status, error };
}