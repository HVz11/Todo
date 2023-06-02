import { useReducer, useEffect } from "react";

function useLocalStorageReducer(key, defaultVal, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
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
  return [state, dispatch];
}

export default useLocalStorageReducer;
