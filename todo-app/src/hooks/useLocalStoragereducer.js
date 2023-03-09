import { useReducer, useEffect } from "react";

function useLocalStorageReducer(key, defaultVal, reducer) {
    const [state, dispatch] = useReducer(reducer, defaultVal, () => {
        let Val;
        try {
            Val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
        }
        catch (e) {
            Val = defaultVal;
        }
        return Val;
    });
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);
    return [state, dispatch];
}

export default useLocalStorageReducer;
