import { j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
const ProductCard = ({ product }) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 rounded-xl border border-gray-200 relative bg-white p-4 shadow-sm transition hover:shadow-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-0 bg-amber-600 w-10 h-10 text-2xl pt-1 justify-center text-center rounded-br-xl items-center text-white", children: id }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-44 items-center justify-center rounded-lg bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: thumbnail,
        alt: title,
        className: "h-full w-full object-contain",
        loading: "lazy"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wide text-indigo-600", children: category }),
      brand && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500", children: brand })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-gray-900 line-clamp-1", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-gray-600 line-clamp-3", children: description }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-bold text-emerald-600", children: [
        "$",
        discountedPrice
      ] }),
      discountPercentage > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
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
    tags?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: "rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-medium text-indigo-700",
        children: [
          "#",
          tag
        ]
      },
      tag
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-1 flex flex-col gap-1 border-t border-gray-100 pt-2 text-xs text-gray-600", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🛡️" }),
        " ",
        warrantyInformation
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🚚" }),
        " ",
        shippingInformation
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "↩️" }),
        " ",
        returnPolicy
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📦" }),
        " Min order: ",
        minimumOrderQuantity
      ] })
    ] })
  ] });
};
export {
  ProductCard as P
};
