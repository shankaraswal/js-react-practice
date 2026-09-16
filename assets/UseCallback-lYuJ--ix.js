import { r as reactExports, j as jsxRuntimeExports, R as React } from "./index-CiIyD-gq.js";
const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick, children: "Child Button" });
});
const UseCallback = () => {
  const [count, setCount] = reactExports.useState(0);
  const handleClick = reactExports.useCallback(() => {
    console.log("Child button clicked");
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "useCallback example" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setCount(count + 1), children: [
      "Count: ",
      count
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Child, { onClick: handleClick })
  ] });
};
export {
  UseCallback as default
};
