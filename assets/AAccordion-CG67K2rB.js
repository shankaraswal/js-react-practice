import{r,j as e}from"./index-B5Zmdb6J.js";const c=["Privacy Policy","Terms of Service","Cookie Policy","GDPR"],d=`
  <div class="max-w-3xl mx-auto p-6 text-gray-800 leading-relaxed">
    <h1 class="text-2xl font-bold text-sky-700 mb-4">Privacy Policy</h1>

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
`;function x(){const[s,i]=r.useState(()=>Array.from({length:4},(o,t)=>({id:`${Date.now()}-${t} `,title:c[t]||`Accordion ${t+1} `,body:d,open:t===0}))),n=o=>{i(t=>t.map(l=>o===l.id?{...l,open:!0}:{...l,open:!1}))},a=o=>{i(t=>t.map(l=>o==="expand"?{...l,open:!0}:{...l,open:!1}))};return console.log(s),e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-lg mb-4 text-sky-700 font-bold",children:"Debounce Searching Without useDebounce Hook "}),e.jsxs("div",{className:"pb-4 flex flex-col gap-10",children:[e.jsx("div",{className:"w-full",children:e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 space-y-1",children:[e.jsx("li",{children:"Create an accordion with 5 FAQ items"}),e.jsx("li",{children:"Click on a header to expand/collapse its content"}),e.jsx("li",{children:"Only one section open at a time (accordion behavior) — optional single/multi toggle"}),e.jsx("li",{children:"Animate the expand/collapse with CSS transitions (max-height or grid trick)"}),e.jsx("li",{children:"Show chevron icon that rotates based on open/closed state"}),e.jsx("li",{children:"Support keyboard navigation: Tab to focus, Enter/Space to toggle"}),e.jsx("li",{children:'Add a "Expand All" / "Collapse All" button'}),e.jsx("li",{children:"Preserve open state when list order changes"}),e.jsx("li",{children:"Make it a reusable component that accepts items as props"})]})}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsxs("div",{className:"flex flex-row p-4 justify-end gap-4",children:[e.jsx("button",{onClick:()=>a("expand"),children:"Expand All"}),e.jsx("button",{onClick:()=>a("collapse"),children:"Collapse All"})]}),e.jsx("div",{className:"flex flex-col",children:s.map(o=>e.jsx(h,{item:o,handleToggle:n},o.id))})]})})]})]})}const h=({item:s,handleToggle:i})=>e.jsxs("div",{className:"border border-gray-300 rounded-lg mb-3 overflow-hidden",children:[e.jsxs("button",{onClick:()=>i(s.id),className:"w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-left font-medium",children:[e.jsx("div",{className:"text-left",children:s.title}),e.jsx("span",{className:`transition - transform duration - 200 ${s.open?"rotate-180":"rotate-0"} `,children:"▼"})]}),s.open&&e.jsxs("div",{className:"px-4 py-3 bg-white text-sm text-gray-700",children:[e.jsx("div",{dangerouslySetInnerHTML:{__html:s.body}}),";"]})]});export{x as default};
