import { r as reactExports, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
import { L as LoadingMessage, E as ErrorMessage, N as NoRecordsMessage } from "./HelperComps-C9aN9p_i.js";
const useDebounce = (value, delay) => {
  const [debounced, setDebounced] = reactExports.useState(value);
  reactExports.useEffect(() => {
    const deb_timer = setTimeout(() => {
      setDebounced(value);
    }, delay);
    return () => clearTimeout(deb_timer);
  }, [value, delay]);
  return { debounced };
};
const RecipeList = () => {
  const [data, setData] = reactExports.useState([]);
  const [filterd, setFiltered] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const { debounced } = useDebounce(search, 500);
  reactExports.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/recipes");
        if (!res.ok) {
          console.log(`Else block error with status code ${res.status}`);
        }
        const results = await res.json();
        setData(results.recipes);
      } catch (err) {
        setError(true);
        console.log(`Catch block error ${err.message} with status code ${err.status}`);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  reactExports.useEffect(() => {
    const newdata = data.filter((item) => {
      return item.name.toLowerCase().includes(debounced.toLowerCase());
    });
    setFiltered(newdata);
  }, [data, debounced]);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingMessage, {});
  if (error) return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorMessage, {});
  if (data?.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(NoRecordsMessage, {});
  const finaldata = search === "" ? [...data] : [...filterd];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg mb-4 text-sky-700 font-bold", children: " Search Filter" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 flex flex-col gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm text-gray-700 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Create a custom hook ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "useDebounce(value, delay)" }),
          " that returns a debounced value"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Use the hook to debounce a search input field" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Input field for searching through a list of 100+ items" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Only filter the list after user stops typing for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "500ms" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Display "Searching..." while debounce is pending' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Show count of matched vs total items" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Highlight matched text in the results" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Show "No results found" if no matches' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Provide a delay slider to control debounce timing (100ms – 1000ms)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Display current debounce delay value" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Add a clear button to reset search" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex justify-end items-center gap-4 bg-red-50 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Search: " }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Search recipes...",
              className: "w-full max-w-md rounded-lg border border-gray-300 px-4 py-2"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-4 gap-4 max-w-full mt-4 w-full max-h-100 overflow-x-auto", children: [
          finaldata.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "No match found" }),
          finaldata.map((recipe) => /* @__PURE__ */ jsxRuntimeExports.jsx(RecipeCard, { recipe }))
        ] })
      ] }) })
    ] })
  ] });
};
const RecipeCard = ({ recipe }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: recipe.image,
        alt: recipe.name,
        className: "h-40 w-full object-cover"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-1 text-lg font-semibold text-gray-800", children: recipe.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3 text-sm text-gray-500", children: [
        recipe.cuisine,
        " • ",
        recipe.difficulty
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-600", children: [
          "⏱ ",
          recipe.prepTimeMinutes + recipe.cookTimeMinutes,
          " min"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-yellow-600", children: [
          "★ ",
          recipe.rating
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-600", children: [
          "🍽 ",
          recipe.servings
        ] })
      ] })
    ] })
  ] }) });
};
export {
  RecipeList as default
};
