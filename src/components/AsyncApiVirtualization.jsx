import React, { useState, useEffect } from 'react';
import { Grid } from 'react-window';
import { useErrorBoundary } from 'react-error-boundary';
import ProductCard from './ProductCard';

const CARD_WIDTH = 400;
const CARD_HEIGHT = 520;

// v2 cell component — props सीधे cellProps से आते हैं
function ProductCell({ columnIndex, rowIndex, style, records, columns }) {
    const index = rowIndex * columns + columnIndex;
    const product = records?.[index];

    if (!product) return null;

    return (
        <div style={style}>
            <div className="p-2">
                <ProductCard product={product} />
            </div>
        </div>
    );
}

const ProductListVirtualization = () => {
    const [prodlist, setProdlist] = useState({ products: [] });
    const [width, setWidth] = useState(window.innerWidth);
    const { showBoundary } = useErrorBoundary();

    const url = 'https://dummyjson.com/products?limit=194';

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const results = await res.json();
                setProdlist(results);
            } catch (err) {
                showBoundary(err);
            }
        };
        getProducts();
    }, [showBoundary]);

    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    if (!prodlist?.products?.length) return <p>Loading…</p>;

    const records = prodlist.products;
    const containerWidth = Math.min(width - 64, 1200);
    const columns = Math.max(1, Math.floor(containerWidth / CARD_WIDTH));
    const rows = Math.ceil(records.length / columns);

    return (
        <div className="mx-auto max-w-7xl p-4">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Products</h1>
                <p className="text-sm text-gray-500">
                    Showing 1–{records.length} of {prodlist.total} products
                </p>
            </div>
            <div className="flex flex-row gap-4">

                <Grid
                    cellComponent={ProductCell}
                    cellProps={{ records, columns }}
                    columnCount={columns}
                    columnWidth={CARD_WIDTH}
                    rowCount={rows}
                    rowHeight={CARD_HEIGHT + 100}
                    style={{ height: 1000, width: containerWidth }}
                />
            </div>
        </div>
    );
};

export default ProductListVirtualization;