import { j as jsxRuntimeExports, r as reactExports } from "./index-CiIyD-gq.js";
import { L as Le } from "./react-window-BtiVCQm_.js";
const ProductRowCard = ({ product }) => {
  const {
    id,
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    availabilityStatus,
    thumbnail,
    tags,
    warrantyInformation,
    shippingInformation,
    returnPolicy,
    minimumOrderQuantity
  } = product;
  const discountedPrice = (price * (1 - discountPercentage / 100)).toFixed(2);
  const stockStyles = availabilityStatus === "In Stock" ? "text-green-600" : availabilityStatus === "Low Stock" ? "text-amber-600" : "text-red-600";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-4 items-start relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-0 flex-none bg-sky-500 rounded-br-xl text-white px-4 py-2 cursor-pointer", children: id }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 sm:col-span-3 lg:col-span-2 flex items-center justify-center rounded-lg bg-gray-50 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: thumbnail,
        alt: title,
        className: "max-h-full w-auto object-contain",
        loading: "lazy"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 sm:col-span-6 lg:col-span-5 flex flex-col gap-2 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wide text-sky-600", children: category }),
        brand && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-500", children: [
          "• ",
          brand
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-gray-900 line-clamp-1", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-gray-600 line-clamp-2", children: description }),
      tags?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: tags.slice(0, 4).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "span",
        {
          className: "rounded-full bg-sky-50 px-2 py-0.5 text-[11px] font-medium text-sky-700",
          children: [
            "#",
            tag
          ]
        },
        tag
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 sm:col-span-3 lg:col-span-2 flex flex-col gap-1 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-700", children: [
        "⭐ ",
        rating,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "/ 5" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs font-semibold ${stockStyles}`, children: [
        availabilityStatus,
        " (",
        stock,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 sm:col-span-12 lg:col-span-2 flex flex-col gap-1 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-bold text-emerald-600", children: [
        "$",
        discountedPrice
      ] }),
      discountPercentage > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-400 line-through", children: [
          "$",
          price
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded bg-red-100 px-1.5 py-0.5 text-xs font-semibold text-red-700", children: [
          "-",
          discountPercentage.toFixed(0),
          "%"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-12 lg:col-span-1 flex flex-col gap-1 text-xs text-gray-600 p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: warrantyInformation, children: "🛡️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: shippingInformation, children: "🚚" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: returnPolicy, children: "↩️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: `Min order: ${minimumOrderQuantity}`, children: "📦" })
    ] })
  ] }) });
};
const url = `https://dummyjson.com/products?limit=194`;
const useApi = fetch(url).then((res) => {
  if (!res.ok) {
    throw new Error(`HTTP error ${res.status}`);
  }
  return res.json();
});
function ProductRow({ index, style, records }) {
  const product = records[index];
  if (!product) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductRowCard, { product }) }) });
}
const UseApiProductList = () => {
  const prodlist = reactExports.use(useApi);
  const records = prodlist.products;
  const [loaded, setLoaded] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-full p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Products List with use() API and Virtualization" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500", children: [
        "Showing 1–",
        loaded,
        " of ",
        prodlist.total,
        " products"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Le,
      {
        rowComponent: ProductRow,
        rowCount: records.length,
        rowHeight: 200,
        rowProps: { records },
        style: { height: 800, width: "100%" },
        onRowsRendered: ({ stopIndex }) => {
          setLoaded((prev) => Math.max(prev, stopIndex + 1));
        }
      }
    )
  ] });
};
export {
  UseApiProductList as default
};
