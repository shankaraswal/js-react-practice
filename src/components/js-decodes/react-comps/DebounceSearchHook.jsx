import React from 'react'

function DebounceSearchHook() {
    return (
        <div>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Create a custom hook <code>useDebounce(value, delay)</code> that returns a debounced value</li>
                <li>Use the hook to debounce a search input field</li>
                <li>Input field for searching through a list of 100+ items</li>
                <li>Only filter the list after user stops typing for <b>500ms</b></li>
                <li>Display "Searching..." while debounce is pending</li>
                <li>Show count of matched vs total items</li>
                <li>Highlight matched text in the results</li>
                <li>Show "No results found" if no matches</li>
                <li>Provide a delay slider to control debounce timing (100ms – 1000ms)</li>
                <li>Display current debounce delay value</li>
                <li>Add a clear button to reset search</li>
            </ul>
        </div>
    )
}

export default DebounceSearchHook