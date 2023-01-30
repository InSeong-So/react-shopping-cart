import { useState, useEffect, useCallback } from 'react';

function useFetch<T>(page: number) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>();

  const fetchData = useCallback(
    async ({ signal }: AbortController) => {
      try {
        setLoading(true);
        const response = await fetch(`/products?start=${page * 8 - 7}&end=${page * 8}`, { signal });
        const result = await response.json();
        console.log(result);
        setData(result);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        // console.error(err);
      }
    },
    [page],
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller);
    return () => controller.abort();
  }, [fetchData, page]);

  return { loading, data };
}

export default useFetch;
