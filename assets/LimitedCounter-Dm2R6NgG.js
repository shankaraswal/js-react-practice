import { r as reactExports, M as MessageContext, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
const initialvalues = 6;
const LimitedCounter = () => {
  const [count, setCount] = reactExports.useState(initialvalues);
  const [newMsg, addNewMsg] = reactExports.useState("");
  const { messages, addMessage, delMessage } = reactExports.useContext(MessageContext);
  const handleCounter = (type) => {
    console.log(type);
    const newcount = type === "inc" ? count + 1 : count - 1;
    setCount(newcount);
  };
  const handleReset = () => {
    setCount(initialvalues);
  };
  const handleNewMsg = () => {
    addMessage(newMsg);
    addNewMsg("");
  };
  const handleDelMsg = (ind) => {
    delMessage(ind);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg mb-4 text-orange-800", children: "Limited counter toggeling" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 flex flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm text-gray-700 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Counter starts from 0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Increment button — adds +1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Decrement button — subtracts -1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Increment button should be disabled when count is 10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Decrement button should be disabled when count is 0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'A "Reset" button to bring the counter back to 0' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Counter value color should be green when > 5, otherwise red" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gap-4 flex flex-row justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleCounter("dec"),
              disabled: count === 0,
              className: "px-10 py-4 bg-orange-500 text-white font-bold text-2xl rounded-2xl  disabled:opacity-50 disabled:cursor-not-allowed",
              children: "Decrese "
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `inline-flex py-8 items-center justify-center font-bold text-4xl w-10 h-10 rounded-full
                                    ${count > 7 ? "text-green-500" : count < 4 ? "text-red-500" : "text-black"}`,
              children: count
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleCounter("inc"),
              disabled: count === 10,
              className: "px-10 py-4 bg-orange-500 text-white font-bold text-2xl rounded-2xl  disabled:opacity-50 disabled:cursor-not-allowed",
              children: "Increase"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => handleReset(),
            disabled: initialvalues === count,
            className: "px-10 py-2 mx-auto bg-gray-500 text-white font-bold \n                        rounded-md disabled:opacity-20",
            children: "Reset"
          }
        ),
        " "
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 my-10 p-10 border border-green-600 rounded-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "This green section is the cobination of MessageContext.jsx & MessageProvider.jsx components for test purposes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 my-10 p-12 border border-amber-400 rounded-xl text-xl flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "", children: "this is a context api example: " }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: newMsg,
              onChange: (e) => addNewMsg(e.target.value),
              type: "text",
              className: "flex-1 border border-gray-400 text bg-sky-50 text-lg px-4 py-2 rounded-md"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleNewMsg,
              className: "w-52 bg-amber-500 text-white text-lg rounded-full px-6 py-2",
              children: "Add New Message"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 my-6", children: messages.length > 0 && messages.map((msg) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white justify-between border-b items-center border-gray-300 flex flex-row py-2 px-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "flex-1 bg-white px-4 flex", children: msg.id }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "flex-1 bg-white px-4 flex", children: msg.text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleDelMsg(msg.id),
                className: "bg-red-500 text-white px-6 py-1.5 flex p-4 cursor-pointer hover:scale-110",
                children: "Delete"
              }
            )
          ]
        },
        msg.id
      )) })
    ] })
  ] });
};
export {
  LimitedCounter as default
};
