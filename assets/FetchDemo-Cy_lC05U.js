import { r as reactExports, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
import { L as LoadingMessage, E as ErrorMessage, N as NoRecordsMessage } from "./HelperComps-C9aN9p_i.js";
const useFetch = (base_url) => {
  const BASE_URL = "https://fakestoreapi.com";
  const [URL, setURL] = reactExports.useState(false);
  const [data, setData] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const httpClient = reactExports.useCallback(async (ep, method = "GET", body = null) => {
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : void 0
    };
    setURL(`${BASE_URL}/${ep}`);
    try {
      setLoading(true);
      setError(false);
      const res = await fetch(`${BASE_URL}/${ep}`, options);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const results = await res.json();
      setData(results);
      return results;
    } catch (err) {
      setError(true);
      console.error(err);
      return null;
    } finally {
      setLoading(false);
    }
  }, [BASE_URL]);
  return { httpClient, error, data, loading, BASE_URL, URL };
};
function FetchDemo() {
  const [endPoint, setEndPoint] = reactExports.useState("users");
  const { data, loading, httpClient, error, URL, BASE_URL } = useFetch();
  const loadUsers = async () => {
    const res = await httpClient(endPoint);
    console.log(res);
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingMessage, {});
  if (error) return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorMessage, {});
  if (data?.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(NoRecordsMessage, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg mb-4 text-sky-700 font-bold", children: `useFetch hook with {data, loading, error, httpClient} ==> ${BASE_URL}/${endPoint}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 flex flex-col gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm text-gray-700 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "❌ Create a custom hook ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "useFetch(url)" }),
          " that returns ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: `{ data, loading, error, refetch }` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ Hook should fetch data on mount and when URL changes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✅ Handle loading state — show spinner while fetching" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ Handle error state — show error message with retry button" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ Use AbortController to cancel pending requests on unmount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "❌ Provide a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Refetch" }),
          " button to manually re-fetch"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✅ Add a URL input field to fetch any public API" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ Add preset buttons for common APIs (users, posts, todos from jsonplaceholder)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "✅ Display fetched data in a formatted JSON ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: `<pre>` }),
          " block"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ Show request duration in ms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ Handle empty URL gracefully (don't fetch)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "❌ Prevent race conditions when URL changes rapidly" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex justify-end items-center gap-4 bg-sky-50 rounded-xl border border-sky-200 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-700 whitespace-nowrap", children: [
            "Load data for ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: URL })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: endPoint,
              onChange: (e) => setEndPoint(e.target.value),
              placeholder: "e.g. users, products, carts",
              className: "w-full max-w-md bg-white rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: loadUsers,
              className: "bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-2xl text-xl transition-colors",
              children: "Load data"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-semibold text-gray-800 mb-2", children: [
          "Total: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sky-700", children: data?.length ?? 0 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "bg-red-100 p-4 max-h-100 overflow-auto text-[10px] whitespace-pre-wrap break-words rounded-lg", children: JSON.stringify(data, null, 2) })
      ] })
    ] })
  ] });
}
export {
  FetchDemo as default
};
