import {useCallback, useEffect, useRef} from 'react'

export function useTimeOut(callback, delay) {
    const callbackRef = useRef(callback);
    const timeoutRef = useRef();

    useEffect(() => {
        callbackRef.current = callback
    }, [callback]);

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
    }, [delay])
    const clear = useCallback(() => {
        if (timeoutRef.current) {
            clearInterval(timeoutRef.current)
        }
    }, [])

    useEffect(() => {
        set()
        return clear;
    }, [delay, set, clear]);

    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set])

    return {reset, clear}
}