import {useEffect, useState} from 'react'
export function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue)
    function toggleValue() {
        setValue((prevState) => {
            return typeof value === 'boolean' ? value : !prevState
        })
    }
    return [value, toggleValue];
}