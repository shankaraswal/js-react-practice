import React, { useEffect, useState } from 'react'
import { LoadingMessage, ErrorMessage, NoRecordsMessage } from '../../shared-comps/HelperComps'
import useDebounce from '../hooks/useDebounce'

const RecipeList = () => {
    const [data, setData] = useState([])
    const [filterd, setFiltered] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [search, setSearch] = useState("")

    const { debounced } = useDebounce(search, 500);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const res = await fetch("https://dummyjson.com/recipes");
                if (!res.ok) {
                    console.log(`Else block error with status code ${res.status}`)
                }
                const results = await res.json();
                setData(results.recipes);
            } catch (err) {
                setError(true)
                console.log(`Catch block error ${err.message} with status code ${err.status}`)

            } finally {
                setLoading(false)
            }
        })();

    }, [])

    useEffect(() => {
        const newdata = data.filter((item) => {
            return item.name
                .toLowerCase()
                .includes(debounced.toLowerCase());
        });

        setFiltered(newdata);
    }, [data, debounced]);


    if (loading) return (<LoadingMessage />)
    if (error) return (<ErrorMessage />)
    if (data?.length === 0) return (<NoRecordsMessage />)

    const finaldata = search === '' ? [...data] : [...filterd]

    return (
        <>
            <h2 className="text-lg mb-4 text-sky-700 font-bold"> Search Filter</h2>
            <div className="pb-4 flex flex-col gap-10">
                <div className='w-full'>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Create a custom hook <code>useDebounce(value, delay)</code> that returns a debounced value</li>
                        <li>Use the hook to debounce a search input field</li>
                        <li>Input field for searching through a list of 100+ items</li>
                        <li>Only filter the list after user stops typing for <b>500ms</b></li>
                        <li>Display "Searching..." while debounce is pending</li>
                        <li>Show count of matched vs total items</li>
                        <li>Highlight matched text in the results</li>
                        <li>Show "No results found" if no matches</li>
                        <li>Provide a delay slider to control debounce timing (100ms – 1000ms)</li>
                        <li>Display current debounce delay value</li>
                        <li>Add a clear button to reset search</li>
                    </ul>
                </div>
                <div className="w-full">
                    <div className="flex flex-col">
                        {/* Search */}
                        <div className="mb-6 flex justify-end items-center gap-4 bg-red-50 p-4">
                            <span>Search: </span>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search recipes..."
                                className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4 max-w-full mt-4 w-full max-h-100 overflow-x-auto">
                            {finaldata.length === 0 && <>No match found</>}
                            {finaldata.map((recipe) => <RecipeCard recipe={recipe} />)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecipeList;



// ===================================================================================================================
// Child Recipe Component
// ===================================================================================================================

const RecipeCard = ({ recipe }) => {
    return (
        <>

            {/* Card */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="h-40 w-full object-cover"
                />
                <div className="p-4">
                    <h2 className="mb-1 text-lg font-semibold text-gray-800">
                        {recipe.name}
                    </h2>
                    <p className="mb-3 text-sm text-gray-500">
                        {recipe.cuisine} • {recipe.difficulty}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">
                            ⏱ {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
                        </span>
                        <span className="font-medium text-yellow-600">
                            ★ {recipe.rating}
                        </span>
                        <span className="text-gray-600">
                            🍽 {recipe.servings}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}