import React from 'react'

function FetchDemo() {
    return (
        <div>

            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Create a custom hook <code>useFetch(url)</code> that returns <code>{`{ data, loading, error, refetch }`}</code></li>
                <li>Hook should fetch data on mount and when URL changes</li>
                <li>Handle loading state — show spinner while fetching</li>
                <li>Handle error state — show error message with retry button</li>
                <li>Use AbortController to cancel pending requests on unmount</li>
                <li>Provide a <b>Refetch</b> button to manually re-fetch</li>
                <li>Add a URL input field to fetch any public API</li>
                <li>Add preset buttons for common APIs (users, posts, todos from jsonplaceholder)</li>
                <li>Display fetched data in a formatted JSON <code>{`<pre>`}</code> block</li>
                <li>Show request duration in ms</li>
                <li>Handle empty URL gracefully (don't fetch)</li>
                <li>Prevent race conditions when URL changes rapidly</li>
            </ul>

        </div>
    )
}

export default FetchDemo