import React from 'react';
import { useCart } from '../../hooks/useCart';

export default function CartDrilldown({ isOpen = true, onClose }) {
    const { cartItem } = useCart()
    // console.log(cartItem)
    const items = cartItem;

    const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
    const totalPrice = items.reduce((sum, i) => sum + i.qty * i.discountedPrice, 0);

    const formatPrice = (v) =>
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 2,
        }).format(Number(v));

    // Placeholder handlers — baad me useCart() ke functions aayenge
    const handleIncrease = (id) => console.log('increase', id);
    const handleDecrease = (id) => console.log('decrease', id);
    const handleRemove = (id) => console.log('remove', id);
    const handleClear = () => console.log('clear cart');

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Slide-out panel */}
            <aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                    <div>
                        <h2 className="text-lg font-bold text-slate-800">Your Cart</h2>
                        <p className="text-xs text-slate-500">
                            {totalItems} {totalItems === 1 ? 'item' : 'items'}
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close cart"
                        className="grid h-9 w-9 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Items / Empty state */}
                {items.length === 0 ? (
                    <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                        <div className="grid h-16 w-16 place-items-center rounded-full bg-slate-100 text-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" className="h-8 w-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>
                        <p className="text-sm font-medium text-slate-700">Your cart is empty</p>
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-700"
                        >
                            Browse Products
                        </button>
                    </div>
                ) : (
                    <>
                        {/* Items list */}
                        <div className="flex-1 overflow-y-auto px-5 py-4">
                            <ul className="flex flex-col gap-4">
                                {items.map((item) => (
                                    <li key={item._id} className="flex gap-3">
                                        {/* Image */}
                                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="flex flex-1 flex-col">
                                            <div className="flex items-start justify-between gap-2">
                                                <div className="min-w-0">
                                                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                                                        {item.brand}
                                                    </p>
                                                    <h3 className="line-clamp-1 text-sm font-semibold text-slate-800">
                                                        {item.title}
                                                    </h3>
                                                    {item.size?.length > 0 && (
                                                        <p className="mt-0.5 text-[11px] text-slate-400">
                                                            Size: {item.size.join(', ')}
                                                        </p>
                                                    )}
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemove(item._id)}
                                                    aria-label="Remove item"
                                                    className="text-slate-400 transition hover:text-rose-500"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-4 w-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>

                                            {/* Price + qty row */}
                                            <div className="mt-2 flex items-center justify-between">
                                                {/* Qty stepper */}
                                                <div className="inline-flex items-center rounded-lg border border-slate-200">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDecrease(item._id)}
                                                        aria-label="Decrease quantity"
                                                        className="grid h-7 w-7 place-items-center text-slate-600 transition hover:bg-slate-100"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="w-7 text-center text-xs font-semibold text-slate-800">
                                                        {item.qty}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleIncrease(item._id)}
                                                        aria-label="Increase quantity"
                                                        className="grid h-7 w-7 place-items-center text-slate-600 transition hover:bg-slate-100"
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                {/* Subtotal */}
                                                <div className="text-right">
                                                    <p className="text-sm font-bold text-slate-900">
                                                        {formatPrice(item.discountedPrice * item.qty)}
                                                    </p>
                                                    {item.oldPrice && (
                                                        <p className="text-[10px] text-slate-400 line-through">
                                                            {formatPrice(Number(item.oldPrice) * item.qty)}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Footer */}
                        <div className="border-t border-slate-200 px-5 py-4">
                            {/* Clear cart */}
                            <button
                                type="button"
                                onClick={handleClear}
                                className="mb-3 text-xs font-medium text-rose-500 underline-offset-2 transition hover:underline"
                            >
                                Clear cart
                            </button>

                            {/* Total */}
                            <div className="mb-3 flex items-baseline justify-between">
                                <span className="text-sm text-slate-500">Total</span>
                                <span className="text-xl font-bold text-slate-900">
                                    {formatPrice(totalPrice)}
                                </span>
                            </div>

                            {/* Checkout */}
                            <button
                                type="button"
                                className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 active:scale-[0.98]"
                            >
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </aside>
        </>
    );
}