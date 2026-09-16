import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeRunner = ({ practice, seq }) => {
  const [isOpen, setIsOpen] = useState(false);
  const result = practice.fn(...practice.args);

  return (
    <div className="bg-orange-50 mb-4">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex justify-between items-center rounded-t-xl shadow-2xl
                   bg-stone-500 hover:bg-stone-600 hover:cursor-pointer
                   px-4 py-3 text-left"
      >
        <h2 className="!text-white text-2xl font-medium ">
          {seq}:  {practice.title}
        </h2>

        <span className="text-xl text-white">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="code-block bg-white border border-stone-500 rounded-b-xl shadow-2xl px-10">

          {/* Params */}
          <h3 className="text-purple-700 p-4">
            Params/Arguments(s):
            <pre className="m-4 mb-0 wrap whitespace-pre-wrap">
              {practice.args
                .map((arg) => JSON.stringify(arg, null, 1))
                .join(", ")}
            </pre>
          </h3>

          {/* Code */}
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            showLineNumbers
          >
            {practice.fn.toString()}
          </SyntaxHighlighter>

          {/* Output */}
          <h3 className="bg-gray-50 text-teal-700 p-4">
            Output/Result(s):

            <pre className="m-4 wrap whitespace-pre-wrap">
              {JSON.stringify(result, null, 0)}
            </pre>
          </h3>

        </div>
      )}
    </div>
  );
};

export default CodeRunner;
