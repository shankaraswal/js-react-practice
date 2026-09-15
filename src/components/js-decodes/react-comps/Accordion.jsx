import React from 'react'

function Accordion() {
    return (
        <div>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Create an accordion with 5 FAQ items</li>
                <li>Click on a header to expand/collapse its content</li>
                <li>Only one section open at a time (accordion behavior) — optional single/multi toggle</li>
                <li>Animate the expand/collapse with CSS transitions (max-height or grid trick)</li>
                <li>Show chevron icon that rotates based on open/closed state</li>
                <li>Support keyboard navigation: Tab to focus, Enter/Space to toggle</li>
                <li>Add a "Expand All" / "Collapse All" button</li>
                <li>Preserve open state when list order changes</li>
                <li>Make it a reusable component that accepts items as props</li>
            </ul>

        </div>
    )
}

export default Accordion