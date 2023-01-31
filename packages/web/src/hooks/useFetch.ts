import { useState, useEffect, useCallback } from 'react';

function useFetch<T>(url: string) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>();

  const fetchData = useCallback(
    async ({ signal }: AbortController) => {
      setLoading(true);

      try {
        const response = await fetch(url, { signal });
        const result = await response.json();

        setData(result);
      } catch (err) {
        if ((err as { code: number }).code === 20) return;
        console.dir(err);
      } finally {
        setLoading(false);
      }
    },
    [url],
  );

  useEffect(() => {
    const controller = new AbortController();
    void fetchData(controller);
    return () => controller.abort();
  }, [fetchData, url]);

  return { loading, data };
}

export default useFetch;
