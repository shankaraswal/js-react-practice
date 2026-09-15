import React, { useState } from 'react'
import ProductsList from './ProductsList';
import CartDrilldown from './CartDrilldown'
import { useCart } from '../hooks/useCart';


const ProductListWrapper = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { cartItem } = useCart()
    const cartQty = cartItem.length ?? 0
    const onClose = () => {
        setIsOpen(false)
    }

    return (
        <>
            <div className='mt-4'>
                <div className="flex flex-row items-center justify-between">
                    <h2 className="text-2xl mb-4 text-orange-600 font-bold">Product List</h2>
                    {/* Cart icon with badge */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        aria-label="Open cart"
                        className="relative mb-4 grid place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:scale-125 hover:cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.8}
                            stroke="currentColor"
                            className="h-12 w-12"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>

                        {cartQty >= 0 && (
                            <span className="absolute -right-4 -top-4 grid h-8 min-w-8 place-items-center rounded-full bg-rose-500 px-1 text-lg font-bold text-white shadow">
                                {cartQty > 99 ? '99+' : cartQty}
                            </span>
                        )}
                    </button>
                    <CartDrilldown isOpen={isOpen} onClose={onClose} />
                </div>
                <div className='flex flex-col max-w-full mt-4 h-250 overflow-y-auto'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ProductsList />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductListWrapper