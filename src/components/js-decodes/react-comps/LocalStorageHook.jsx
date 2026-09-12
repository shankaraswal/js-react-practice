import React, { useState } from 'react'
import useLocalStorage from './hooks/useLocalStorage'


const LocalStorageHook = () => {
    const [keyname, setKeyname] = useState()
    const [keyval, setKeyval] = useState()


    const {
        value,
        allLS,
        setStorageData,
        getStorageData,
        getAllKeyVals,
        removeStorageData
    } = useLocalStorage();

    const clearInputs = () => {
        setKeyname("")
        setKeyval("")
    }

    const handleSet = () => {
        setStorageData(keyname, keyval);
        clearInputs();
    }

    const handleGet = () => {
        getStorageData(keyname);
        clearInputs();
    }

    const handleGetAll = () => {
        getAllKeyVals();
        clearInputs();
    }

    const handleDelete = () => {
        removeStorageData(keyname);
        clearInputs();
    }

    const btn_class = "px-3 py-1.5 text-sm text-white rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer active:scale-95"
    const input_class = "p-3 text-sm border-2 rounded-md border-gray-400 bg-white"

    return (
        <>
            <p className="text-lg mb-4 text-sky-700 font-bold">Create hook to save and retrieve data from local storage </p>
            <div className="pb-4 flex flex-row gap-4">
                <div className="w-[40%] shrink-0">
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Create a custom hook <code>useLocalStorage</code> to manage local storage operations</li>
                        <li>Provide input fields for <b>Key Name</b> and <b>LS value to store</b></li>
                        <li><b>Set to LS:</b> Save key-value pair to local storage and refresh list</li>
                        <li><b>Get to LS:</b> Retrieve value for given key name and show in preview</li>
                        <li><b>Get all LS data:</b> Fetch all key-value pairs stored in local storage</li>
                        <li><b>Delete to LS:</b> Remove selected key from local storage and update preview</li>
                        <li>Clearing/Submitting inputs should reset input fields automatically</li>
                        <li>Display single key preview and all local storage pairs in structured card layout</li>
                    </ul>
                </div>
                <div className="flex-1 bg-red-50 p-4">
                    <div className="flex flex-col justify-between items-center gap-4 w-full">
                        <div className="flex gap-4 flex-row w-full">
                            <span className='flex flex-col gap-4 w-1/2 text-center justify-start'><b>Key Name:</b>
                                <input
                                    value={keyname}
                                    onChange={(e) => setKeyname(e.target.value)}
                                    className={`${input_class}`} type="text" /></span>
                            <span className='flex flex-col w-1/2 gap-4 text-center justify-start'><b>LS value to store:</b>
                                <textarea
                                    value={keyval}
                                    onChange={(e) => setKeyval(e.target.value)}
                                    className={`${input_class} h-24`} /></span>


                        </div>
                        <div className="flex gap-4 flex-row">
                            <button
                                type="button"
                                onClick={handleSet}
                                className={`${btn_class} bg-orange-600`}
                            >
                                Set to LS
                            </button>

                            <button
                                type="button"
                                onClick={handleGet}
                                className={`${btn_class} bg-teal-600`}
                            >
                                Get to LS
                            </button>

                            <button
                                type="button"
                                onClick={handleGetAll}
                                className={`${btn_class} bg-teal-600`}
                            >
                                Get all LS data
                            </button>

                            <button
                                type="button"
                                onClick={handleDelete}
                                className={`${btn_class} bg-violet-600`}
                            >
                                Delete to LS
                            </button>
                        </div>
                        <div className='text-center flex gap-2 flex-col mb-6'>
                            <div className='text-left flex gap-2 flex-col w-full'>
                                <h3 className='text-sm font-bold text-gray-800'>Key's Value:</h3>
                                <div className='bg-white p-3 rounded-md border border-gray-200 shadow-sm flex flex-col gap-1'>
                                    <span className='text-xs font-semibold text-teal-700'>
                                        Key: {keyname || "No key selected"}
                                    </span>
                                    <pre className='bg-gray-50 p-2 rounded text-xs text-gray-800 whitespace-pre-wrap break-all font-mono border border-gray-100'>
                                        {value !== null && value !== undefined
                                            ? (typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value))
                                            : "null"}
                                    </pre>
                                </div>
                            </div>
                        </div>
                        <div className='text-left flex gap-3 flex-col w-full'>
                            <h3 className='text-sm font-bold text-gray-800'>All LS key/values:</h3>
                            <div className='flex flex-col gap-2 max-h-80 overflow-y-auto pr-1'>
                                {allLS && allLS.length > 0 ? (
                                    allLS.map((item, index) => {
                                        const key = Object.keys(item)[0];
                                        const value = item[key];

                                        return (
                                            <div key={index} className='bg-white p-3 rounded border border-gray-200 shadow-sm flex flex-col gap-1'>
                                                <span className='text-xs font-semibold text-teal-700'>Key: {key}</span>
                                                <pre className='bg-gray-50 p-2 rounded text-xs text-gray-800 whitespace-pre-wrap break-all font-mono border border-gray-100'>
                                                    {typeof value === 'object' ? JSON.stringify(value, null, 2) : String(value)}
                                                </pre>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p className='text-xs text-gray-500 italic'>No data in Local Storage</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default LocalStorageHook