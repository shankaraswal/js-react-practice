import { r as reactExports, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
const intialObj = {
  width: 1366,
  height: 768
};
const useWindowResize = () => {
  const delay = 200;
  const [size, setSize] = reactExports.useState(intialObj);
  const [manualSize, setManualResize] = reactExports.useState(intialObj);
  reactExports.useEffect(() => {
    let debounceTimer;
    const handleWindowResize = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }, delay);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      clearTimeout(debounceTimer);
    };
  }, [delay]);
  reactExports.useEffect(() => {
    window.resizeTo(manualSize.width, manualSize.height);
  }, [manualSize.height, manualSize.width]);
  const resizeTo = reactExports.useCallback(({ width, height }) => {
    console.log("resizeTo called");
    setManualResize({ width, height });
    window.resizeTo(width, height);
  }, []);
  return { size, manualSize, resizeTo };
};
const LocalStorageHook = () => {
  const { size, manualSize, resizeTo } = useWindowResize();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg mb-4 text-sky-700 font-bold", children: "Create hook to save and retrieve data from local storage " }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 flex flex-row gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[40%] shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm text-gray-700 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Create a custom hook ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "useWindowResize" }),
          " to manage window resize events"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Return current window ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "width" }),
          " and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "height" }),
          " from the hook"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Live preview:" }),
          " Display current dimensions as ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "Width × Height" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Breakpoint badge:" }),
          " Show Mobile / Tablet / Desktop based on width"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Preset buttons:" }),
          " Mobile, Tablet, Desktop — call ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "window.resizeTo" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Manual input:" }),
          " Fields for width and height with an Apply button"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Resize history:" }),
          " Store last 5 unique size pairs (newest first)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Reset history:" }),
          " Clear the list without resetting the counter"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Resize counter:" }),
          " Show total number of unique resize events in session"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Debounce or throttle resize events to avoid performance issues" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Ignore duplicate consecutive sizes in history and counter" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Handle invalid manual inputs (empty, negative, non-numeric)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Cleanup the resize listener on component unmount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Hook must be reusable in any other component without modification" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Display history and preview in a structured card layout" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-red-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between items-center gap-4 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-gray-100 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-gray-600", children: "Live Size" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl font-mono", children: [
            size.width,
            " × ",
            size.height
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-gray-100 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm text-gray-600", children: "Manaul Re-size" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-mono", children: !manualSize ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            "n",
            JSON.stringify(manualSize)
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            manualSize.width,
            " × ",
            manualSize.height
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "bg-red-500 text-white text-xl rounded-full px-6 py-2 m-4",
              onClick: () => resizeTo({ width: 1366, height: 768 }),
              children: "Resize Window"
            }
          )
        ] })
      ] }) })
    ] })
  ] });
};
export {
  LocalStorageHook as default
};
