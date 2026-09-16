import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useCart } from '../../hooks/useCart';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { itemList } = useCart()

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const res = await fetch('https://fakestoreapi.noksha.dev/api/products');
                const json = await res.json();
                setProducts(json.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (error) return <p className="p-4 text-rose-500">Error: {error}</p>;
    if (loading) return <p className="p-4 text-slate-500">Loading…</p>;
    if (!products.length) return <p className="p-4 text-slate-500">No products found</p>;

    // console.log(itemList)

    return (
        <>
            {products.map((prod, ind) => (
                <ProductCard key={prod._id} product={prod} ind={ind} />
            ))}
        </>
    );
}

export default ProductsList