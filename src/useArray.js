import {useState} from "react";

export function useArray(defaultValue) {
    const [array, setArray] = useState(defaultValue);
    function push(element) {
        setArray((el) => [...el, element])
    }
    return {
        array, push
    }
}