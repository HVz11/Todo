import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultVal) {
    const [state, setState] = useState(() => {
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
    return [state, setState];
}

export default useLocalStorageState;
