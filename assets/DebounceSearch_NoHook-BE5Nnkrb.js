import { r as reactExports, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
import { L as LoadingMessage, E as ErrorMessage, N as NoRecordsMessage } from "./HelperComps-C9aN9p_i.js";
const Test = () => {
  const [data, setData] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const [debounceData, setDebounceData] = reactExports.useState("");
  reactExports.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
          console.log(`Else block error with status code ${res.status}`);
        }
        const results = await res.json();
        setData(results.products);
      } catch (err) {
        setError(true);
        console.log(`Catch block error ${err.message} with status code`);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  reactExports.useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceData(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);
  const filterddata = reactExports.useMemo(() => {
    return data.filter((item) => {
      return item.description.toLowerCase().includes(debounceData.toLowerCase());
    });
  }, [data, debounceData]);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingMessage, {});
  if (error) return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorMessage, {});
  if (data?.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(NoRecordsMessage, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg mb-4 text-sky-700 font-bold", children: "Debounce Searching Without useDebounce Hook " }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 flex flex-col gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm text-gray-700 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Debounce the search input using ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "useEffect" }),
          " + ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "setTimeout" }),
          " (no custom hook)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Fetch 100+ items from an API (e.g. dummyjson products)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Filter list only after user stops typing for the debounce delay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Display ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: '"Searching..."' }),
          " indicator while debounce is pending"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Show count of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "matched vs total" }),
          ' items (e.g. "12 of 100")'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Highlight matched text in the results" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Show ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: '"No results found"' }),
          " message when no matches"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Provide a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "delay slider" }),
          " (100ms – 1000ms) to control debounce timing"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Display current debounce delay value" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Add a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "clear button" }),
          " to reset search and delay"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Handle loading, error, and empty states properly" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Use ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "useMemo" }),
          " to optimize filtering"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex justify-end items-center gap-4 bg-sky-50 rounded-xl border border-sky-200 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Search: " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Search recipes...",
              className: "w-full max-w-md bg-white rounded-lg border border-gray-300 px-4 py-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { children: [
          "Total: ",
          filterddata.length
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "bg-red-100 p-4 h-100! max-h-100 overflow-auto! text-[10px] whitespace-pre-wrap break-words", children: JSON.stringify(filterddata, null, 2) })
      ] })
    ] })
  ] });
};
export {
  Test as default
};
