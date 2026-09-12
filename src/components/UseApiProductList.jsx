import React, { useState, use } from 'react';
import { List } from 'react-window';
import ProductRowCard from "./ProductRowCard";
import useApi from '../apis/use-api'

function ProductRow({ index, style, records }) {
    const product = records[index];
    if (!product) return null;

    return (
        <div style={style}>
            <div className="p-2">
                <ProductRowCard product={product} />
            </div>
        </div>
    );
}

const UseApiProductList = () => {
    const prodlist = use(useApi);
    const records = prodlist.products;
const [loaded, setLoaded] = useState(0);

    return (
        <div className="mx-auto max-w-full p-4">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Products List with use() API and Virtualization</h1>
                <p className="text-sm text-gray-500">
                    Showing 1–{loaded} of {prodlist.total} products
                </p>
            </div>

            <List
                rowComponent={ProductRow}
                rowCount={records.length}
                rowHeight={200}
                rowProps={{ records }}
                style={{ height: 800, width: '100%' }}
                onRowsRendered={({ stopIndex }) => {
                    setLoaded(prev => Math.max(prev, stopIndex + 1));
                }}
            />
        </div>
    );
};

export default UseApiProductList;