

const url = `https://dummyjson.com/products?limit=194`

const useApi = fetch(url)
    .then((res) => { 
        if(!res.ok){ throw new Error(`HTTP error ${res.status}`) }
        return res.json()

    })

export default useApi;