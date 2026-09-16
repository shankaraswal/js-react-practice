import { r as reactExports, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
const arr = Array.from({ length: 1e3 }, (_, ind) => ind);
const Debouncing = () => {
  const [search, setSearch] = reactExports.useState("");
  const [count, setCount] = reactExports.useState(0);
  const [debouncing, setDebouncing] = reactExports.useState("");
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncing(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);
  const filteredNumbers = reactExports.useMemo(() => {
    return arr.filter((num) => {
      return num.toString().includes(debouncing);
    });
  }, [debouncing]);
  const handleCount = () => {
    setCount(count + 1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-10 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          onChange: (e) => setSearch(e.target.value),
          defaultValue: search,
          type: "number",
          className: "border border-orange-500 rounded-md px-3 py-2"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleCount,
          className: "bg-red-500 text-white font-medium text-xl px-10 py-2 rounded-full",
          children: [
            "Count: ",
            count,
            " "
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "uppercase text-lg", children: [
      "filtered Numbers length results : ",
      filteredNumbers.length
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "whitespace-pre-wrap leading-7 tracking-widest flex flex-col break-words bg-gray-100 p-4 rounded-lg", children: JSON.stringify(arr, 2) })
  ] });
};
export {
  Debouncing as default
};
