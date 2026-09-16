import { r as reactExports, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
const titles = ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"];
const privacyPolicyHTML = `
  <div class="max-w-3xl mx-auto p-6 text-gray-800 leading-relaxed">
    <p class="mb-4">
      This Privacy Policy explains how your personal information is collected, used,
      disclosed, and otherwise processed by the respective operating entity of the Site:
      G2.com, Inc., Software Advice Inc., Capterra Inc., or Nubera eBusiness S.L.,
      as applicable (<strong class="text-gray-900">"we"</strong>,
      <strong class="text-gray-900">"us"</strong> or
      <strong class="text-gray-900">"our"</strong>).
      The term <strong class="text-gray-900">"you"</strong> (and its cognates) refers to the
      user of the Site. Any capitalized term used but not defined herein has the meaning
      given to it in the General User Terms.
    </p>

    <p class="mb-4">
      We may update this Privacy Policy to reflect changes to the law, the Site, or our
      business. If you do not agree to this Privacy Policy or any updated Privacy Policy,
      you must stop using the Site.
    </p>

    <p class="mb-2">This Privacy Policy applies to personal information collected through:</p>

    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>our websites, mobile-enabled experiences, and related online services;</li>
      <li>our communications with software buyers, reviewers, vendors, and other business contacts; and</li>
      <li>any other interactions where this Privacy Policy is linked or made available.</li>
    </ul>
  </div>
`;
function Accordions() {
  const [multiple, setMultiple] = reactExports.useState(false);
  const [accs, setAccs] = reactExports.useState(
    () => Array.from({ length: 4 }, (_, ind) => ({
      id: `${Date.now()}-${ind} `,
      title: titles[ind] || `Accordion ${ind + 1} `,
      body: privacyPolicyHTML,
      open: ind === 0 ? true : false
    }))
  );
  const handleToggle = (id) => {
    setAccs((prev) => prev.map(
      (item) => multiple ? id === item.id ? { ...item, open: !item.open } : item : id === item.id ? { ...item, open: !item.open } : { ...item, open: false }
    ));
  };
  const expandToggle = (type) => {
    setAccs((prev) => prev.map(
      (item) => type === "expand" ? { ...item, open: true } : { ...item, open: false }
    ));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg mb-4 text-sky-700 font-bold", children: "Accordion optional single/multi toggle" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 flex flex-col gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm text-gray-700 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Create an accordion with 5 FAQ items" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Click on a header to expand/collapse its content" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Only one section open at a time (accordion behavior) — optional single/multi toggle" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Animate the expand/collapse with CSS transitions (max-height or grid trick)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Show chevron icon that rotates based on open/closed state" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Support keyboard navigation: Tab to focus, Enter/Space to toggle" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Add a "Expand All" / "Collapse All" button' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Preserve open state when list order changes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Make it a reusable component that accepts items as props" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row p-4 justify-end gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "border border-red-100 bg-red-50 px-4 py-1 rounded-xl hover:bg-amber-100 hover:cursor-pointer", children: [
            "Toggle and multiple Expand:",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                onChange: (e) => setMultiple(e.currentTarget.checked),
                type: "checkbox",
                checked: multiple,
                className: "ml-2 checkbox rounded-xl border border-red-300 p-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => expandToggle("expand"),
              children: "Expand All"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => expandToggle("collapse"),
              children: "Collapse All"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col", children: accs.map(
          (item) => /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { item, handleToggle }, item.id)
        ) })
      ] }) })
    ] })
  ] });
}
const Accordion = ({ item, handleToggle }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-300 rounded-lg mb-3 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => handleToggle(item.id),
        className: "w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-left font-medium",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-left", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `transition - transform duration - 200 ${item.open ? "rotate-180" : "rotate-0"} `,
              children: "▼"
            }
          )
        ]
      }
    ),
    item.open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 bg-white text-sm text-gray-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { class: "text-2xl font-bold text-sky-700 mb-4", children: item.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { dangerouslySetInnerHTML: { __html: item.body } }),
      ";"
    ] })
  ] });
};
export {
  Accordions as default
};
