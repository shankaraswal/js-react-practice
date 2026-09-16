import { r as reactExports, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
const initialStock = {
  like: {
    count: 100,
    disabled: false
  },
  dislike: {
    count: 50,
    disabled: false
  }
};
const Coforge = () => {
  const [feedbackCount, setFeedbackCount] = reactExports.useState(initialStock);
  const handleFeedback = (type) => {
    setFeedbackCount(() => {
      const other = type === "like" ? "dislike" : "like";
      return {
        [type]: {
          count: initialStock[type].count + 1,
          disabled: true
        },
        [other]: {
          count: initialStock[other].count,
          disabled: false
        }
      };
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-medium mb-4 text-sky-800!", children: "With use of dynamic like and dislike key and their objects creation and state updattion" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gap-10 flex mt-10 font-bold tracking-widest text-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          disabled: feedbackCount.like.disabled,
          onClick: () => handleFeedback("like"),
          className: "px-16 py-6 text-white bg-sky-600 rounded transition-colors w-50 disabled:opacity-60 hover:cursor-pointer disabled:cursor-not-allowed",
          children: [
            "Like ",
            feedbackCount.like.count
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          disabled: feedbackCount.dislike.disabled,
          onClick: () => handleFeedback("dislike"),
          className: "px-16 py-6 text-white bg-sky-600 rounded transition-colors w-50 disabled:opacity-60 hover:cursor-pointer disabled:cursor-not-allowed",
          children: [
            "Dislike ",
            feedbackCount.dislike.count
          ]
        }
      )
    ] })
  ] });
};
export {
  Coforge as default
};
