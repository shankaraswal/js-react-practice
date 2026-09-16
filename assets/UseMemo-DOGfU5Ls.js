import { r as reactExports, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
const UseMemo = () => {
  const [search, setSearch] = reactExports.useState("");
  const [count, setCount] = reactExports.useState(0);
  const numbers = reactExports.useMemo(() => {
    return Array.from({ length: 1e4 }, (_, i) => i + 1);
  }, []);
  const filteredNumbers = reactExports.useMemo(() => {
    return numbers.filter(
      (num) => {
        console.log("search");
        return num.toString().includes(search);
      }
    );
  }, [numbers, search]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "useMemo example" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        value: search,
        onChange: (e) => setSearch(e.target.value)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setCount(count + 1), children: [
      "Count: ",
      count
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      filteredNumbers.length,
      " results"
    ] })
  ] });
};
export {
  UseMemo as default
};
