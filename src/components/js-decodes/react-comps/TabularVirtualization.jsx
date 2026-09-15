import React from 'react'

const TabularVirtualization = () => {
    return (
        <div>

            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Create a tabs component with 3 tabs: Profile, Settings, Posts</li>
                <li>Only active tab's content should be visible</li>
                <li>Active tab should have different styling (border, background, bold)</li>
                <li>Tab content should be loaded lazily on first visit</li>
                <li>Preserve each tab's scroll position and local state (e.g., form input)</li>
                <li>Support keyboard nav: left/right arrows to switch tabs</li>
                <li>Add close buttons on tabs (min 1 tab must remain open)</li>
                <li>Support dynamic tab addition via a "+" button</li>
                <li>Sync active tab with URL hash (#profile, #settings)</li>
                <li>Accessibility: proper ARIA roles (tablist, tab, tabpanel)</li>
            </ul>

        </div>
    )
}

export default TabularVirtualization