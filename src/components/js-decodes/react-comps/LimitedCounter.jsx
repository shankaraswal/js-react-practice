import { useContext, useState } from 'react'
import MessageContext from './context-provider/MessageContext'

const initialvalues = 6
const LimitedCounter = () => {
    const [count, setCount] = useState(initialvalues)

    // MESSAGE CONTEXT API CODE
    const [newMsg, addNewMsg] = useState("");
    const { messages, addMessage, delMessage } = useContext(MessageContext);

    const handleCounter = (type) => {
        console.log(type)
        const newcount = type === 'inc' ? count + 1 : count - 1
        setCount(newcount)
    }
    const handleReset = () => {
        setCount(initialvalues)
    }


    // MESSAGE CONTEXT API CODE
    const handleNewMsg = () => {
        addMessage(newMsg)
        addNewMsg("")
    }

    const handleDelMsg = (ind) => {
        delMessage(ind)
    }


    return (
        <>
            <h2 className="text-lg mb-4 text-orange-800">Limited counter toggeling</h2>
            <div className="pb-4 flex flex-row">
                <div className='w-1/2'>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Counter starts from 0</li>
                        <li>Increment button — adds +1</li>
                        <li>Decrement button — subtracts -1</li>
                        <li>Increment button should be disabled when count is 10</li>
                        <li>Decrement button should be disabled when count is 0</li>
                        <li>A "Reset" button to bring the counter back to 0</li>
                        <li>Counter value color should be green when &gt; 5, otherwise red</li>
                    </ul>
                </div>
                <div className="pb-4 flex flex-col gap-4">
                    <div className="gap-4 flex flex-row justify-between">
                        <button
                            onClick={() => handleCounter('dec')}
                            disabled={count === 0}
                            className="px-10 py-4 bg-orange-500 text-white font-bold text-2xl rounded-2xl  disabled:opacity-50 disabled:cursor-not-allowed"
                        >Decrese </button>
                        <span
                            className={`inline-flex py-8 items-center justify-center font-bold text-4xl w-10 h-10 rounded-full
                                    ${count > 7
                                    ? 'text-green-500'
                                    : count < 4
                                        ? 'text-red-500'
                                        : 'text-black'
                                }`}
                        >
                            {count}
                        </span>
                        <button
                            onClick={() => handleCounter('inc')}
                            disabled={count === 10}
                            className="px-10 py-4 bg-orange-500 text-white font-bold text-2xl rounded-2xl  disabled:opacity-50 disabled:cursor-not-allowed"
                        >Increase</button>
                    </div>
                    <button
                        onClick={() => handleReset()}
                        disabled={initialvalues === count}
                        className="px-10 py-2 mx-auto bg-gray-500 text-white font-bold 
                        rounded-md disabled:opacity-20"

                    >Reset</button> </div>
            </div>

            {/* MESSAGECONEXT AND PROVIDER COMPS */}
            <div className="bg-green-50 my-10 p-10 border border-green-600 rounded-2xl">
                <h2>This green section is the cobination of MessageContext.jsx & MessageProvider.jsx components for test purposes</h2>
                <div className="bg-red-50 my-10 p-12 border border-amber-400 rounded-xl text-xl flex flex-col gap-2">
                    <h3 className="">this is a context api example: </h3>
                    <div className="flex flex-row gap-4">
                        <input
                            value={newMsg}
                            onChange={(e) => addNewMsg(e.target.value)}
                            type="text" className="flex-1 border border-gray-400 text bg-sky-50 text-lg px-4 py-2 rounded-md" />
                        <button
                            onClick={handleNewMsg}
                            className="w-52 bg-amber-500 text-white text-lg rounded-full px-6 py-2">Add New Message</button>
                    </div>
                </div>

                <div className="flex flex-col gap-2 my-6">
                    {messages.length > 0 && messages.map((msg) => (
                        <div
                            key={msg.id}
                            className="bg-white justify-between border-b items-center border-gray-300 flex flex-row py-2 px-4">
                            <p className="flex-1 bg-white px-4 flex">{msg.id}</p>
                            <p className="flex-1 bg-white px-4 flex">{msg.text}</p>
                            <button
                                onClick={() => handleDelMsg(msg.id)}
                                className="bg-red-500 text-white px-6 py-1.5 flex p-4 cursor-pointer hover:scale-110">Delete</button>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default LimitedCounter