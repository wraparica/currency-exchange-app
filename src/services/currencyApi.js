const CURRENCY_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';


export async function fetchDisplayCurrencies() {
  const url = `${CURRENCY_BASE_URL}/api/exchange/displayCurrencies`;

  let response;
  try {
    response = await fetch(url);
  } catch {
    throw new Error('Could not reach the currency server. Is the backend running?');
  }

  const payload = await response.json().catch(() => null);

  if (!response.ok || !payload?.success) {
    throw new Error(payload?.message || 'Something went wrong fetching the weatcurrencyher.');
  }

  return payload.data;
}

export async function fetchCurrencyList() {
  const url = `${CURRENCY_BASE_URL}/api/exchange/currencies`;

  let response;
  try {
    response = await fetch(url);
  } catch {
    throw new Error('Could not reach the currency server. Is the backend running?');
  }

  const payload = await response.json().catch(() => null);

  if (!response.ok || !payload?.success) {
    
    throw new Error(payload?.message || 'Something went wrong fetching the weatcurrencyher.');
    
  }
  console.log("potaka", payload.data)
  return payload.data;
}

export async function exchangeCurrency(base, quote, value) {
  const url = `${CURRENCY_BASE_URL}/api/exchange?base=${encodeURIComponent(base)}&quote=${encodeURIComponent(quote)}&amount=${encodeURIComponent(value)}`;

  let response;
  try {
    response = await fetch(url);
  } catch {
    throw new Error('Could not reach the currency server. Is the backend running?');
  }

  const payload = await response.json().catch(() => null);

  if (!response.ok || !payload?.success) {
    
    throw new Error(payload?.message || 'Something went wrong fetching the weatcurrencyher.');
    
  }
  return payload;
}