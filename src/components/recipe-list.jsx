import React, { useState, useEffect } from 'react'
import {twMerge} from 'tailwind-merge'

export default function RecipeList() {

  const [listData, setListData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [cats, setCats] = useState([])
  const [selectedCat, setSelectedCat] = useState('all')
  const [filteredData, setFilteredData] = useState([])
  
  const [paginationdData, setPaginationdData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)


  const recPerPage=5;
  const totalPage = Math.ceil(filteredData?.length/recPerPage)
  const startRecIndex = (currentPage-1) * recPerPage;

  // all list data
  const getRecipesList = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://dummyjson.com/recipes');
      if (response.ok) {
        return await response.json()
      }
      else {
        console.log('No data found')
        return null
      }

    }
    catch (err) {
      console.log(err)
      setError(true)
      return null
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const recipesList = async () => {
      const data = await getRecipesList();
      if (data && data.recipes) {
        setListData(data.recipes)
         setFilteredData(data.recipes)
        const cats = [...new Set(data.recipes.map((item) => item.cuisine))]
        setCats(cats)
      }
    }
    recipesList();
  }, [])


  // filterdata by cuisine
  const filteredata= (e) => {
    setCurrentPage(1)
    const cat = e.target.value;
      let fdata=[];
      if(cat === 'all'){
        fdata=listData
      }
      else{

        fdata = listData.filter((item)=>{
          return item.cuisine===cat
          })
      }
      setFilteredData(fdata)
  }

  //paginaiton
  useEffect(()=>{
    console.log(filteredData?.length)
    // set pagination on first load
    const paginationData = filteredData?.slice(startRecIndex, currentPage*recPerPage)
    setPaginationdData(paginationData)
  },[filteredData, currentPage])


  const getPaginatedData = (pageNum)=>{
    setCurrentPage(pageNum)

  }

  // loading, error and no-record found handling 
  if (loading) {
    return <p className="text-center mt-10">Loading recipes...</p>;
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-600">
        Failed to load recipes. Please try again.
      </p>
    );
  }

  if (!listData || listData.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-500">
        No recipes found 🍽️
      </p>
    );
  }


  return (
    <>
      <div className="flex flex-col gap-6 min-w-5xl">
        {listData && listData.length > 0 && (
          <>
          <div className="bg-amber-700 p-2 rounded-md flex flex-row justify-between gap-4 items-center">
            <div className="text-black bg-white flex p-2 rounded-md">
              <select onChange={filteredata}>
                <option value="all">All</option>
                {cats.map((opt)=>(
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>Recipes found: {filteredData.length}</div>
            <div className="flex flex-row gap-1">
              {Array(totalPage).fill().map((_, i) =>(
                  <button 
                  onClick={()=>getPaginatedData(i+1)}
                  key={i+1}
                  className={twMerge(
                      "bg-teal-600 font-bold cursor-pointer py-1 px-4 rounded-md hover:bg-teal-900",
                      currentPage === (i+1) && '!bg-amber-900 cursor-default'
                    )}
                  >{i+1}</button>
                  )
                )}
            </div>
          </div>
            {paginationdData?.map((recipe) =>
              <div key={recipe.id} className="w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">

                {/* Left: Image */}
                <div className="w-[40%]">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right: Content */}
                <div className="flex-1 p-6 space-y-4">

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-800">
                   {recipe.id}: {recipe.name}
                  </h2>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="font-bold">🍽 Cuisine: {recipe.cuisine}</span>
                    <span>🔥 Calories: {recipe.caloriesPerServing}</span>
                    <span>⭐ Rating: {recipe.rating} ({recipe.reviewCount})</span>
                    <span>⏱ Prep: {recipe.prepTimeMinutes} min</span>
                    <span>🍳 Cook: {recipe.cookTimeMinutes} min</span>
                    <span>👨‍👩‍👧 Servings: {recipe.servings}</span>
                    <span>📊 Difficulty: {recipe.difficulty}</span>
                  </div>

                  {/* Ingredients */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Ingredients
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 text-sm">
                      {recipe.ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructions */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Instructions
                    </h3>
                    <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1">
                      {recipe.instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  {/* Tags & Meal Type */}
                  <div className="flex flex-wrap gap-2">
                    {recipe.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-600"
                      >
                        #{tag}
                      </span>
                    ))}
                    {recipe.mealType.map((type, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-green-100 rounded-full text-green-700"
                      >
                        {type}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            )}
          </>

        )}
      </div>
    </>
  )
}