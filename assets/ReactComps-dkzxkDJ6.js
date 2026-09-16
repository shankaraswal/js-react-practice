const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Accordion-D-E80VFu.js","assets/index-CiIyD-gq.js","assets/index-kZ0j0EDh.css","assets/CountdownTimer-Z_hiHgUK.js","assets/DebounceSearchHook-KxmlEkNp.js","assets/HelperComps-C9aN9p_i.js","assets/DebounceSearch_NoHook-BE5Nnkrb.js","assets/FetchDemo-Cy_lC05U.js","assets/LimitedCounter-Dm2R6NgG.js","assets/LocalStorageHook-B6tnezIY.js","assets/ProductCartContextHook-D6vLI10k.js","assets/SearchableList-DKOt2Iv6.js","assets/StarRating-OKUkOe4w.js","assets/TodoApp-DLgRiIcf.js","assets/ToggleLIkeDislike-CqijkZxA.js","assets/WindowResizeHook-Bi9vmrSp.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports, r as reactExports, _ as __vitePreload } from "./index-CiIyD-gq.js";
import { h as highlighter, a as atomDark } from "./atom-dark-Ciyqb7x9.js";
const __vite_glob_1_0 = `import React, { useState } from 'react'
const titles = ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"];
const privacyPolicyHTML = \`
  <div class="max-w-3xl mx-auto p-6 text-gray-800 leading-relaxed">
    <p class="mb-4">
      This Privacy Policy explains how your personal information is collected, used,
      disclosed, and otherwise processed by the respective operating entity of the Site:
      G2.com, Inc., Software Advice Inc., Capterra Inc., or Nubera eBusiness S.L.,
      as applicable (<strong class="text-gray-900">"we"</strong>,
      <strong class="text-gray-900">"us"</strong> or
      <strong class="text-gray-900">"our"</strong>).
      The term <strong class="text-gray-900">"you"</strong> (and its cognates) refers to the
      user of the Site. Any capitalized term used but not defined herein has the meaning
      given to it in the General User Terms.
    </p>

    <p class="mb-4">
      We may update this Privacy Policy to reflect changes to the law, the Site, or our
      business. If you do not agree to this Privacy Policy or any updated Privacy Policy,
      you must stop using the Site.
    </p>

    <p class="mb-2">This Privacy Policy applies to personal information collected through:</p>

    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>our websites, mobile-enabled experiences, and related online services;</li>
      <li>our communications with software buyers, reviewers, vendors, and other business contacts; and</li>
      <li>any other interactions where this Privacy Policy is linked or made available.</li>
    </ul>
  </div>
\`;

function Accordions() {
    const [multiple, setMultiple] = useState(false)
    const [accs, setAccs] = useState(() =>
        Array.from({ length: 4 }, (_, ind) => ({
            id: \`\${Date.now()}-\${ind} \`,
            title: titles[ind] || \`Accordion \${ind + 1} \`,
            body: privacyPolicyHTML,
            open: ind === 0 ? true : false
        }))
    )

    const handleToggle = (id) => {
        setAccs((prev) => prev.map((item) =>
            multiple
                ? id === item.id
                    ? { ...item, open: !item.open }
                    : item
                : id === item.id ? { ...item, open: !item.open } : { ...item, open: false }
        ))
    }

    const expandToggle = (type) => {
        setAccs((prev) => prev.map((item) =>
            type === 'expand' ? { ...item, open: true } : { ...item, open: false }
        ))
    }
    // console.log(multiple)
    return (
        <>
            <h2 className="text-lg mb-4 text-sky-700 font-bold">Accordion optional single/multi toggle</h2>
            <div className="pb-4 flex flex-col gap-10">
                <div className='w-full'>
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

                <div className=''>
                    <div className="flex flex-col w-full">
                        <div className='flex flex-row p-4 justify-end gap-4'>
                            <label className='border border-red-100 bg-red-50 px-4 py-1 rounded-xl hover:bg-amber-100 hover:cursor-pointer'>Toggle and multiple Expand:
                                <input
                                    onChange={(e) => setMultiple(e.currentTarget.checked)}
                                    type="checkbox"
                                    checked={multiple}
                                    className="ml-2 checkbox rounded-xl border border-red-300 p-2" />
                            </label>
                            <button
                                onClick={() => expandToggle('expand')}
                            >Expand All</button>
                            <button
                                onClick={() => expandToggle('collapse')}
                            >Collapse All</button>
                        </div>
                        <div className="flex flex-col">
                            {accs.map((item) =>
                                <Accordion key={item.id} item={item} handleToggle={handleToggle} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Accordions


const Accordion = ({ item, handleToggle }) => {

    return (
        <div className="border border-gray-300 rounded-lg mb-3 overflow-hidden">
            {/* HEAD */}
            <button
                onClick={() => handleToggle(item.id)}
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-left font-medium"
            >
                <div className='text-left'>{item.title}</div>
                <span
                    className={\`transition - transform duration - 200 \${item.open ? "rotate-180" : "rotate-0"
                        } \`}
                >
                    ▼
                </span>
            </button>

            {/* CONTENT */}
            {item.open && (
                <div className="px-4 py-3 bg-white text-sm text-gray-700">
                    <h1 class="text-2xl font-bold text-sky-700 mb-4">{item.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: item.body }} />;
                </div>
            )}
        </div>
    );
}`;
const __vite_glob_1_1 = 'import React, { useEffect, useMemo, useCallback, useState } from \'react\'\nconst INITIAL_VAL = 15\nconst CountdownTimer = () => {\n    const [initialValue, setInitialValue] = useState(INITIAL_VAL);\n    const [time, setTime] = useState(INITIAL_VAL)\n    const [isRunning, setIsRunning] = useState(false)\n\n\n    const formatted = useMemo(() => {\n        const m = String(Math.trunc(Math.max(time, 0) / 60)).padStart(2, "0");\n        const s = String(Math.max(time, 0) % 60).padStart(2, "0");\n        return `${m}:${s}`;\n    }, [time]);\n\n    const progressPercent = useMemo(() => {\n        if (!initialValue) return 0;\n        const p = (time / initialValue) * 100;\n        const clamped = Math.max(0, Math.min(p, 100));\n        return Math.floor(clamped);\n    }, [time, initialValue]);\n\n    useEffect(() => {\n        if (!isRunning) return;\n        const xx = setInterval(() => {\n            setTime((prev) => {\n                if (prev <= 1) {\n                    setIsRunning(false);\n                    return 0;\n                }\n                return prev - 1;\n            });\n        }, 1000);\n        return () => clearInterval(xx);\n    }, [isRunning]);\n\n    const handelInitalVal = (e) => {\n        const v = Number(e.target.value);\n        if (Number.isNaN(v) || v < 0) return;\n\n        setInitialValue((prev) => prev + v);\n        setTime((prev) => prev + v);\n    };\n\n    const handlePreset = (preset) => {\n        setInitialValue(preset);\n        setTime(preset);\n    };\n\n    const handleStart = useCallback(() => {\n        setTime((prev) => (prev > 0 ? prev : initialValue));\n        setIsRunning(true);\n    }, [initialValue]);\n\n    const handlePause = useCallback(() => {\n        setIsRunning((prev) => !prev);\n    }, []);\n\n    const handleReset = useCallback(() => {\n        setTime(initialValue);\n        setIsRunning(false);\n    }, [initialValue]);\n\n\n    // SVG ring math\n    const radius = 90;\n    const circumference = 2 * Math.PI * radius;\n    const offset = circumference - (progressPercent / 100) * circumference;\n\n\n    console.log(progressPercent)\n\n    return (\n        <>\n            <h2 className="text-lg mb-4 text-sky-700 font-bold">Accordion optional single/multi toggle</h2>\n            <div className="pb-4 flex flex-col gap-10">\n                <div className=\'w-full\'>\n                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">\n                        <li><span className="text-green-600 font-bold">✅ Done:</span> Create a countdown timer starting from a given seconds value</li>\n                        <li><span className="text-green-600 font-bold">✅ Done:</span> Start / Pause / Reset buttons</li>\n                        <li><span className="text-red-600 font-bold">❌ Fix:</span> Display time in MM:SS format — use <code>Math.floor</code> instead of <code>Math.ceil</code></li>\n                        <li><span className="text-red-600 font-bold">❌ Fix:</span> Show "Time\'s up!" when timer hits 0 — <code>hidden</code> class is hardcoded</li>\n                        <li><span className="text-red-600 font-bold">❌ Fix:</span> Custom time input — change <code>onchange</code> to <code>onChange</code>, add <code>value</code> prop</li>\n                        <li><span className="text-red-600 font-bold">❌ Fix:</span> Preset buttons — should be 30s, 1min, 5min, 10min</li>\n                        <li><span className="text-green-600 font-bold">✅ Done:</span> Progress ring or bar showing remaining time percentage</li>\n                        <li><span className="text-red-600 font-bold">❌ Fix:</span> Change color to red when &lt; 10 seconds remaining</li>\n                        <li><span className="text-green-600 font-bold">✅ Done:</span> Prevent multiple intervals from stacking (cleanup properly)</li>\n                        <li><span className="text-green-600 font-bold">✅ Done:</span> Pause should preserve remaining time — resume continues from there</li>\n                    </ul>\n                </div>\n\n                <div className="flex flex-col w-full">\n                    <div className="min-h-auto py-10 flex items-center justify-center bg-gray-100 p-4">\n                        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">\n                            <h1 className="text-2xl font-bold text-center text-gray-800">\n                                Countdown Timer: {formatted}\n                            </h1>\n                            <div className="flex flex-col items-center gap-6 p-8">\n                                <div className="relative w-[200px] h-[200px]">\n                                    <svg width="200" height="200" className="rotate-[-90deg]">\n                                        <circle\n                                            cx="100"\n                                            cy="100"\n                                            r={radius}\n                                            stroke="#e5e7eb"\n                                            strokeWidth="12"\n                                            fill="transparent"\n                                        />\n                                        <circle\n                                            cx="100"\n                                            cy="100"\n                                            r={radius}\n                                            stroke="#2563eb"\n                                            strokeWidth="12"\n                                            fill="transparent"\n                                            strokeDasharray={circumference}\n                                            strokeDashoffset={offset}\n                                            strokeLinecap="round"\n                                            className="transition-all duration-1000 ease-linear"\n                                        />\n                                    </svg>\n                                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">\n                                        {formatted}\n                                    </div>\n                                </div>\n\n                                <p className="text-center text-red-500 font-semibold hidden">\n                                    Time\'s up!\n                                </p>\n\n                                <div className="flex items-center gap-2">\n                                    <label className="text-sm text-gray-600">Set time (sec):</label>\n                                    <input\n                                        onchange={handelInitalVal}\n                                        value={time}\n                                        type="number"\n                                        placeholder="Enter seconds"\n                                        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"\n                                    />\n                                </div>\n\n                                <div className="flex flex-wrap gap-2 justify-center">\n                                    {[10, 30, 60, 300, 600].map((preset) => (\n                                        <button\n                                            onClick={() => handlePreset(preset)}\n                                            key={preset}\n                                            className="px-3 py-1 text-sm rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300"\n                                        >\n                                            {preset} Seconds\n                                        </button>\n                                    ))}\n                                </div>\n                                <div className="flex justify-center gap-3">\n                                    <button\n                                        onClick={handleStart}\n                                        className="px-5 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium">\n                                        Start\n                                    </button>\n                                    <button\n                                        onClick={handlePause}\n                                        className="px-5 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-medium">\n                                        Pause\n                                    </button>\n                                    <button\n                                        onClick={handleReset}\n                                        className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium">\n                                        Reset\n                                    </button>\n                                </div>\n\n                                {progressPercent}\n                                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">\n                                    <div\n                                        className="h-full bg-red-400 transition-all duration-1000 ease-linear"\n                                        style={{ width: `${progressPercent}%` }}\n                                    />\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </>\n    )\n}\n\nexport default CountdownTimer';
const __vite_glob_1_2 = `import React, { useEffect, useState } from 'react'
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
                    console.log(\`Else block error with status code \${res.status}\`)
                }
                const results = await res.json();
                setData(results.recipes);
            } catch (err) {
                setError(true)
                console.log(\`Catch block error \${err.message} with status code \${err.status}\`)

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
}`;
const __vite_glob_1_3 = 'import React, { useEffect, useMemo, useState } from \'react\'\nimport { LoadingMessage, ErrorMessage, NoRecordsMessage } from \'../../shared-comps/HelperComps\'\n\nconst Test = () => {\n    const [data, setData] = useState([])\n    const [loading, setLoading] = useState(false)\n    const [error, setError] = useState(false)\n    const [search, setSearch] = useState("")\n\n    const [debounceData, setDebounceData] = useState("")\n\n    useEffect(() => {\n        (async () => {\n            try {\n                setLoading(true)\n                const res = await fetch("https://dummyjson.com/products");\n                if (!res.ok) {\n                    console.log(`Else block error with status code ${res.status}`)\n                }\n                const results = await res.json();\n                setData(results.products);\n            } catch (err) {\n                setError(true)\n                console.log(`Catch block error ${err.message} with status code`)\n\n            } finally {\n                setLoading(false)\n            }\n        })();\n\n    }, [])\n\n    useEffect(() => {\n        const timer = setTimeout(() => {\n            setDebounceData(search)\n        }, 500)\n        return () => clearTimeout(timer)\n\n    }, [search])\n\n\n    const filterddata = useMemo(() => {\n        return data.filter((item) => {\n            return (item.description.toLowerCase()).includes(debounceData.toLowerCase())\n        })\n    }, [data, debounceData])\n\n\n    if (loading) return (<LoadingMessage />)\n    if (error) return (<ErrorMessage />)\n    if (data?.length === 0) return (<NoRecordsMessage />)\n\n    // console.log(filterddata)\n\n    return (\n        <>\n            <h2 className="text-lg mb-4 text-sky-700 font-bold">Debounce Searching Without useDebounce Hook </h2>\n            <div className="pb-4 flex flex-col gap-10">\n                <div className=\'w-full\'>\n                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">\n                        <li>Debounce the search input using <code>useEffect</code> + <code>setTimeout</code> (no custom hook)</li>\n                        <li>Fetch 100+ items from an API (e.g. dummyjson products)</li>\n                        <li>Filter list only after user stops typing for the debounce delay</li>\n                        <li>Display <b>"Searching..."</b> indicator while debounce is pending</li>\n                        <li>Show count of <b>matched vs total</b> items (e.g. "12 of 100")</li>\n                        <li>Highlight matched text in the results</li>\n                        <li>Show <b>"No results found"</b> message when no matches</li>\n                        <li>Provide a <b>delay slider</b> (100ms – 1000ms) to control debounce timing</li>\n                        <li>Display current debounce delay value</li>\n                        <li>Add a <b>clear button</b> to reset search and delay</li>\n                        <li>Handle loading, error, and empty states properly</li>\n                        <li>Use <code>useMemo</code> to optimize filtering</li>\n                    </ul>\n                </div>\n                <div>\n                    <div className="mb-6 flex justify-end items-center gap-4 bg-sky-50 rounded-xl border border-sky-200 p-4">\n                        <span>Search: </span>\n                        <input\n                            type="text"\n                            value={search}\n                            onChange={(e) => setSearch(e.target.value)}\n                            placeholder="Search recipes..."\n                            className="w-full max-w-md bg-white rounded-lg border border-gray-300 px-4 py-2"\n                        />\n                    </div>\n                    <h4>Total: {filterddata.length}</h4>\n                    <pre className="bg-red-100 p-4 h-100! max-h-100 overflow-auto! text-[10px] whitespace-pre-wrap break-words">\n                        {JSON.stringify(filterddata, null, 2)}\n                    </pre>\n                </div>\n            </div>\n        </>\n    )\n}\n\nexport default Test';
const __vite_glob_1_4 = `import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { LoadingMessage, ErrorMessage, NoRecordsMessage } from '../../shared-comps/HelperComps'

function FetchDemo() {
    const [endPoint, setEndPoint] = useState("users")
    const { data, loading, httpClient, error, URL, BASE_URL } = useFetch()

    const loadUsers = async () => {
        const res = await httpClient(endPoint);
        console.log(res);
    };

    if (loading) return (<LoadingMessage />)
    if (error) return (<ErrorMessage />)
    if (data?.length === 0) return (<NoRecordsMessage />)

    return (
        <>
            <h2 className="text-lg mb-4 text-sky-700 font-bold">
                {\`useFetch hook with {data, loading, error, httpClient} ==> \${BASE_URL}/\${endPoint}\`}
            </h2>

            <div className="pb-4 flex flex-col gap-10">
                <div className='w-full'>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>❌ Create a custom hook <code>useFetch(url)</code> that returns <code>{\`{ data, loading, error, refetch }\`}</code></li>
                        <li>❌ Hook should fetch data on mount and when URL changes</li>
                        <li>✅ Handle loading state — show spinner while fetching</li>
                        <li>❌ Handle error state — show error message with retry button</li>
                        <li>❌ Use AbortController to cancel pending requests on unmount</li>
                        <li>❌ Provide a <b>Refetch</b> button to manually re-fetch</li>
                        <li>✅ Add a URL input field to fetch any public API</li>
                        <li>❌ Add preset buttons for common APIs (users, posts, todos from jsonplaceholder)</li>
                        <li>✅ Display fetched data in a formatted JSON <code>{\`<pre>\`}</code> block</li>
                        <li>❌ Show request duration in ms</li>
                        <li>❌ Handle empty URL gracefully (don't fetch)</li>
                        <li>❌ Prevent race conditions when URL changes rapidly</li>
                    </ul>
                </div>

                <div>
                    <div className="mb-6 flex justify-end items-center gap-4 bg-sky-50 rounded-xl border border-sky-200 p-4">
                        <span className="text-sm text-gray-700 whitespace-nowrap">
                            Load data for <b>{URL}</b>
                        </span>
                        <input
                            type="text"
                            value={endPoint}
                            onChange={(e) => setEndPoint(e.target.value)}
                            placeholder="e.g. users, products, carts"
                            className="w-full max-w-md bg-white rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                        <button
                            onClick={loadUsers}
                            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-2xl text-xl transition-colors"
                        >
                            Load data
                        </button>
                    </div>

                    <h4 className="text-sm font-semibold text-gray-800 mb-2">
                        Total: <span className="text-sky-700">{data?.length ?? 0}</span>
                    </h4>

                    <pre className="bg-red-100 p-4 max-h-100 overflow-auto text-[10px] whitespace-pre-wrap break-words rounded-lg">
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </div>
            </div>
        </>
    )
}

export default FetchDemo`;
const __vite_glob_1_5 = `import { useContext, useState } from 'react'
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

export default LimitedCounter`;
const __vite_glob_1_6 = `import React, { useState, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import MessageContext from './context-provider/MessageContext'


const LocalStorageHook = () => {
    const [keyname, setKeyname] = useState()
    const [keyval, setKeyval] = useState()

    // MESSAGE CONTEXT API CODE
    const [newMsg, addNewMsg] = useState("");
    const { messages, addMessage, delMessage } = useContext(MessageContext);

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


    // MESSAGE CONTEXT API CODE
    const handleNewMsg = () => {
        addMessage(newMsg)
        addNewMsg("")
    }

    const handleDelMsg = (ind) => {
        delMessage(ind)
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
export default LocalStorageHook`;
const __vite_glob_1_7 = `import ProductListWrapper from "./product-cart/ProductListWrapper"
import { CartProvider } from './context-provider/CartProvider';

const ProductCartContextHook = () => {

    return (
        <div>
            <>
                <p className="text-lg mb-4 text-sky-700 font-bold"> CartContext what useCart custom hook</p>
                <div className="pb-4 flex flex-col">
                    <div className='w-[80%]'>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            <li>Create a <code>CartContext</code> using <code>createContext</code> and a <code>CartProvider</code> wrapping the app</li>
                            <li>Provide a custom hook <code>useCart()</code> for consuming the cart context (must throw if used outside provider)</li>
                            <li>Context should expose: <code>{\`{ items, addItem, removeItem, updateQty, clearCart, totalItems, totalPrice }\`}</code></li>
                            <li><b>Product List page:</b> Display a grid of products (from a static array or API) with name, price, image, and "Add to Cart" button</li>
                            <li><b>Add to Cart:</b> Clicking adds the product to cart — if already present, increment quantity instead of duplicating</li>
                            <li>Show a small badge on the cart icon in the header displaying <code>totalItems</code></li>
                            <li><b>Cart Drilldown:</b> Slide-out panel (or route) showing all cart items with name, price, quantity, and subtotal per item</li>
                            <li>Each cart item should have + / − quantity buttons and a Remove button</li>
                            <li>Decrementing quantity to 0 should remove the item automatically</li>
                            <li>Display <code>totalPrice</code> at the bottom of the drilldown</li>
                            <li><b>Empty state:</b> Show "Your cart is empty" with a "Browse Products" button</li>
                            <li><b>Clear Cart</b> button to remove all items at once</li>
                            <li>Cart data should persist to <code>localStorage</code> so it survives page reload</li>
                            <li>Adding the same product from list should NOT create a duplicate row — merge quantities</li>
                            <li>Provide a "Checkout" button (can just alert the cart summary)</li>
                            <li>Drilldown should open/close via a toggle button without page reload</li>
                            <li>Click outside the drilldown (backdrop) should close it</li>
                            <li>Use <code>useReducer</code> inside the provider for cleaner state transitions (bonus)</li>
                            <li>Memoize the context value with <code>useMemo</code> to avoid unnecessary re-renders of consumers</li>
                            <li>Ensure multiple consumers across the app stay in sync (badge, drilldown, product page all reflect the same state)</li>
                        </ul>
                    </div>
                    <CartProvider>
                        <ProductListWrapper />
                    </CartProvider>
                </div>
            </>



        </div>
    )
}

export default ProductCartContextHook`;
const __vite_glob_1_8 = `import React, { useEffect, useState } from 'react'

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
            <h2 className="text-lg mb-4 text-sky-700 font-bold"> Search Filter</h2>
            <div className="pb-4 flex flex-col">
                <div className='w-full'>
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
export default SearchableList`;
const __vite_glob_1_9 = 'import React, { useState } from \'react\'\n\nconst stars = [1, 2, 3, 4, 5];\nconst StarRating = () => {\n    const [rating, setRating] = useState(0)\n\n    return (\n        <>\n            <h2 className="text-lg mb-4 text-sky-700 font-bold">\n                Star Rating\n            </h2>\n            <div className="pb-4 flex flex-row gap-10">\n                <div className=\'w-1/2 requiremetns\'>\n                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">\n                        <li>✅ Display 5 stars for rating (0 to 5)</li>\n                        <li>✅ Click a star to set the rating</li>\n                        <li>❌ Hover over a star to preview — highlight all stars up to hovered one</li>\n                        <li>❌ On hover leave, revert to the committed rating</li>\n                        <li>✅ Show "Rating: X / 5" text below</li>\n                        <li>❌ Support half-star ratings (0.5 steps) via click on left/right half of star</li>\n                        <li>❌ Keyboard accessible: arrow keys to change, Enter to commit</li>\n                        <li>❌ Read-only mode (disabled) for showing average ratings</li>\n                        <li>✅ Show a "Clear" button to reset rating to 0</li>\n                        <li>❌ Persist rating to localStorage</li>\n                    </ul>\n                </div>\n\n                <div className="preview-block flex-1 border rounded-xl bg-gray-50 border-gray-200">\n                    <div className="flex flex-col gap-4 p-8 h-full justify-center items-center bg-gray-50 w-full">\n                        <div className="flex items-center gap-2">\n                            {stars.map((star) => (\n                                <button\n                                    onClick={() => setRating(star)}\n                                    key={star}\n                                    type="button"\n                                    aria-label={`Rate ${star} star`}\n                                    className="w-10 h-10 transition-transform hover:scale-110"\n                                >\n                                    <svg\n                                        viewBox="0 0 24 24"\n                                        className={`w-10 h-10 ${rating >= star ? "text-yellow-400" : "text-gray-300"}`}\n                                        fill="currentColor"\n                                    >\n                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />\n                                    </svg>\n                                </button>\n                            ))}\n                        </div>\n\n                        <p className="text-sm text-gray-700 font-medium">\n                            Rating: <span className="text-yellow-600 font-bold">{rating}</span> / 5\n                        </p>\n\n                        <button\n                            onClick={() => setRating(0)}\n                            type="button"\n                            className="px-4 py-1.5 text-sm rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition-colors"\n                        >\n                            Clear\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </>\n    )\n}\n\nexport default StarRating';
const __vite_glob_1_10 = `import React, { useState } from 'react'

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
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
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

export default TodoApp`;
const __vite_glob_1_11 = `import React, { useState } from 'react'

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

export default ToggleLIkeDislike`;
const __vite_glob_1_12 = `import useWindowResize from '../hooks/useWindowResize'



const LocalStorageHook = () => {
    const { size, manualSize, resizeTo } = useWindowResize()

    return (
        <>
            <p className="text-lg mb-4 text-sky-700 font-bold">Create hook to save and retrieve data from local storage </p>
            <div className="pb-4 flex flex-row gap-4">
                <div className="w-[40%] shrink-0">
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Create a custom hook <code>useWindowResize</code> to manage window resize events</li>
                        <li>Return current window <b>width</b> and <b>height</b> from the hook</li>
                        <li><b>Live preview:</b> Display current dimensions as <code>Width × Height</code></li>
                        <li><b>Breakpoint badge:</b> Show Mobile / Tablet / Desktop based on width</li>
                        <li><b>Preset buttons:</b> Mobile, Tablet, Desktop — call <code>window.resizeTo</code></li>
                        <li><b>Manual input:</b> Fields for width and height with an Apply button</li>
                        <li><b>Resize history:</b> Store last 5 unique size pairs (newest first)</li>
                        <li><b>Reset history:</b> Clear the list without resetting the counter</li>
                        <li><b>Resize counter:</b> Show total number of unique resize events in session</li>
                        <li>Debounce or throttle resize events to avoid performance issues</li>
                        <li>Ignore duplicate consecutive sizes in history and counter</li>
                        <li>Handle invalid manual inputs (empty, negative, non-numeric)</li>
                        <li>Cleanup the resize listener on component unmount</li>
                        <li>Hook must be reusable in any other component without modification</li>
                        <li>Display history and preview in a structured card layout</li>
                    </ul>
                </div>
                <div className="flex-1 bg-red-50 p-4">
                    <div className="flex flex-col justify-between items-center gap-4 w-full">
                        <div className="rounded-lg bg-gray-100 p-4">
                            <h3 className="font-bold text-sm text-gray-600">Live Size</h3>
                            <p className="text-2xl font-mono">
                                {size.width} × {size.height}
                            </p>
                        </div>

                        <div className="rounded-lg bg-gray-100 p-4">
                            <h3 className="font-bold text-sm text-gray-600">Manaul Re-size</h3>
                            <p className="text-2xl font-mono">
                                {!manualSize ? (<>n{JSON.stringify(manualSize)}</>) : (<>
                                    {manualSize.width} × {manualSize.height}
                                </>
                                )}
                            </p>
                            <button
                                className="bg-red-500 text-white text-xl rounded-full px-6 py-2 m-4"
                                onClick={() => resizeTo({ width: 1366, height: 768 })}>Resize Window</button>
                        </div>


                    </div>
                </div>
            </div >
        </>
    )
}
export default LocalStorageHook`;
const components = /* @__PURE__ */ Object.assign({ "./react-comps/Accordion.jsx": () => __vitePreload(() => import("./Accordion-D-E80VFu.js"), true ? __vite__mapDeps([0,1,2]) : void 0), "./react-comps/CountdownTimer.jsx": () => __vitePreload(() => import("./CountdownTimer-Z_hiHgUK.js"), true ? __vite__mapDeps([3,1,2]) : void 0), "./react-comps/DebounceSearchHook.jsx": () => __vitePreload(() => import("./DebounceSearchHook-KxmlEkNp.js"), true ? __vite__mapDeps([4,1,2,5]) : void 0), "./react-comps/DebounceSearch_NoHook.jsx": () => __vitePreload(() => import("./DebounceSearch_NoHook-BE5Nnkrb.js"), true ? __vite__mapDeps([6,1,2,5]) : void 0), "./react-comps/FetchDemo.jsx": () => __vitePreload(() => import("./FetchDemo-Cy_lC05U.js"), true ? __vite__mapDeps([7,1,2,5]) : void 0), "./react-comps/LimitedCounter.jsx": () => __vitePreload(() => import("./LimitedCounter-Dm2R6NgG.js"), true ? __vite__mapDeps([8,1,2]) : void 0), "./react-comps/LocalStorageHook.jsx": () => __vitePreload(() => import("./LocalStorageHook-B6tnezIY.js"), true ? __vite__mapDeps([9,1,2]) : void 0), "./react-comps/ProductCartContextHook.jsx": () => __vitePreload(() => import("./ProductCartContextHook-D6vLI10k.js"), true ? __vite__mapDeps([10,1,2]) : void 0), "./react-comps/SearchableList.jsx": () => __vitePreload(() => import("./SearchableList-DKOt2Iv6.js"), true ? __vite__mapDeps([11,1,2]) : void 0), "./react-comps/StarRating.jsx": () => __vitePreload(() => import("./StarRating-OKUkOe4w.js"), true ? __vite__mapDeps([12,1,2]) : void 0), "./react-comps/TodoApp.jsx": () => __vitePreload(() => import("./TodoApp-DLgRiIcf.js"), true ? __vite__mapDeps([13,1,2]) : void 0), "./react-comps/ToggleLIkeDislike.jsx": () => __vitePreload(() => import("./ToggleLIkeDislike-CqijkZxA.js"), true ? __vite__mapDeps([14,1,2]) : void 0), "./react-comps/WindowResizeHook.jsx": () => __vitePreload(() => import("./WindowResizeHook-Bi9vmrSp.js"), true ? __vite__mapDeps([15,1,2]) : void 0) });
const sources = /* @__PURE__ */ Object.assign({
  "./react-comps/Accordion.jsx": __vite_glob_1_0,
  "./react-comps/CountdownTimer.jsx": __vite_glob_1_1,
  "./react-comps/DebounceSearchHook.jsx": __vite_glob_1_2,
  "./react-comps/DebounceSearch_NoHook.jsx": __vite_glob_1_3,
  "./react-comps/FetchDemo.jsx": __vite_glob_1_4,
  "./react-comps/LimitedCounter.jsx": __vite_glob_1_5,
  "./react-comps/LocalStorageHook.jsx": __vite_glob_1_6,
  "./react-comps/ProductCartContextHook.jsx": __vite_glob_1_7,
  "./react-comps/SearchableList.jsx": __vite_glob_1_8,
  "./react-comps/StarRating.jsx": __vite_glob_1_9,
  "./react-comps/TodoApp.jsx": __vite_glob_1_10,
  "./react-comps/ToggleLIkeDislike.jsx": __vite_glob_1_11,
  "./react-comps/WindowResizeHook.jsx": __vite_glob_1_12
});
const demos = Object.entries(components).map(([path, importer]) => {
  const name = path.replace("./react-comps/", "").replace(".jsx", "");
  return {
    LazyComponent: reactExports.lazy(importer),
    name,
    source: sources[path] ?? "// Source not available"
  };
});
const CodeAccordion = ({ source }) => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 border-t border-gray-200 pt-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen((prev) => !prev),
        className: "px-4 py-2 text-sm font-semibold text-orange-600 border border-orange-500 rounded-md hover:bg-orange-50 transition-colors cursor-pointer",
        children: isOpen ? "Hide Source Code" : "Show Source Code"
      }
    ),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      highlighter,
      {
        language: "javascript",
        style: atomDark,
        showLineNumbers: true,
        children: source
      }
    ) })
  ] });
};
const ReactComps = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: demos.map(({ name, LazyComponent, source }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-orange-300 p-10 bg-white rounded-xl mb-6",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl text-orange-600 font-bold mb-2", children: name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading component…" }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyComponent, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeAccordion, { source })
      ]
    },
    name
  )) });
};
export {
  ReactComps as default
};
