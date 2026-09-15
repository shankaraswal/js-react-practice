import React from 'react'

const CountdownTimer = () => {
    return (
        <div>

            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Create a countdown timer starting from a given seconds value</li>
                <li>Start / Pause / Reset buttons</li>
                <li>Display time in MM:SS format</li>
                <li>When timer hits 0, show "Time's up!" message and play a beep (optional)</li>
                <li>Allow user to set custom starting time via input field</li>
                <li>Add preset buttons: 30s, 1min, 5min, 10min</li>
                <li>Progress ring or bar showing remaining time percentage</li>
                <li>Change color to red when lt 10 seconds remaining</li>
                <li>Prevent multiple intervals from stacking (cleanup properly)</li>
                <li>Pause should preserve remaining time — resume continues from there</li>
            </ul>

        </div>
    )
}

export default CountdownTimer