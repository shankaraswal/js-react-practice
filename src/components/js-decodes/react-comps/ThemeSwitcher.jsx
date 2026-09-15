import React from 'react'

const ThemeSwitcher = () => {
    return (
        <div>

            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Create a ThemeContext with light / dark / system options</li>
                <li>Provide a toggle button to switch themes</li>
                <li>Apply theme class to root element (html or body)</li>
                <li>Persist theme choice to localStorage</li>
                <li>On first load, default to system preference if no saved theme</li>
                <li>Listen to system preference changes when in "system" mode</li>
                <li>Show current active theme in the UI</li>
                <li>Demo component tree showing theme propagation (nested 3 levels)</li>
                <li>Use custom hook <code>useTheme()</code> for consuming context</li>
                <li>Handle SSR safety (window not defined)</li>
            </ul>


        </div>
    )
}

export default ThemeSwitcher