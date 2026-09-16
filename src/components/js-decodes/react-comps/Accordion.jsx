import React, { useState } from 'react'
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
    const [multiple, setMultiple] = useState(false)
    const [accs, setAccs] = useState(() =>
        Array.from({ length: 4 }, (_, ind) => ({
            id: `${Date.now()}-${ind} `,
            title: titles[ind] || `Accordion ${ind + 1} `,
            body: privacyPolicyHTML,
            open: ind === 0 ? true : false
        }))
    )

    const handleToggle = (id) => {
        setAccs((prev) => prev.map((item) =>
            multiple
                ? id === item.id
                    ? { ...item, open: !item.open }
                    : item
                : id === item.id ? { ...item, open: !item.open } : { ...item, open: false }
        ))
    }

    const expandToggle = (type) => {
        setAccs((prev) => prev.map((item) =>
            type === 'expand' ? { ...item, open: true } : { ...item, open: false }
        ))
    }
    // console.log(multiple)
    return (
        <>
            <h2 className="text-lg mb-4 text-sky-700 font-bold">Accordion optional single/multi toggle</h2>
            <div className="pb-4 flex flex-col gap-10">
                <div className='w-full'>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Create an accordion with 5 FAQ items</li>
                        <li>Click on a header to expand/collapse its content</li>
                        <li>Only one section open at a time (accordion behavior) — optional single/multi toggle</li>
                        <li>Animate the expand/collapse with CSS transitions (max-height or grid trick)</li>
                        <li>Show chevron icon that rotates based on open/closed state</li>
                        <li>Support keyboard navigation: Tab to focus, Enter/Space to toggle</li>
                        <li>Add a "Expand All" / "Collapse All" button</li>
                        <li>Preserve open state when list order changes</li>
                        <li>Make it a reusable component that accepts items as props</li>
                    </ul>
                </div>

                <div className=''>
                    <div className="flex flex-col w-full">
                        <div className='flex flex-row p-4 justify-end gap-4'>
                            <label className='border border-red-100 bg-red-50 px-4 py-1 rounded-xl hover:bg-amber-100 hover:cursor-pointer'>Toggle and multiple Expand:
                                <input
                                    onChange={(e) => setMultiple(e.currentTarget.checked)}
                                    type="checkbox"
                                    checked={multiple}
                                    className="ml-2 checkbox rounded-xl border border-red-300 p-2" />
                            </label>
                            <button
                                onClick={() => expandToggle('expand')}
                            >Expand All</button>
                            <button
                                onClick={() => expandToggle('collapse')}
                            >Collapse All</button>
                        </div>
                        <div className="flex flex-col">
                            {accs.map((item) =>
                                <Accordion key={item.id} item={item} handleToggle={handleToggle} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Accordions


const Accordion = ({ item, handleToggle }) => {

    return (
        <div className="border border-gray-300 rounded-lg mb-3 overflow-hidden">
            {/* HEAD */}
            <button
                onClick={() => handleToggle(item.id)}
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-left font-medium"
            >
                <div className='text-left'>{item.title}</div>
                <span
                    className={`transition - transform duration - 200 ${item.open ? "rotate-180" : "rotate-0"
                        } `}
                >
                    ▼
                </span>
            </button>

            {/* CONTENT */}
            {item.open && (
                <div className="px-4 py-3 bg-white text-sm text-gray-700">
                    <h1 class="text-2xl font-bold text-sky-700 mb-4">{item.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: item.body }} />;
                </div>
            )}
        </div>
    );
}