import React, { useState, useEffect } from 'react'


export default function ProductList() {
  const [list, setList]= useState([])
  const [currentpage, setCurrentpage] = useState(1); 
  const [paginationData, setPaginationData] = useState([]); 
  const [cats, setCats] = useState([]); 
  const itemperpage=3
  const currentindex = currentpage === 1 ? 0: itemperpage*(currentpage-1);

  const getItemList = async ()=>{
    try{
     const resp = await fetch('https://fakestoreapi.com/products')
    
     if(!resp.ok){
      console.log(' api issue')
      return null
     }
    
     const data = await resp.json()
     return data;
    }
    catch(err){
      console.error(err)
    }
  }

  const getCategories= ()=>{
  

  }


  useEffect(()=>{
    const getApidata= async()=>{
     const apidata = await getItemList();
     if(apidata){
      setList(apidata)
      setPaginationData(apidata.slice(currentindex,currentpage*itemperpage))
      const cats =[...new Set(apidata.map((item)=>item.category ))]    
      setCats(cats)     
     }
    }
    getApidata()
  },[])

  useEffect(()=>{
  setPaginationData(list.slice(currentindex,currentpage*itemperpage))
  },[currentpage])



  const totalpages=  Math.ceil(list.length / itemperpage); 
  const pageNumbers = [...Array(totalpages).keys()];

  const filterCatsData=(e)=>{
    const selectedcat= e.target.value;
    let data=[]
    if(selectedcat === 'all'){
      data = list
    }
    else{
      data = list.filter((item)=>(
        item.category === selectedcat
      ))
    }

    console.log(data)
    setPaginationData(data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
     <div className="grid grid-cols-1   gap-6 w-full max-w-6xl">
    
    <div className="flex flex-row justify-between ">
      <select 
      onChange={filterCatsData}
      className="border rounded-md px-3 bg-amber-100 text-black">
      <option value='all'>All</option>
       {cats.map((item)=>(
        <option key={item} value={item}>{item}</option>
      ))}
      </select>
      <div className="flex gap-2">

        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => setCurrentpage(num + 1)}
            className={`px-3 py-1 border rounded-md cursor-pointer hover:bg-amber-700 ${
              currentpage === num + 1 ? 'bg-amber-800 text-white' : 'bg-amber-600'
            }`}
          >
            {num + 1}
          </button>
        ))}
      </div>
      </div>
      {paginationData.length === 0 &&<>No product found.</>}
        {paginationData.map((item)=>(
          <div key={item.id} className="flex items-stretch p-4 bg-white border border-gray-200 shadow-sm rounded-xl mb-4 hover:shadow-md transition-all h-56">
            <div className="flex-shrink-0 h-full">  
              <img 
                src={item.image || 'https://via.placeholder.com'} 
                alt={item.title} 
                className="w-full h-full object-cover rounded-l-lg"  
              />
            </div>
            <div className="ml-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {item.id} - {item.title}
                  </h3>
                  <button className="text-gray-400 hover:text-red-500 ml-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-green-600">
                    ${item.price}
                  </span>
                  <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-md">
                    <span className="text-yellow-600 text-sm font-bold">★ {item.rating?.rate || "4.5"}</span>
                    <span className="text-gray-400 text-xs ml-1">({item.rating?.count || "100"})</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-600 px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}