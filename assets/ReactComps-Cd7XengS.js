const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LimitedCounter-CjCXNSeX.js","assets/index-CJ-cxNaP.js","assets/index-C2t-uLsP.css","assets/LocalStorageHook-BcCqp62U.js","assets/SearchableList-CsIAuBsU.js","assets/TodoApp-CK3QyYB8.js","assets/ToggleLIkeDislike-v0rGp628.js"])))=>i.map(i=>d[i]);
import{j as e,r as l,_ as s}from"./index-CJ-cxNaP.js";import{h as r,a as d}from"./atom-dark-yKG7fCI5.js";const n=`import React, { useState } from 'react'

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
                            className={\`inline-flex py-8 items-center justify-center font-bold text-4xl w-10 h-10 rounded-full
                                    \${count > 7
                                    ? 'text-green-500'
                                    : count < 4
                                        ? 'text-red-500'
                                        : 'text-black'
                                }\`}
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

export default LimitedCounter`,c=`import React, { useState } from 'react'
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
                                    className={\`\${input_class}\`} type="text" /></span>
                            <span className='flex flex-col w-1/2 gap-4 text-center justify-start'><b>LS value to store:</b>
                                <textarea
                                    value={keyval}
                                    onChange={(e) => setKeyval(e.target.value)}
                                    className={\`\${input_class} h-24\`} /></span>


                        </div>
                        <div className="flex gap-4 flex-row">
                            <button
                                type="button"
                                onClick={handleSet}
                                className={\`\${btn_class} bg-orange-600\`}
                            >
                                Set to LS
                            </button>

                            <button
                                type="button"
                                onClick={handleGet}
                                className={\`\${btn_class} bg-teal-600\`}
                            >
                                Get to LS
                            </button>

                            <button
                                type="button"
                                onClick={handleGetAll}
                                className={\`\${btn_class} bg-teal-600\`}
                            >
                                Get all LS data
                            </button>

                            <button
                                type="button"
                                onClick={handleDelete}
                                className={\`\${btn_class} bg-violet-600\`}
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
export default LocalStorageHook`,u=`import React, { useEffect, useState } from 'react'

const SearchableList = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true);
    const [searchkey, setSearchkey] = useState("")
    const [sortOrder, setSortOrder] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    'https://fakestoreapi.com/products'
                );
                const results = await res.json();
                setProducts(results);
                setLoading(false);
            } catch (err) {
                setError(true);
                setLoading(false);
                throw new Error(\`Have an errror \${err}\`)
            }
        };
        getProducts();
    }, [])

    const handleSort = (order) => {
        setSortOrder(order)
    };

    const data = [...products]
        .filter((item) =>
            item.title
                .toLowerCase()
                .includes(searchkey.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === "asc") {
                return a.price - b.price;
            }

            if (sortOrder === "desc") {
                return b.price - a.price;
            }

            return 0;
        });

    // console.log(data)

    if (error) return <p className='min-h-50 bg-red-100 flex justify-center items-center'>No data available</p>;
    if (loading) return <p className='min-h-50 bg-teal-100 flex justify-center items-center'>Data loading...</p>;
    if (!products.length) return <p className='min-h-50 bg-sky-100 flex justify-center items-center'>No products available</p>;

    return (
        <>
            <p className="text-lg mb-4 text-sky-700 font-bold"> Search Filter</p>
            <div className="pb-4 flex flex-col">
                <div className='w-[40%]'>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Given an array of items: "https://fakestoreapi.com/products"</li>
                        <li>There should be a search input field</li>
                        <li>When the user types, only items containing the search text should be shown</li>
                        <li>The search should be case insensitive</li>
                        <li>If no match is found, show "No results found"</li>
                        <li>Clearing the input field should bring back all items</li>
                    </ul>
                </div>
                <div className='mt-4'>
                    <div className='flex flex-row justify-between'>
                        <h2 className="text-2xl mb-4 text-orange-600 font-bold">Product List </h2>
                        <div className='flex flex-row gap-4'>
                            <FilterData searchKey={setSearchkey} />
                            <Sorting handleSort={handleSort} />
                        </div>
                    </div>
                    <div className='flex flex-col max-w-full mt-4 h-250 overflow-y-auto'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {!data.length && <>no records found</>}
                            {data.map((product, ind) => <ProductCard key={ind} seq={ind + 1} product={product} />)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
// FILTER COMP
const FilterData = ({ searchKey }) => {
    return (
        <div className="flex flex-row gap-2 justify-center items-center pr-6 border-r-2 border-gray-400">
            Search:
            <input
                onChange={(e) => searchKey(e.target.value)}
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow" placeholder="Type here..." />

        </div>
    )

}

const Sorting = ({ handleSort }) => {
    return (
        <div className="flex text-orange-800 gap-2 items-center justify-center gap-4 flex-row">
            <span>Order By: </span>
            <select
                className='border border-sky-200 p-3'
                onChange={(e) => handleSort(e.target.value)}>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </select>
        </div >
    );
};
// PRODUCT CARD COMP 
const ProductCard = ({ product, seq }) => {
    return (
        <div className="w-full max-w-sm rounded-xl border hover:bg-sky-50 border-gray-200 bg-white p-4 shadow-md hover:shadow-lg transition relative">
            <span className='absolute w-8 h-8 top-0 left-0 bg-teal-600 text-white rounded-full py-1 px-3'>{seq}</span>
            <div className="h-24 flex items-center justify-center ">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-24 max-w-full object-contain"
                />
            </div>
            <span className="text-sm text-gray-500 capitalize absolute right-2 top-2">{product.category}</span>
            <h2 className="mt-1 text-sm font-semibold line-clamp-2">{product.title}</h2>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2 ">
                {product.description}
            </p>
            <div className="mt-2 gap-2 flex items-center justify-between">
                <span className="text-sm font-bold text-green-600">
                    \${product.price}
                </span>

                <span className="rounded-md bg-yellow-100 px-2 py-1 text-sm">
                    ⭐ {product.rating.rate}
                </span>


                {/* Button */}
                <button
                    className="w-auto rounded-md bg-sky-600 py-1 px-4 hover:cursor-pointer text-white hover:bg-sky-700"
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};
export default SearchableList`,p=`import React, { useState } from 'react'

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
                                    <span className={\`flex-1 \${td.completed ? "line-through" : ""}\`}
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

export default TodoApp`,m=`import React, { useState } from 'react'

const intialValues = {
    like: { count: 100, disabled: false },
    dislike: { count: 50, disabled: false }
}

const ToggleLIkeDislike = () => {
    const [feedback, setFeedback] = useState(intialValues)

    const handleFeedback = (type) => {
        const newtype = type === 'like' ? 'dislike' : 'like'
        setFeedback({
            ...feedback,
            [type]: { count: feedback[type].count + 1, disabled: true },
            [newtype]: { count: intialValues[newtype].count, disabled: intialValues[newtype].disabled }
        })
    }

    return (
        <>
            <p className="text-lg mb-4 text-sky-700 font-bold">Like and Dislike button's count toggeling</p>
            <div className="pb-4 flex flex-row">
                <div className='w-1/2'>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Like starts at 100, Dislike starts at 50</li>
                        <li>Clicking a button increments its count by +1</li>
                        <li>Clicked button becomes disabled</li>
                        <li>Clicking the other button resets the first one to its initial count</li>
                        <li>Only one of Like / Dislike can be active at a time</li>
                    </ul>
                </div>
                <div className="pb-4 flex flex-col gap-4">
                    <div className="gap-4 flex flex-row justify-between">
                        <button
                            onClick={() => handleFeedback('like')}
                            disabled={feedback.like.disabled}
                            className="px-10 py-4 bg-sky-700 text-white font-bold text-2xl rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >Like {feedback.like.count}</button>
                        <button
                            onClick={() => handleFeedback('dislike')}
                            disabled={feedback.dislike.disabled}
                            className="px-10 py-4 bg-sky-700 text-white font-bold text-2xl rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >Dislike {feedback.dislike.count}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToggleLIkeDislike`,b=Object.assign({"./react-comps/LimitedCounter.jsx":()=>s(()=>import("./LimitedCounter-CjCXNSeX.js"),__vite__mapDeps([0,1,2])),"./react-comps/LocalStorageHook.jsx":()=>s(()=>import("./LocalStorageHook-BcCqp62U.js"),__vite__mapDeps([3,1,2])),"./react-comps/SearchableList.jsx":()=>s(()=>import("./SearchableList-CsIAuBsU.js"),__vite__mapDeps([4,1,2])),"./react-comps/TodoApp.jsx":()=>s(()=>import("./TodoApp-CK3QyYB8.js"),__vite__mapDeps([5,1,2])),"./react-comps/ToggleLIkeDislike.jsx":()=>s(()=>import("./ToggleLIkeDislike-v0rGp628.js"),__vite__mapDeps([6,1,2]))}),x=Object.assign({"./react-comps/LimitedCounter.jsx":n,"./react-comps/LocalStorageHook.jsx":c,"./react-comps/SearchableList.jsx":u,"./react-comps/TodoApp.jsx":p,"./react-comps/ToggleLIkeDislike.jsx":m}),g=Object.entries(b).map(([t,a])=>{const o=t.replace("./react-comps/","").replace(".jsx","");return{LazyComponent:l.lazy(a),name:o,source:x[t]??"// Source not available"}}),f=({source:t})=>{const[a,o]=l.useState(!1);return e.jsxs("div",{className:"mt-4 border-t border-gray-200 pt-4",children:[e.jsx("button",{type:"button",onClick:()=>o(i=>!i),className:"px-4 py-2 text-sm font-semibold text-orange-600 border border-orange-500 rounded-md hover:bg-orange-50 transition-colors cursor-pointer",children:a?"Hide Source Code":"Show Source Code"}),a&&e.jsx("div",{className:"mt-3 rounded-lg overflow-hidden",children:e.jsx(r,{language:"javascript",style:d,showLineNumbers:!0,children:t})})]})},y=()=>e.jsx("div",{children:g.map(({name:t,LazyComponent:a,source:o})=>e.jsxs("div",{className:"border border-orange-300 p-10 bg-white rounded-xl mb-6",children:[e.jsx("h3",{className:"text-2xl text-orange-600 font-bold mb-2",children:t}),e.jsx(l.Suspense,{fallback:e.jsx("p",{children:"Loading component…"}),children:e.jsx(a,{})}),e.jsx(f,{source:o})]},t))});export{y as default};
