import { useState, useMemo} from 'react'

const UseMemo = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

    const numbers = useMemo(() => {
      return Array.from({ length: 10000 }, (_, i) => i + 1);
    }, []);
    
    // useMemo
    const filteredNumbers = useMemo(() => {
        return numbers.filter((num) => {
        console.log('search')
        return    num.toString().includes(search)
        }
        );
    }, [numbers, search]);
        
  return (
      <>
        <h1>useMemo example</h1>
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
}


export default UseMemo