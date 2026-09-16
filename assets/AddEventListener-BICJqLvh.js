import { r as reactExports, M as MessageContext, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
function AddEventListener() {
  const { messages, delMessage } = reactExports.useContext(MessageContext);
  reactExports.useEffect(() => {
    const handleResize = () => {
      console.log("Window resized");
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleDelMsg = (ind) => {
    delMessage(ind);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "My Component" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 my-6", children: messages.map((msg) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white justify-between border-b items-center border-gray-300 flex flex-row py-2 px-4", children: [
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
    ] })) })
  ] });
}
export {
  AddEventListener as default
};
