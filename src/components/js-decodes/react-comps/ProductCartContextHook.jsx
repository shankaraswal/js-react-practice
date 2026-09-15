import ProductListWrapper from "./product-cart/ProductListWrapper"

import { CartProvider } from './context/CartProvider';

const ProductCartContextHook = () => {

    return (
        <div>
            <>
                <p className="text-lg mb-4 text-sky-700 font-bold"> Search Filter</p>
                <div className="pb-4 flex flex-col">
                    <div className='w-[80%]'>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            <li>Create a <code>CartContext</code> using <code>createContext</code> and a <code>CartProvider</code> wrapping the app</li>
                            <li>Provide a custom hook <code>useCart()</code> for consuming the cart context (must throw if used outside provider)</li>
                            <li>Context should expose: <code>{`{ items, addItem, removeItem, updateQty, clearCart, totalItems, totalPrice }`}</code></li>
                            <li><b>Product List page:</b> Display a grid of products (from a static array or API) with name, price, image, and "Add to Cart" button</li>
                            <li><b>Add to Cart:</b> Clicking adds the product to cart — if already present, increment quantity instead of duplicating</li>
                            <li>Show a small badge on the cart icon in the header displaying <code>totalItems</code></li>
                            <li><b>Cart Drilldown:</b> Slide-out panel (or route) showing all cart items with name, price, quantity, and subtotal per item</li>
                            <li>Each cart item should have + / − quantity buttons and a Remove button</li>
                            <li>Decrementing quantity to 0 should remove the item automatically</li>
                            <li>Display <code>totalPrice</code> at the bottom of the drilldown</li>
                            <li><b>Empty state:</b> Show "Your cart is empty" with a "Browse Products" button</li>
                            <li><b>Clear Cart</b> button to remove all items at once</li>
                            <li>Cart data should persist to <code>localStorage</code> so it survives page reload</li>
                            <li>Adding the same product from list should NOT create a duplicate row — merge quantities</li>
                            <li>Provide a "Checkout" button (can just alert the cart summary)</li>
                            <li>Drilldown should open/close via a toggle button without page reload</li>
                            <li>Click outside the drilldown (backdrop) should close it</li>
                            <li>Use <code>useReducer</code> inside the provider for cleaner state transitions (bonus)</li>
                            <li>Memoize the context value with <code>useMemo</code> to avoid unnecessary re-renders of consumers</li>
                            <li>Ensure multiple consumers across the app stay in sync (badge, drilldown, product page all reflect the same state)</li>
                        </ul>
                    </div>
                    <CartProvider>
                        <ProductListWrapper />
                    </CartProvider>
                </div>
            </>



        </div>
    )
}

export default ProductCartContextHook