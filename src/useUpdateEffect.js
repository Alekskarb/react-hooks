import {useEffect, useRef} from "react";

export function useUpdateEffect(callback, dependencies) {
    const firstRenderRef = useRef(false)

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = true
            return;
        }
        return callback();
    }, dependencies);
}