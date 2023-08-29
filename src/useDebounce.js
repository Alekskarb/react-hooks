import {useEffect, useState} from 'react'
import {useTimeOut} from "./useTimeOut";

export function useDebounce(callback, delay, dependencies) {
    const {reset, clear} = useTimeOut(callback, delay)
    useEffect(reset, [...dependencies, reset])
    // useEffect(() => clear(), []); = below - identical code
    useEffect(clear, []);
}