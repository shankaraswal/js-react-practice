import { r as reactExports, k, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
import { V as Ve } from "./react-window-BtiVCQm_.js";
import { P as ProductCard } from "./ProductCard-pkeB5g6h.js";
const CARD_WIDTH = 400;
const CARD_HEIGHT = 520;
function ProductCell({ columnIndex, rowIndex, style, records, columns }) {
  const index = rowIndex * columns + columnIndex;
  const product = records?.[index];
  if (!product) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product }) }) });
}
const ProductListVirtualization = () => {
  const [prodlist, setProdlist] = reactExports.useState({ products: [] });
  const [width, setWidth] = reactExports.useState(window.innerWidth);
  const { showBoundary } = k();
  const url = "https://dummyjson.com/products?limit=194";
  reactExports.useEffect(() => {
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
  reactExports.useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  if (!prodlist?.products?.length) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading…" });
  const records = prodlist.products;
  const containerWidth = Math.min(width - 64, 1200);
  const columns = Math.max(1, Math.floor(containerWidth / CARD_WIDTH));
  const rows = Math.ceil(records.length / columns);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Products" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500", children: [
        "Showing 1–",
        records.length,
        " of ",
        prodlist.total,
        " products"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ve,
      {
        cellComponent: ProductCell,
        cellProps: { records, columns },
        columnCount: columns,
        columnWidth: CARD_WIDTH,
        rowCount: rows,
        rowHeight: CARD_HEIGHT + 100,
        style: { height: 1e3, width: containerWidth }
      }
    ) })
  ] });
};
export {
  ProductListVirtualization as default
};
