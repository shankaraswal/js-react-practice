import React from 'react'

function MultiStepForm() {
    return (
        <div>

            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Create a 3-step form: <b>Personal Info</b>, <b>Address</b>, <b>Review</b></li>
                <li>Show a progress indicator (e.g., "Step 2 of 3") with visual bar</li>
                <li><b>Next</b> button moves to next step, <b>Back</b> to previous</li>
                <li>Next button disabled if current step's required fields are empty</li>
                <li>Each step's data should persist when navigating back and forth</li>
                <li><b>Review</b> step shows all collected data in a read-only summary</li>
                <li><b>Submit</b> button shows the final data as JSON in an alert/console</li>
                <li>Add validation: email format, phone 10 digits, pin code 6 digits</li>
                <li>Show validation errors below each field on blur or on Next click</li>
                <li>Add a <b>Reset</b> button that clears everything and returns to step 1</li>
                <li>Handle browser back button gracefully (optional bonus)</li>
            </ul>

        </div>
    )
}

export default MultiStepForm