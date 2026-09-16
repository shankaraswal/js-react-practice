import React, { useState } from 'react'

const stars = [1, 2, 3, 4, 5];
const StarRating = () => {
    const [rating, setRating] = useState(0)

    return (
        <>
            <h2 className="text-lg mb-4 text-sky-700 font-bold">
                Star Rating
            </h2>
            <div className="pb-4 flex flex-row gap-10">
                <div className='w-1/2 requiremetns'>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>✅ Display 5 stars for rating (0 to 5)</li>
                        <li>✅ Click a star to set the rating</li>
                        <li>❌ Hover over a star to preview — highlight all stars up to hovered one</li>
                        <li>❌ On hover leave, revert to the committed rating</li>
                        <li>✅ Show "Rating: X / 5" text below</li>
                        <li>❌ Support half-star ratings (0.5 steps) via click on left/right half of star</li>
                        <li>❌ Keyboard accessible: arrow keys to change, Enter to commit</li>
                        <li>❌ Read-only mode (disabled) for showing average ratings</li>
                        <li>✅ Show a "Clear" button to reset rating to 0</li>
                        <li>❌ Persist rating to localStorage</li>
                    </ul>
                </div>

                <div className="preview-block flex-1 border rounded-xl bg-gray-50 border-gray-200">
                    <div className="flex flex-col gap-4 p-8 h-full justify-center items-center bg-gray-50 w-full">
                        <div className="flex items-center gap-2">
                            {stars.map((star) => (
                                <button
                                    onClick={() => setRating(star)}
                                    key={star}
                                    type="button"
                                    aria-label={`Rate ${star} star`}
                                    className="w-10 h-10 transition-transform hover:scale-110"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className={`w-10 h-10 ${rating >= star ? "text-yellow-400" : "text-gray-300"}`}
                                        fill="currentColor"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </button>
                            ))}
                        </div>

                        <p className="text-sm text-gray-700 font-medium">
                            Rating: <span className="text-yellow-600 font-bold">{rating}</span> / 5
                        </p>

                        <button
                            onClick={() => setRating(0)}
                            type="button"
                            className="px-4 py-1.5 text-sm rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition-colors"
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StarRating