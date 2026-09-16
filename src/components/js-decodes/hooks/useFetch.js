import { useCallback, useState } from "react"


const useFetch = (base_url) => {
    const BASE_URL = base_url || "https://fakestoreapi.com"
    const [URL, setURL] = useState(false)
    const [data, setData] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false);

    const httpClient = useCallback(async (ep, method = "GET", body = null) => {
        const options = {
            method,
            headers: { "Content-Type": "application/json" },
            body: body ? JSON.stringify(body) : undefined,
        }
        setURL(`${BASE_URL}/${ep}`)

        try {
            setLoading(true);
            setError(false);
            const res = await fetch(`${BASE_URL}/${ep}`, options);

            if (!res.ok) throw new Error(`HTTP ${res.status}`);

            const results = await res.json();
            setData(results);
            return results;
        } catch (err) {
            setError(true);
            console.error(err);
            return null;
        } finally {
            setLoading(false);
        }
    }, [BASE_URL]);

    return { httpClient, error, data, loading, BASE_URL, URL }
}

export default useFetch