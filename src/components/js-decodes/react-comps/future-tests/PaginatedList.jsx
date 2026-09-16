import React from 'react'

function PaginatedList() {
    return (
        <div>

            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Fetch products from an API with pagination support</li>
                <li>Display 10 items per page in a card grid</li>
                <li>Show prev/next buttons for navigation</li>
                <li>Disable prev on first page, next on last page</li>
                <li>Show page numbers (1, 2, 3, ...) with current page highlighted</li>
                <li>Show "Showing X–Y of Z items" text</li>
                <li>Add a page size dropdown (5, 10, 20, 50)</li>
                <li>Loading state while fetching each page</li>
                <li>Error state with retry button</li>
                <li>Cache already-fetched pages (don't re-fetch on back navigation)</li>
                <li>Bonus: sync page number with URL query param</li>
            </ul>


        </div>
    )
}

export default PaginatedList