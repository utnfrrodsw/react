import { useState, useEffect } from "react";

export default function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, { ...options, signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted!');
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      console.log('Componente desmontándose, abortando la petición fetch...');
      controller.abort();
    };
  }, [url, options]);

  return { data, loading, error };
}