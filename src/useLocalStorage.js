import {useEffect, useState} from 'react'

function getValueFromStorage(key, initialState) {
    const value = JSON.parse(localStorage.getItem(key));
    if (key) {
        return value
    }
    if (initialState instanceof Function) {
        return initialState();
    }
    return initialState;
}

export function useLocalStorage(key, initialState) {
    const [value, setValue] = useState(() =>getValueFromStorage(key, initialState));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value]);
    return [value, setValue];
}