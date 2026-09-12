import { useState } from "react"

const useLocalStorage = (key, val = null) => {
    const [value, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : val;
        } catch (error) {
            console.error(error);
            return val;
        }
    });
    const [allLS, setAllLS] = useState()

    const setStorageData = (key, val) => {
        if (!key) return;
        const data = (typeof val === 'object' && val !== null)
            ? JSON.stringify(val)
            : (val || "value missing");
        localStorage.setItem(key, data);
    };

    const getStorageData = (key) => {
        const rawData = localStorage.getItem(key);
        try {
            setValue(JSON.parse(rawData));
        } catch {
            setValue(rawData);
        }
    };

    const getAllKeyVals = () => {
        const allls = Object.keys(localStorage).map((k) => {
            let rawVal = localStorage.getItem(k);
            let v;
            try {
                v = JSON.parse(rawVal);
            } catch {
                v = rawVal;
            }
            return { [k]: v };
        });

        console.log(allls);
        setAllLS(allls);
    };

    const removeStorageData = (key) => {
        localStorage.removeItem(key);
        setValue(null);
    };

    return { value, allLS, getStorageData, getAllKeyVals, setStorageData, removeStorageData }
}

export default useLocalStorage