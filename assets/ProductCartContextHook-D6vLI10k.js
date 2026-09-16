import { r as reactExports, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
const CartContext = reactExports.createContext(null);
function useCart() {
  const ctx = reactExports.useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return ctx;
}
function ProductCard({ product, ind }) {
  const [added, setAdded] = reactExports.useState(false);
  const { addTocart } = useCart();
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
    rating = 0
  } = product;
  const numericOld = Number(oldPrice);
  const numericPrice = Number(price);
  const discount = numericOld > numericPrice ? Math.round((numericOld - numericPrice) / numericOld * 100) : 0;
  const formatPrice = (v) => new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
  }).format(Number(v));
  const handleAddtoCart = () => {
    addTocart(product);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex w-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-4/3 overflow-hidden bg-slate-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: image,
          alt: title,
          loading: "lazy",
          className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
          onError: (e) => e.currentTarget.src = "https://placehold.co/600x400?text=No+Image"
        }
      ),
      isNew && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 top-2 rounded-full bg-sky-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow", children: "New" }),
      discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute right-2 top-2 rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow", children: [
        discount,
        "% Off"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-2 left-2 flex h-12 w-12 items-center ring-2 ring-white shadow-amber-900 shadow-2xl justify-center rounded-full bg-amber-500 text-xl font-bold text-white", children: ind + 1 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-1.5 p-3 hover:bg-amber-50 hover:cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-wider text-slate-400", children: brand }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500", children: category })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "line-clamp-1 text-sm font-semibold text-slate-800", title, children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm line-clamp-1", children: description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium uppercase tracking-wide text-slate-400", children: type }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: i < Math.round(rating) ? "currentColor" : "none",
            stroke: "currentColor",
            strokeWidth: 1.5,
            className: `h-3 w-3 ${i < Math.round(rating) ? "text-amber-400" : "text-slate-300"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" })
          },
          i
        )) })
      ] }),
      size.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1", children: [
        size.slice(0, 4).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "rounded border border-slate-200 px-1.5 py-0.5 text-[10px] font-medium text-slate-600",
            children: s
          },
          s
        )),
        size.length > 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-medium text-slate-400", children: [
          "+",
          size.length - 4
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex flex-wrap items-baseline gap-x-1.5 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-slate-900", children: formatPrice(discountedPrice) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-400 line-through", children: formatPrice(oldPrice) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[11px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `h-1.5 w-1.5 rounded-full ${stock > 0 ? "bg-emerald-500" : "bg-rose-500"}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: stock > 0 ? "text-slate-500" : "text-rose-500", children: stock > 0 ? `${stock} in stock` : "Out of stock" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          disabled: stock === 0,
          onClick: handleAddtoCart,
          className: `mt-1 inline-flex max-w-1/2 mx-auto w-full items-center justify-center hover:scale-125 gap-1.5 rounded-lg px-3 py-3 text-xs font-semibold transition  disabled:cursor-not-allowed disabled:opacity-60 ${added ? "bg-emerald-600 text-white" : "bg-amber-800 text-white hover:bg-amber-900"}`,
          children: added ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2.4, stroke: "currentColor", className: "h-3.5 w-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "m4.5 12.75 6 6 9-13.5" }) }),
            "Added"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", className: "h-3.5 w-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" }) }),
            stock === 0 ? "Out of Stock" : "Add to Cart"
          ] })
        }
      )
    ] })
  ] });
}
const ProductsList = () => {
  const [products, setProducts] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const { itemList } = useCart();
  reactExports.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.noksha.dev/api/products");
        const json = await res.json();
        setProducts(json.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  if (error) return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "p-4 text-rose-500", children: [
    "Error: ",
    error
  ] });
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-4 text-slate-500", children: "Loading…" });
  if (!products.length) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "p-4 text-slate-500", children: "No products found" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: products.map((prod, ind) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: prod, ind }, prod._id)) });
};
function CartDrilldown({ isOpen = true, onClose }) {
  const { cartItem } = useCart();
  const items = cartItem;
  const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.qty * i.discountedPrice, 0);
  const formatPrice = (v) => new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
  }).format(Number(v));
  const handleIncrease = (id) => console.log("increase", id);
  const handleDecrease = (id) => console.log("decrease", id);
  const handleRemove = (id) => console.log("remove", id);
  const handleClear = () => console.log("clear cart");
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm",
        onClick: onClose,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-slate-200 px-5 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-slate-800", children: "Your Cart" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-500", children: [
            totalItems,
            " ",
            totalItems === 1 ? "item" : "items"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onClose,
            "aria-label": "Close cart",
            className: "grid h-9 w-9 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-700",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", className: "h-5 w-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }) })
          }
        )
      ] }),
      items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-16 w-16 place-items-center rounded-full bg-slate-100 text-slate-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.6, stroke: "currentColor", className: "h-8 w-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-slate-700", children: "Your cart is empty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: onClose,
            className: "rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-700",
            children: "Browse Products"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-4", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: item.image,
              alt: item.title,
              className: "h-full w-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold uppercase tracking-wider text-slate-400", children: item.brand }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "line-clamp-1 text-sm font-semibold text-slate-800", children: item.title }),
                item.size?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-[11px] text-slate-400", children: [
                  "Size: ",
                  item.size.join(", ")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleRemove(item._id),
                  "aria-label": "Remove item",
                  className: "text-slate-400 transition hover:text-rose-500",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.8, stroke: "currentColor", className: "h-4 w-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }) })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center rounded-lg border border-slate-200", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleDecrease(item._id),
                    "aria-label": "Decrease quantity",
                    className: "grid h-7 w-7 place-items-center text-slate-600 transition hover:bg-slate-100",
                    children: "−"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-7 text-center text-xs font-semibold text-slate-800", children: item.qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => handleIncrease(item._id),
                    "aria-label": "Increase quantity",
                    className: "grid h-7 w-7 place-items-center text-slate-600 transition hover:bg-slate-100",
                    children: "+"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-slate-900", children: formatPrice(item.discountedPrice * item.qty) }),
                item.oldPrice && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-400 line-through", children: formatPrice(Number(item.oldPrice) * item.qty) })
              ] })
            ] })
          ] })
        ] }, item._id)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-slate-200 px-5 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleClear,
              className: "mb-3 text-xs font-medium text-rose-500 underline-offset-2 transition hover:underline",
              children: "Clear cart"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-baseline justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-slate-500", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-slate-900", children: formatPrice(totalPrice) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 active:scale-[0.98]",
              children: "Checkout"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const ProductListWrapper = () => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const { cartItem } = useCart();
  const cartQty = cartItem.length ?? 0;
  const onClose = () => {
    setIsOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl mb-4 text-orange-600 font-bold", children: "Product List" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setIsOpen(!isOpen),
          type: "button",
          "aria-label": "Open cart",
          className: "relative mb-4 grid place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:scale-125 hover:cursor-pointer",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.8,
                stroke: "currentColor",
                className: "h-12 w-12",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  }
                )
              }
            ),
            cartQty >= 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -right-4 -top-4 grid h-8 min-w-8 place-items-center rounded-full bg-rose-500 px-1 text-lg font-bold text-white shadow", children: cartQty > 99 ? "99+" : cartQty })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrilldown, { isOpen, onClose })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col max-w-full mt-4 h-250 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductsList, {}) }) })
  ] }) });
};
function CartProvider({ children }) {
  const [cartItem, setCartItem] = reactExports.useState([]);
  const addTocart = (product) => {
    setCartItem((prev) => {
      const existing = prev.find((i) => i._id === product._id);
      if (existing) {
        return prev.map(
          (i) => i._id === product._id ? { ...i, qty: i.qty + 1 } : i
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
          qty: 1
        }
      ];
    });
  };
  const deleteFromcart = (id) => setCartItem((prev) => prev.filter((i) => i._id !== id));
  const updateQty = (id, qty) => {
    setCartItem((prev) => {
      if (qty <= 0) return prev.filter((i) => i._id !== id);
      return prev.map((i) => i._id === id ? { ...i, qty } : i);
    });
  };
  const emptyCart = () => setCartItem([]);
  const totalItems = cartItem.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cartItem.reduce(
    (s, i) => s + i.qty * i.discountedPrice,
    0
  );
  const value = reactExports.useMemo(
    () => ({
      cartItem,
      addTocart,
      deleteFromcart,
      updateQty,
      emptyCart,
      totalItems,
      totalPrice
    }),
    [cartItem, totalItems, totalPrice]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CartContext.Provider, { value, children });
}
const ProductCartContextHook = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg mb-4 text-sky-700 font-bold", children: " CartContext what useCart custom hook" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[80%]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm text-gray-700 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Create a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "CartContext" }),
          " using ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "createContext" }),
          " and a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "CartProvider" }),
          " wrapping the app"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Provide a custom hook ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "useCart()" }),
          " for consuming the cart context (must throw if used outside provider)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Context should expose: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: `{ items, addItem, removeItem, updateQty, clearCart, totalItems, totalPrice }` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Product List page:" }),
          ' Display a grid of products (from a static array or API) with name, price, image, and "Add to Cart" button'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Add to Cart:" }),
          " Clicking adds the product to cart — if already present, increment quantity instead of duplicating"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Show a small badge on the cart icon in the header displaying ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "totalItems" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Cart Drilldown:" }),
          " Slide-out panel (or route) showing all cart items with name, price, quantity, and subtotal per item"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Each cart item should have + / − quantity buttons and a Remove button" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Decrementing quantity to 0 should remove the item automatically" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Display ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "totalPrice" }),
          " at the bottom of the drilldown"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Empty state:" }),
          ' Show "Your cart is empty" with a "Browse Products" button'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Clear Cart" }),
          " button to remove all items at once"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Cart data should persist to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "localStorage" }),
          " so it survives page reload"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Adding the same product from list should NOT create a duplicate row — merge quantities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Provide a "Checkout" button (can just alert the cart summary)' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Drilldown should open/close via a toggle button without page reload" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Click outside the drilldown (backdrop) should close it" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Use ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "useReducer" }),
          " inside the provider for cleaner state transitions (bonus)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Memoize the context value with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "useMemo" }),
          " to avoid unnecessary re-renders of consumers"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Ensure multiple consumers across the app stay in sync (badge, drilldown, product page all reflect the same state)" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CartProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductListWrapper, {}) })
    ] })
  ] }) });
};
export {
  ProductCartContextHook as default
};
