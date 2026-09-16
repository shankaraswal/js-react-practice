import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';

export default function ProductCard({ product, ind }) {
    const [added, setAdded] = useState(false);
    const { addTocart } = useCart()

    const {
        _id,
        title,
        isNew = false,
        oldPrice,
        price,
        discountedPrice,
        description,
        category,
        type,
        stock = 0,
        brand,
        size = [],
        image,
        rating = 0,
    } = product;

    const numericOld = Number(oldPrice);
    const numericPrice = Number(price);
    const discount =
        numericOld > numericPrice
            ? Math.round(((numericOld - numericPrice) / numericOld) * 100)
            : 0;

    const formatPrice = (v) =>
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 2,
        }).format(Number(v));

    const handleAddtoCart = () => {
        addTocart(product)
    }

    return (
        <article className="group flex w-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg">

            {/* Image */}
            <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400?text=No+Image')}
                />

                {isNew && (
                    <span className="absolute left-2 top-2 rounded-full bg-sky-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow">
                        New
                    </span>
                )}

                {discount > 0 && (
                    <span className="absolute right-2 top-2 rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow">
                        {discount}% Off
                    </span>
                )}
                <span className="absolute bottom-2 left-2 flex h-12 w-12 items-center ring-2 ring-white shadow-amber-900 shadow-2xl justify-center rounded-full bg-amber-500 text-xl font-bold text-white">
                    {ind + 1}
                </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col gap-1.5 p-3 hover:bg-amber-50 hover:cursor-pointer">
                <div className="flex items-center justify-between">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                        {brand}
                    </p>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                        {category}
                    </span>
                </div>

                <h3 className="line-clamp-1 text-sm font-semibold text-slate-800" title={title}>
                    {title}
                </h3>
                <p className='text-sm line-clamp-1'>{description}</p>

                <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                        {type}
                    </span>
                    <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill={i < Math.round(rating) ? 'currentColor' : 'none'}
                                stroke="currentColor"
                                strokeWidth={1.5}
                                className={`h-3 w-3 ${i < Math.round(rating) ? 'text-amber-400' : 'text-slate-300'
                                    }`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        ))}
                    </div>
                </div>

                {size.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                        {size.slice(0, 4).map((s) => (
                            <span
                                key={s}
                                className="rounded border border-slate-200 px-1.5 py-0.5 text-[10px] font-medium text-slate-600"
                            >
                                {s}
                            </span>
                        ))}
                        {size.length > 4 && (
                            <span className="text-[10px] font-medium text-slate-400">
                                +{size.length - 4}
                            </span>
                        )}
                    </div>
                )}

                <div className="mt-auto flex flex-wrap items-baseline gap-x-1.5 pt-1">
                    <span className="text-lg font-bold text-slate-900">
                        {formatPrice(discountedPrice)}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                        {formatPrice(oldPrice)}
                    </span>
                </div>

                <div className="flex items-center gap-1 text-[11px]">
                    <span
                        className={`h-1.5 w-1.5 rounded-full ${stock > 0 ? 'bg-emerald-500' : 'bg-rose-500'
                            }`}
                    />
                    <span className={stock > 0 ? 'text-slate-500' : 'text-rose-500'}>
                        {stock > 0 ? `${stock} in stock` : 'Out of stock'}
                    </span>
                </div>

                <button
                    type="button"
                    disabled={stock === 0}
                    onClick={handleAddtoCart}
                    className={`mt-1 inline-flex max-w-1/2 mx-auto w-full items-center justify-center hover:scale-125 gap-1.5 rounded-lg px-3 py-3 text-xs font-semibold transition  disabled:cursor-not-allowed disabled:opacity-60 ${added
                        ? 'bg-emerald-600 text-white'
                        : 'bg-amber-800 text-white hover:bg-amber-900'
                        }`}
                >
                    {added ? (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor" className="h-3.5 w-3.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            Added
                        </>
                    ) : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            {stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                        </>
                    )}
                </button>
            </div>
        </article>
    );
}