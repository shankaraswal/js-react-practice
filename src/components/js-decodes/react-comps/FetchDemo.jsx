import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { LoadingMessage, ErrorMessage, NoRecordsMessage } from '../../shared-comps/HelperComps'

function FetchDemo() {
    const [endPoint, setEndPoint] = useState("users")
    const { data, loading, httpClient, error, URL, BASE_URL } = useFetch()

    const loadUsers = async () => {
        const res = await httpClient(endPoint);
        console.log(res);
    };

    if (loading) return (<LoadingMessage />)
    if (error) return (<ErrorMessage />)
    if (data?.length === 0) return (<NoRecordsMessage />)

    return (
        <>
            <h2 className="text-lg mb-4 text-sky-700 font-bold">
                {`useFetch hook with {data, loading, error, httpClient} ==> ${BASE_URL}/${endPoint}`}
            </h2>

            <div className="pb-4 flex flex-col gap-10">
                <div className='w-full'>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>❌ Create a custom hook <code>useFetch(url)</code> that returns <code>{`{ data, loading, error, refetch }`}</code></li>
                        <li>❌ Hook should fetch data on mount and when URL changes</li>
                        <li>✅ Handle loading state — show spinner while fetching</li>
                        <li>❌ Handle error state — show error message with retry button</li>
                        <li>❌ Use AbortController to cancel pending requests on unmount</li>
                        <li>❌ Provide a <b>Refetch</b> button to manually re-fetch</li>
                        <li>✅ Add a URL input field to fetch any public API</li>
                        <li>❌ Add preset buttons for common APIs (users, posts, todos from jsonplaceholder)</li>
                        <li>✅ Display fetched data in a formatted JSON <code>{`<pre>`}</code> block</li>
                        <li>❌ Show request duration in ms</li>
                        <li>❌ Handle empty URL gracefully (don't fetch)</li>
                        <li>❌ Prevent race conditions when URL changes rapidly</li>
                    </ul>
                </div>

                <div>
                    <div className="mb-6 flex justify-end items-center gap-4 bg-sky-50 rounded-xl border border-sky-200 p-4">
                        <span className="text-sm text-gray-700 whitespace-nowrap">
                            Load data for <b>{URL}</b>
                        </span>
                        <input
                            type="text"
                            value={endPoint}
                            onChange={(e) => setEndPoint(e.target.value)}
                            placeholder="e.g. users, products, carts"
                            className="w-full max-w-md bg-white rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                        <button
                            onClick={loadUsers}
                            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-2xl text-xl transition-colors"
                        >
                            Load data
                        </button>
                    </div>

                    <h4 className="text-sm font-semibold text-gray-800 mb-2">
                        Total: <span className="text-sky-700">{data?.length ?? 0}</span>
                    </h4>

                    <pre className="bg-red-100 p-4 max-h-100 overflow-auto text-[10px] whitespace-pre-wrap break-words rounded-lg">
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </div>
            </div>
        </>
    )
}

export default FetchDemo