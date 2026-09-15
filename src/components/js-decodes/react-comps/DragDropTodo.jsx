import React from 'react'

const DragDropTodo = () => {
    return (
        <div>

            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Create a todo list where items can be reordered via drag and drop</li>
                <li>Add new todos via an input field</li>
                <li>Mark todos as complete by clicking a checkbox</li>
                <li>Delete todos with an X button</li>
                <li>Drag items to reorder — visual feedback while dragging</li>
                <li>Use HTML5 drag events (dragstart, dragover, drop) OR a library like react-dnd</li>
                <li>Persist order to localStorage</li>
                <li>Show count: "X active, Y completed"</li>
                <li>Filter: All / Active / Completed</li>
                <li>Add "Clear completed" button</li>
            </ul>

        </div>
    )
}

export default DragDropTodo