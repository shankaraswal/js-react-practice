import React, { useState } from 'react'

const initialvalues = 6
const LimitedCounter = () => {
    const [count, setCount] = useState(initialvalues)

    const handleCounter = (type) => {
        console.log(type)
        const newcount = type === 'inc' ? count + 1 : count - 1
        setCount(newcount)
    }
    const handleReset = () => {
        setCount(initialvalues)
    }

    return (
        <>
            <p className="text-lg mb-4 text-orange-800">Limited counter toggeling</p>
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
            </div >
        </>
    )
}

export default LimitedCounter