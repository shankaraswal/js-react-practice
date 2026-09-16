import React, { useEffect, useState } from 'react'

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
                throw new Error(`Have an errror ${err}`)
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
                    ${product.price}
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
export default SearchableList