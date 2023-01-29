import useDebounce from '@/hooks/useDebounce';
import { useCallback, useRef, useState } from 'react';
import parangClient from './ParangClient';

type FetchData<T> = {
  data: T | null;
  isLoading: boolean;
};

const useFetch = <T>(url: string): FetchData<T> => {
  const isLoading = useRef(true);
  const [data, setData] = useState<T | null>(null);

  const fetchData = useCallback(
    async ({ signal }: AbortController) => {
      try {
        const { data } = await parangClient.get<T>(url, { signal });
        setData(data);
        isLoading.current = false;
      } catch (error) {
        console.log(error);
        isLoading.current = false;
      }
    },
    [url],
  );

  useDebounce(
    () => {
      const controller = new AbortController();

      isLoading.current = true;
      fetchData(controller);

      return () => controller.abort();
    },
    1000,
    [fetchData, url],
  );

  return { data, isLoading: isLoading.current };
};

export default useFetch;
