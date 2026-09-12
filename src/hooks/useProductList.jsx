import { useState, useEffect } from 'react';

const useProducts = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  useEffect(()=>{
    const getProductList = async ()=>{
      setError(null)
      setLoading(true)
      try{
         const resp = await fetch('https://fakestoreapi.com/products');
        if(!resp.ok){
            throw new Error(`HTTP error! status: ${ resp.status}`);
        }
         const data = await resp.json()
         if(data?.length){
          setData(data)
         }
      }
      catch(err){
       console.log(err)
       setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
      finally{
        setLoading(false)
      }

    }
    getProductList()
  },[])

  return {data, loading, error}

};

export default useProducts;