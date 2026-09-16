import { r as reactExports, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
const stars = [1, 2, 3, 4, 5];
const StarRating = () => {
  const [rating, setRating] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg mb-4 text-sky-700 font-bold", children: "Star Rating" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 flex flex-row gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2 requiremetns", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm text-gray-700 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✅ Display 5 stars for rating (0 to 5)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✅ Click a star to set the rating" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ Hover over a star to preview — highlight all stars up to hovered one" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ On hover leave, revert to the committed rating" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: '✅ Show "Rating: X / 5" text below' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ Support half-star ratings (0.5 steps) via click on left/right half of star" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ Keyboard accessible: arrow keys to change, Enter to commit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ Read-only mode (disabled) for showing average ratings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: '✅ Show a "Clear" button to reset rating to 0' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ Persist rating to localStorage" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-block flex-1 border rounded-xl bg-gray-50 border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 p-8 h-full justify-center items-center bg-gray-50 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: stars.map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setRating(star),
            type: "button",
            "aria-label": `Rate ${star} star`,
            className: "w-10 h-10 transition-transform hover:scale-110",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                viewBox: "0 0 24 24",
                className: `w-10 h-10 ${rating >= star ? "text-yellow-400" : "text-gray-300"}`,
                fill: "currentColor",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })
              }
            )
          },
          star
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-700 font-medium", children: [
          "Rating: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-yellow-600 font-bold", children: rating }),
          " / 5"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setRating(0),
            type: "button",
            className: "px-4 py-1.5 text-sm rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition-colors",
            children: "Clear"
          }
        )
      ] }) })
    ] })
  ] });
};
export {
  StarRating as default
};
