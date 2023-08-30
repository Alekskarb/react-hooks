import {useState} from "react";

export function useArray(defaultValue) {
    const [array, setArray] = useState(defaultValue);

    function push(element) {
        setArray((el) => [...el, element])
    }

    function update(index, newElement) {
        setArray(el => [
            ...el.slice(0, index),
            newElement,
            ...el.slice(index + 1, el.length)
        ])
    }

    function clear() {
        setArray([])
    }

    function remove(index) {
        setArray(el => [
            ...el.slice(0, index),
            ...el.slice(index + 1, el.length)
        ])
    }

    function filter(callback) {
setArray(el => el.filter(callback))
    }

    // return {array, push, update, clear, remove}
    return [array, {array, push, update, filter, clear, remove}]
}