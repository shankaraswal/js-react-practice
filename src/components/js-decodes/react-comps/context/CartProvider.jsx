// context/CartProvider.jsx
import { useMemo, useState } from 'react';
import { CartContext } from './CartContext';

export function CartProvider({ children }) {
    const [cartItem, setCartItem] = useState([]);

    const addTocart = (product) => {
        setCartItem((prev) => {
            const existing = prev.find((i) => i._id === product._id);
            if (existing) {
                return prev.map((i) =>
                    i._id === product._id ? { ...i, qty: i.qty + 1 } : i
                );
            }
            return [
                ...prev,
                {
                    _id: product._id,
                    title: product.title,
                    brand: product.brand,
                    image: product.image,
                    discountedPrice: product.discountedPrice,
                    oldPrice: product.oldPrice,
                    size: product.size,
                    qty: 1,
                },
            ];
        });
    };

    const deleteFromcart = (id) =>
        setCartItem((prev) => prev.filter((i) => i._id !== id));

    const updateQty = (id, qty) => {
        setCartItem((prev) => {
            if (qty <= 0) return prev.filter((i) => i._id !== id);
            return prev.map((i) => (i._id === id ? { ...i, qty } : i));
        });
    };

    const emptyCart = () => setCartItem([]);

    const totalItems = cartItem.reduce((s, i) => s + i.qty, 0);
    const totalPrice = cartItem.reduce(
        (s, i) => s + i.qty * i.discountedPrice,
        0
    );

    const value = useMemo(
        () => ({
            cartItem,
            addTocart,
            deleteFromcart,
            updateQty,
            emptyCart,
            totalItems,
            totalPrice,
        }),
        [cartItem, totalItems, totalPrice]
    );

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}