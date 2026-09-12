import React, { useState } from 'react'

const intialValues = {
    like: { count: 100, disabled: false },
    dislike: { count: 50, disabled: false }
}

const ToggleLIkeDislike = () => {
    const [feedback, setFeedback] = useState(intialValues)

    const handleFeedback = (type) => {
        const newtype = type === 'like' ? 'dislike' : 'like'
        setFeedback({
            ...feedback,
            [type]: { count: feedback[type].count + 1, disabled: true },
            [newtype]: { count: intialValues[newtype].count, disabled: intialValues[newtype].disabled }
        })
    }

    return (
        <>
            <p className="text-lg mb-4 text-sky-700 font-bold">Like and Dislike button's count toggeling</p>
            <div className="pb-4 flex flex-row">
                <div className='w-1/2'>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Like starts at 100, Dislike starts at 50</li>
                        <li>Clicking a button increments its count by +1</li>
                        <li>Clicked button becomes disabled</li>
                        <li>Clicking the other button resets the first one to its initial count</li>
                        <li>Only one of Like / Dislike can be active at a time</li>
                    </ul>
                </div>
                <div className="pb-4 flex flex-col gap-4">
                    <div className="gap-4 flex flex-row justify-between">
                        <button
                            onClick={() => handleFeedback('like')}
                            disabled={feedback.like.disabled}
                            className="px-10 py-4 bg-sky-700 text-white font-bold text-2xl rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >Like {feedback.like.count}</button>
                        <button
                            onClick={() => handleFeedback('dislike')}
                            disabled={feedback.dislike.disabled}
                            className="px-10 py-4 bg-sky-700 text-white font-bold text-2xl rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >Dislike {feedback.dislike.count}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToggleLIkeDislike