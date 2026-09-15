import { useEffect, useCallback, useState } from "react"

const intialObj = {
    width: 1366,
    height: 768,
}
const useWindowResize = () => {
    const delay = 200;
    const [size, setSize] = useState(intialObj);
    const [manualSize, setManualResize] = useState(intialObj);

    useEffect(() => {
        let debounceTimer;
        const handleWindowResize = () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                setSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }, delay);
        };

        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
            clearTimeout(debounceTimer);
        };
    }, [delay]);


    useEffect(() => {
        window.resizeTo(manualSize.width, manualSize.height);
    }, [manualSize.height, manualSize.width]);

    const resizeTo = useCallback(({ width, height }) => {
        console.log('resizeTo called')
        setManualResize({ width: width, height: height });
        window.resizeTo(width, height);
    }, []);

    return { size, manualSize, resizeTo }

}

export default useWindowResize