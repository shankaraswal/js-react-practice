import React from 'react'

const InfiniteScrollList = () => {
    return (
        <div>


            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Load products from API 10 at a time</li>
                <li>Automatically load next page when user scrolls near bottom</li>
                <li>Use IntersectionObserver API with a sentinel element at the bottom</li>
                <li>Show loading spinner while fetching next page</li>
                <li>Stop loading when no more data available — show "End of list"</li>
                <li>Handle errors with retry button</li>
                <li>Prevent duplicate requests when scroll is very fast</li>
                <li>Clean up IntersectionObserver on unmount</li>
                <li>Show count: "Loaded X of Y items"</li>
                <li>Bonus: Add "Load More" button as fallback for accessibility</li>
            </ul>


        </div>
    )
}

export default InfiniteScrollList