import { r as reactExports, k, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
import { P as ProductCard } from "./ProductCard-pkeB5g6h.js";
const ProductList = () => {
  const [prodlist, setProdlist] = reactExports.useState({ products: [] });
  const [skip, setSkip] = reactExports.useState(0);
  const [error, setError] = reactExports.useState("");
  const { showBoundary } = k();
  const url = `https://dummyjson.com/products?limit=${12}&skip=${skip}`;
  reactExports.useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} ${res.statusText}`);
        }
        const results = await res.json();
        const merged = [...prodlist.products, ...results.products];
        setProdlist((prev) => ({ ...prev, products: merged }));
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(err);
        showBoundary(err);
      }
    };
    getProducts();
  }, [prodlist.products, showBoundary, url]);
  const handleLoadmore = () => {
    console.log(url, skip);
    setSkip((prev) => prev + 12);
  };
  if (!prodlist?.products) return null;
  if (!prodlist?.products?.length) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading…" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-full p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Products" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500", children: [
        "Showing 1–",
        skip + 12,
        " of 194 products"
      ] })
    ] }),
    error,
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4", children: prodlist.products.map(
      (prod) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: prod }, prod.id)
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full justify-center align-center flex p-10 my-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: handleLoadmore,
        className: "btn-sm bg-orange-500 text-white font-medium text-2xl px-6 mx-auto py-3 rounded-xl",
        children: "load more +"
      }
    ) })
  ] }) });
};
export {
  ProductList as default
};
