import { useEffect, useState } from 'react';

export function useSessionStorageState<State>(initialState: State, key: string) {
  const [state, setState] = useState(() => {
    // 1. Ladda från LS
    const stringState = sessionStorage.getItem(key);
    if (!stringState) return initialState;
    return JSON.parse(stringState) as State;
  });

  // 2. Spara till LS
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState] as const;
}

