import { DependencyList, useEffect } from 'react';
import useTimeoutFn from './useTimeout';

export type UseDebounceReturn = [() => boolean | null, () => void];

const useDebounce = (fn: () => void, ms = 0, deps: DependencyList = []): UseDebounceReturn => {
  const [isReady, cancel, reset] = useTimeoutFn(fn, ms);

  useEffect(reset, deps);

  return [isReady, cancel];
};

export default useDebounce;
