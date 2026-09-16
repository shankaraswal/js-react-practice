import{r as i,j as e}from"./index-CI9ZrU-J.js";const p=["Privacy Policy","Terms of Service","Cookie Policy","GDPR"],h=`
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
`;function g(){const[l,a]=i.useState(!1),[c,r]=i.useState(()=>Array.from({length:4},(t,o)=>({id:`${Date.now()}-${o} `,title:p[o]||`Accordion ${o+1} `,body:h,open:o===0}))),d=t=>{r(o=>o.map(s=>l?t===s.id?{...s,open:!s.open}:s:t===s.id?{...s,open:!s.open}:{...s,open:!1}))},n=t=>{r(o=>o.map(s=>t==="expand"?{...s,open:!0}:{...s,open:!1}))};return e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-lg mb-4 text-sky-700 font-bold",children:"Accordion optional single/multi toggle"}),e.jsxs("div",{className:"pb-4 flex flex-col gap-10",children:[e.jsx("div",{className:"w-full",children:e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-700 space-y-1",children:[e.jsx("li",{children:"Create an accordion with 5 FAQ items"}),e.jsx("li",{children:"Click on a header to expand/collapse its content"}),e.jsx("li",{children:"Only one section open at a time (accordion behavior) — optional single/multi toggle"}),e.jsx("li",{children:"Animate the expand/collapse with CSS transitions (max-height or grid trick)"}),e.jsx("li",{children:"Show chevron icon that rotates based on open/closed state"}),e.jsx("li",{children:"Support keyboard navigation: Tab to focus, Enter/Space to toggle"}),e.jsx("li",{children:'Add a "Expand All" / "Collapse All" button'}),e.jsx("li",{children:"Preserve open state when list order changes"}),e.jsx("li",{children:"Make it a reusable component that accepts items as props"})]})}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsxs("div",{className:"flex flex-row p-4 justify-end gap-4",children:[e.jsxs("label",{className:"border border-red-100 bg-red-50 px-4 py-1 rounded-xl hover:bg-amber-100 hover:cursor-pointer",children:["Toggle and multiple Expand:",e.jsx("input",{onChange:t=>a(t.currentTarget.checked),type:"checkbox",checked:l,className:"ml-2 checkbox rounded-xl border border-red-300 p-2"})]}),e.jsx("button",{onClick:()=>n("expand"),children:"Expand All"}),e.jsx("button",{onClick:()=>n("collapse"),children:"Collapse All"})]}),e.jsx("div",{className:"flex flex-col",children:c.map(t=>e.jsx(x,{item:t,handleToggle:d},t.id))})]})})]})]})}const x=({item:l,handleToggle:a})=>e.jsxs("div",{className:"border border-gray-300 rounded-lg mb-3 overflow-hidden",children:[e.jsxs("button",{onClick:()=>a(l.id),className:"w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-left font-medium",children:[e.jsx("div",{className:"text-left",children:l.title}),e.jsx("span",{className:`transition - transform duration - 200 ${l.open?"rotate-180":"rotate-0"} `,children:"▼"})]}),l.open&&e.jsxs("div",{className:"px-4 py-3 bg-white text-sm text-gray-700",children:[e.jsx("h1",{class:"text-2xl font-bold text-sky-700 mb-4",children:l.title}),e.jsx("div",{dangerouslySetInnerHTML:{__html:l.body}}),";"]})]});export{g as default};
