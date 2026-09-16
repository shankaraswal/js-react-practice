import React from 'react'

function StarRating() {
    return (
        <div>

            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Display 5 stars for rating (0 to 5)</li>
                <li>Click a star to set the rating</li>
                <li>Hover over a star to preview — highlight all stars up to hovered one</li>
                <li>On hover leave, revert to the committed rating</li>
                <li>Show "Rating: X / 5" text below</li>
                <li>Support half-star ratings (0.5 steps) via click on left/right half of star</li>
                <li>Keyboard accessible: arrow keys to change, Enter to commit</li>
                <li>Read-only mode (disabled) for showing average ratings</li>
                <li>Show a "Clear" button to reset rating to 0</li>
                <li>Persist rating to localStorage</li>
            </ul>

        </div>
    )
}

export default StarRating