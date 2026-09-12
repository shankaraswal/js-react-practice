import { lazy, Suspense, useState } from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const components = import.meta.glob('./react-comps/*.jsx');

const sources = import.meta.glob('./react-comps/*.jsx', {
    query: '?raw',
    import: 'default',
    eager: true,
});

const demos = Object.entries(components).map(([path, importer]) => {
    const name = path.replace('./react-comps/', '').replace('.jsx', '');

    return {
        LazyComponent: lazy(importer),
        name,
        source: sources[path] ?? '// Source not available',
    };
});

// Accordion Toggle Component
const CodeAccordion = ({ source }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mt-4 border-t border-gray-200 pt-4">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="px-4 py-2 text-sm font-semibold text-orange-600 border border-orange-500 rounded-md hover:bg-orange-50 transition-colors cursor-pointer"
            >
                {isOpen ? 'Hide Source Code' : 'Show Source Code'}
            </button>

            {isOpen && (
                <div className="mt-3 rounded-lg overflow-hidden">
                    <SyntaxHighlighter
                        language="javascript"
                        style={atomDark}
                        showLineNumbers
                    >
                        {source}
                    </SyntaxHighlighter>
                </div>
            )}
        </div>
    );
};

const ReactComps = () => {
    return (
        <div>
            {demos.map(({ name, LazyComponent, source }) => (
                <div
                    key={name}
                    className="border border-orange-300 p-10 bg-white rounded-xl mb-6"
                >
                    <h3 className="text-2xl text-orange-600 font-bold mb-2">{name}</h3>
                    <Suspense fallback={<p>Loading component…</p>}>
                        <LazyComponent />
                    </Suspense>

                    {/* Source Code Accordion */}
                    <CodeAccordion source={source} />
                </div>
            ))}
        </div>
    );
};

export default ReactComps;