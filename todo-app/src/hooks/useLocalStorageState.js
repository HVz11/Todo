import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultVal) {
  const [state, setState] = useState(() => {
    let Value;
    try {
      Value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal)
      );
    } catch (e) {
      Value = defaultVal;
    }
    return Value;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return [state, setState];
}

export default useLocalStorageState;
