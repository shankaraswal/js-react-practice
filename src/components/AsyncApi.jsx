import React, { useState, useEffect } from 'react';
// import { List } from 'react-window';
import ProductCard from "./ProductCard";
import { useErrorBoundary } from 'react-error-boundary';


const ProductList = () => {
    const [prodlist, setProdlist] = useState({ products: [] });
    // const [limit, setLimit] = useState(12);
    const [skip, setSkip] = useState(0)
    const [error, setError] = useState('');
    const { showBoundary } = useErrorBoundary();


    const url = `https://dummyjson.com/products?limit=${12}&skip=${skip}`
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch(url)
                if (!res.ok) {
                    throw new Error(`HTTP ${res.status} ${res.statusText}`);
                }
                const results = await res.json()
                const merged = [...prodlist.products, ...results.products]
                setProdlist(prev => ({ ...prev, products: merged }))
            }
            catch (err) {
                console.error('Failed to fetch products:', err);
                setError(err);
                showBoundary(err);
            }
        }
        getProducts()
    }, [prodlist.products, showBoundary, url])

    const handleLoadmore = () => {
        console.log(url, skip)
        // setLimit((prev=>prev+limit))
        setSkip(prev => prev + 12)
    }


    if (!prodlist?.products) return null;
    if (!prodlist?.products?.length) return <p>Loading…</p>;

    return (
        <>
            <div className="mx-auto max-w-full p-4">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-900">Products</h1>
                    <p className="text-sm text-gray-500">
                        Showing 1–{skip + 12} of 194 products
                    </p>
                </div>
                {error}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {prodlist.products.map((prod) =>
                        <ProductCard key={prod.id} product={prod} />
                    )}
                </div>
                <div className="w-full justify-center align-center flex p-10 my-6">
                    <button
                        onClick={handleLoadmore}
                        className="btn-sm bg-orange-500 text-white font-medium text-2xl px-6 mx-auto py-3 rounded-xl">load more +</button>
                </div>
            </div>
        </>
    )
}

export default ProductList