import React, { useState } from 'react'

const initialState = [
    {
        id: 1789234870688,
        task: "To address issues that do not require attention, run",
        completed: true
    },
    {
        id: 1789234936492,
        task: "Header should display Total: X and Completed: Y",
        completed: false
    },
    {
        id: 1789234895982,
        task: "Each todo should have a Delete button to remove that todo",
        completed: false
    },

]
const TodoApp = () => {
    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState(initialState)

    const handleTodoList = () => {
        const obj = {
            id: Date.now(),
            task: todo,
            completed: false
        }
        setTodoList([...todoList, obj])
        setTodo("")
    }
    const handleTodoStatus = (td) => {
        const updatedTodoList = todoList.map((item) => {
            if (item.id === td.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item
        })
        setTodoList(updatedTodoList)
    }

    const deleteTodo = (td) => {
        const updatedTodoList = todoList.filter((item) => {
            return item.id !== td.id && item
        })
        setTodoList(updatedTodoList)
    }

    const clearAllCompleted = () => {
        const updatedTodoList = todoList.map((item) => {
            if (item.completed) {
                return {
                    ...item,
                    completed: false
                }
            }
            return item
        })
        setTodoList(updatedTodoList)
    }

    const completedtasks = todoList.filter((item) => {
        return item.completed
    })

    return (
        <>
            <p className="text-lg mb-4 text-sky-700 font-bold"> Todo List with Add/Delete/Toggle</p>
            <div className="pb-4 flex flex-row">
                <div className='w-[40%]'>
                    <ul className="list-disc list-inside text-md text-gray-700 space-y-1">
                        <li>An input field where the user can type a todo</li>
                        <li>An "Add" button to add a new todo to the list</li>
                        <li>Pressing the Enter key should also add the todo (bonus)</li>
                        <li>Empty input should not be added</li>
                        <li>Each todo should have a "Delete" button to remove that todo</li>
                        <li>Clicking on a todo should toggle a strikethrough (mark as completed)</li>
                        <li>Header should display "Total: X" and "Completed: Y"</li>
                        <li>A "Clear Completed" button to remove all completed todos</li>
                    </ul>
                </div>
                <div className="pb-4 flex flex-col gap-4 w-[60%]">
                    <div className=''>
                        <div className="gap-4 flex flex-row justify-between">
                            <div className="flex gap-2">
                                <input
                                    onChange={(e) => setTodo(e.target.value)}
                                    type="text"
                                    value={todo}
                                    placeholder="Enter item"
                                    className="border border-gray-300 rounded-md px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 disabled:opacity-30"
                                    onClick={handleTodoList}
                                    disabled={todo === ""}
                                >
                                    Add
                                </button>
                                <button
                                    onClick={clearAllCompleted}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                                    Clear Completed
                                </button>
                            </div>
                            <div className="gap-4 flex">
                                <div className="font-medium text-green-500 text-md flex flex-col">
                                    <span>Total: {todoList.length}</span>
                                    <span>Total: {completedtasks.length}</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col max-w-full mt-4 h-64 overflow-y-auto'>
                            {todoList?.map((td, ind) => (
                                <div key={ind} className="flex items-center py-2 gap-2 border-t border-red-500">
                                    <span className="w-6">{ind + 1} </span>
                                    <span className="">{td.id}</span>
                                    <span className={`flex-1 ${td.completed ? "line-through" : ""}`}
                                    >{td.task}</span>
                                    <span className="flex flex-row gap-2">
                                        <input
                                            checked={td.completed}
                                            onChange={() => handleTodoStatus(td)} type="checkbox" />
                                        <button
                                            onClick={() => deleteTodo(td)}
                                            className="bg-red-500 text-white px-4 py-0.5 rounded-md hover:bg-red-600"
                                        >
                                            Delete
                                        </button></span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TodoApp