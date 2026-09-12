import { useState, useMemo, useEffect} from 'react'


  const numbers = Array.from(
    { length: 10000 },
    (_, i) => i + 1
  );



const Debouncing = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [count, setCount] = useState(0);


  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  
    const filteredNumbers = useMemo(() => {
    return numbers.filter((num) => {
      console.log("filtering...");
      return num.toString().includes(debouncedSearch);
    });
    }, [debouncedSearch]);
  
  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <div>{filteredNumbers.length} results</div>
    </>
  );
};


export default Debouncing