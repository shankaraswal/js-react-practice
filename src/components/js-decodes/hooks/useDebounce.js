import React, { useEffect, useState } from "react";

const useDebounce = (value, delay)=>{
    const [debounced, setDebounced] = useState(value)
    useEffect(()=>{
        const deb_timer= setTimeout(()=>{
            setDebounced(value)
        },delay)

        return ()=> clearTimeout(deb_timer)

    },[value, delay])

    return {debounced}
}

export default useDebounce