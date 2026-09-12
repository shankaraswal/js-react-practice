import { useState, useMemo, useEffect} from 'react'
console.clear();
const arr = Array.from({ length: 1000 },(_, ind) => ind)

const Debouncing = () => {

  const [search, setSearch] = useState('')
  const [count, setCount]=useState(0)
  const [debouncing, setDebouncing]=useState('')


  useEffect(() => {
  const timer=  setTimeout(() => { 
      setDebouncing(search)
    }, 500)
    return ()=> clearTimeout(timer)
   },[search])


  const filteredNumbers = useMemo(() => { 
    return arr.filter((num) => { 
      return num.toString().includes(debouncing)
    })
  }, [debouncing])
  
  const handleCount = () => { 
    setCount(count + 1)
  }
  
  return (
    <>
      <div className="flex flex-row gap-10 mb-10">
        {/* serach input */}
        <input
          onChange={(e) => setSearch(e.target.value)}
          defaultValue={search}
          type='number'
          className="border border-orange-500 rounded-md px-3 py-2" />
        <button
          onClick={handleCount}
          className="bg-red-500 text-white font-medium text-xl px-10 py-2 rounded-full">
          Count: {count } </button>
      </div>
      <div className="uppercase text-lg">filtered Numbers length results : {filteredNumbers.length}</div>
      <pre className="whitespace-pre-wrap leading-7 tracking-widest flex flex-col break-words bg-gray-100 p-4 rounded-lg">
          { JSON.stringify(arr, 2)}
      </pre>
    </>
  );
};


export default Debouncing