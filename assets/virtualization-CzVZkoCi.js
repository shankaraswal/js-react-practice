import { j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
import { L as Le } from "./react-window-BtiVCQm_.js";
const records = Array.from({ length: 1e4 }, (_, i) => {
  return {
    id: `id-${i + 1}`,
    name: `User-${i + 1}`
  };
});
function Row({ index, style }) {
  const user = records[index];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex border-b border-gray-300 flex-row px-4 py-1.5", style, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1/2 ", children: user.id }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: user.name })
  ] });
}
const Virtualization = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-orange-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Le,
    {
      rowComponent: Row,
      rowCount: records.length,
      rowHeight: 35,
      rowProps: { records },
      className: "bg-red-100 h-150 w-full"
    }
  ) });
};
export {
  Virtualization as default
};
