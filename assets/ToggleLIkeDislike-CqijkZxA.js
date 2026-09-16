import { r as reactExports, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
const intialValues = {
  like: { count: 100, disabled: false },
  dislike: { count: 50, disabled: false }
};
const ToggleLIkeDislike = () => {
  const [feedback, setFeedback] = reactExports.useState(intialValues);
  const handleFeedback = (type) => {
    const newtype = type === "like" ? "dislike" : "like";
    setFeedback({
      ...feedback,
      [type]: { count: feedback[type].count + 1, disabled: true },
      [newtype]: { count: intialValues[newtype].count, disabled: intialValues[newtype].disabled }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg mb-4 text-sky-700 font-bold", children: "Like and Dislike button's count toggeling" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 flex flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm text-gray-700 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Like starts at 100, Dislike starts at 50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Clicking a button increments its count by +1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Clicked button becomes disabled" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Clicking the other button resets the first one to its initial count" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Only one of Like / Dislike can be active at a time" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-4 flex flex-col gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gap-4 flex flex-row justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleFeedback("like"),
            disabled: feedback.like.disabled,
            className: "px-10 py-4 bg-sky-700 text-white font-bold text-2xl rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed",
            children: [
              "Like ",
              feedback.like.count
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => handleFeedback("dislike"),
            disabled: feedback.dislike.disabled,
            className: "px-10 py-4 bg-sky-700 text-white font-bold text-2xl rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed",
            children: [
              "Dislike ",
              feedback.dislike.count
            ]
          }
        )
      ] }) })
    ] })
  ] });
};
export {
  ToggleLIkeDislike as default
};
