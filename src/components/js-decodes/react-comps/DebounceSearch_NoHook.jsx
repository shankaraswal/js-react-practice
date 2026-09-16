import React, { useEffect, useMemo, useState } from 'react'
import { LoadingMessage, ErrorMessage, NoRecordsMessage } from '../../shared-comps/HelperComps'

const Test = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [search, setSearch] = useState("")

    const [debounceData, setDebounceData] = useState("")

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const res = await fetch("https://dummyjson.com/products");
                if (!res.ok) {
                    console.log(`Else block error with status code ${res.status}`)
                }
                const results = await res.json();
                setData(results.products);
            } catch (err) {
                setError(true)
                console.log(`Catch block error ${err.message} with status code`)

            } finally {
                setLoading(false)
            }
        })();

    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceData(search)
        }, 500)
        return () => clearTimeout(timer)

    }, [search])


    const filterddata = useMemo(() => {
        return data.filter((item) => {
            return (item.description.toLowerCase()).includes(debounceData.toLowerCase())
        })
    }, [data, debounceData])


    if (loading) return (<LoadingMessage />)
    if (error) return (<ErrorMessage />)
    if (data?.length === 0) return (<NoRecordsMessage />)

    // console.log(filterddata)

    return (
        <>
            <h2 className="text-lg mb-4 text-sky-700 font-bold">Debounce Searching Without useDebounce Hook </h2>
            <div className="pb-4 flex flex-col gap-10">
                <div className='w-full'>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Debounce the search input using <code>useEffect</code> + <code>setTimeout</code> (no custom hook)</li>
                        <li>Fetch 100+ items from an API (e.g. dummyjson products)</li>
                        <li>Filter list only after user stops typing for the debounce delay</li>
                        <li>Display <b>"Searching..."</b> indicator while debounce is pending</li>
                        <li>Show count of <b>matched vs total</b> items (e.g. "12 of 100")</li>
                        <li>Highlight matched text in the results</li>
                        <li>Show <b>"No results found"</b> message when no matches</li>
                        <li>Provide a <b>delay slider</b> (100ms – 1000ms) to control debounce timing</li>
                        <li>Display current debounce delay value</li>
                        <li>Add a <b>clear button</b> to reset search and delay</li>
                        <li>Handle loading, error, and empty states properly</li>
                        <li>Use <code>useMemo</code> to optimize filtering</li>
                    </ul>
                </div>
                <div>
                    <div className="mb-6 flex justify-end items-center gap-4 bg-sky-50 rounded-xl border border-sky-200 p-4">
                        <span>Search: </span>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search recipes..."
                            className="w-full max-w-md bg-white rounded-lg border border-gray-300 px-4 py-2"
                        />
                    </div>
                    <h4>Total: {filterddata.length}</h4>
                    <pre className="bg-red-100 p-4 h-100! max-h-100 overflow-auto! text-[10px] whitespace-pre-wrap break-words">
                        {JSON.stringify(filterddata, null, 2)}
                    </pre>
                </div>
            </div>
        </>
    )
}

export default Test