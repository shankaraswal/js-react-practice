import { r as reactExports, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
import { h as highlighter, a as atomDark } from "./atom-dark-Ciyqb7x9.js";
const CodeRunner = ({ practice, seq }) => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const result = practice.fn(...practice.args);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setIsOpen((prev) => !prev),
        className: "w-full flex justify-between items-center rounded-t-xl shadow-2xl\n                   bg-stone-500 hover:bg-stone-600 hover:cursor-pointer\n                   px-4 py-3 text-left",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "!text-white text-2xl font-medium ", children: [
            seq,
            ": ",
            practice.title
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl text-white", children: isOpen ? "▲" : "▼" })
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "code-block bg-white border border-stone-500 rounded-b-xl shadow-2xl px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-purple-700 p-4", children: [
        "Params/Arguments(s):",
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "m-4 mb-0 wrap whitespace-pre-wrap", children: practice.args.map((arg) => JSON.stringify(arg, null, 1)).join(", ") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        highlighter,
        {
          language: "javascript",
          style: atomDark,
          showLineNumbers: true,
          children: practice.fn.toString()
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "bg-gray-50 text-teal-700 p-4", children: [
        "Output/Result(s):",
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "m-4 wrap whitespace-pre-wrap", children: JSON.stringify(result, null, 0) })
      ] })
    ] })
  ] });
};
const stringCompression = {
  title: "String compression and max character frequency",
  args: [
    "abacbdefcabsbdftttttt"
  ],
  fn: function stringCompressionReduce(str) {
    const arr = [...str];
    const cmprs_obj = arr.reduce((acc, curr) => {
      if (Object.hasOwn(acc, curr)) {
        acc[curr] += 1;
      } else {
        acc[curr] = 1;
      }
      return acc;
    }, {});
    let cmprs_str = "";
    Object.entries(cmprs_obj).forEach(([k, v]) => {
      cmprs_str += k + v;
    });
    const max_char_frqncy = Object.entries(cmprs_obj).sort((a, b) => b[1] - a[1]);
    const [maxKey, maxValue] = max_char_frqncy[0];
    return {
      cmprs_str,
      freq: {
        [maxKey]: maxValue
      }
    };
  }
};
const checkSortedArr = {
  title: "Check if an array is sorted without built-in methods",
  args: [
    [10, 20, 50, 40, 60]
  ],
  fn: function checkSortedArr2(str) {
    let sorted = true;
    for (let i = 1; i < str.length; i++) {
      if (str[i - 1] > str[i]) {
        sorted = false;
        break;
      }
    }
    return {
      sorted
    };
  }
};
const objMaxKeyVal = {
  title: "Get Max value for a object'key",
  args: [
    { a: 3, b: 4, c: 102, d: 2, e: 1, f: 2, i: 12, k: 55, s: 1, t: 6 }
  ],
  fn: function objMaxKeyVal2(obj) {
    let maxkey = "", maxval = -Infinity;
    for (let ob in obj) {
      if (obj[ob] > maxval) {
        maxkey = ob;
        maxval = obj[ob];
      }
    }
    return { maxkey, maxval };
  }
};
const groupAnagrams = {
  title: "Valid Anagram group with foreach and .reduce() methods",
  args: [
    ["rat", "tar", "art", "car", "arc", "acr", "add", "dad", "daa", "ada", "adc", "cad", "xyz"]
  ],
  fn: function groupAnagrams2(arr) {
    const grouped = {};
    arr.forEach((word) => {
      const key = word.split("").sort().join("");
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(word);
    });
    const grouped1 = arr.reduce((acc, word) => {
      const key = word.split("").sort().join("");
      if (!acc[key]) acc[key] = [];
      acc[key].push(word);
      return acc;
    }, {});
    const foreachMethod = Object.values(grouped);
    const reduceMethod = Object.values(grouped1);
    return { foreachMethod, reduceMethod };
  }
};
const groupArrByValues = {
  title: "Group array items by property using reduce() 💡",
  args: [
    [
      { name: "Alice", role: "admin" },
      { name: "Bob", role: "user" },
      { name: "Charlie", role: "admin" },
      { name: "Dave", role: "user" },
      { name: "Eve", role: "guest" }
    ]
  ],
  fn: function groupArrByValues2(arr) {
    const loopMethod = {};
    for (let i = 0; i < arr.length; i++) {
      const key = arr[i].role;
      const xx = loopMethod.hasOwnProperty(key);
      if (!xx) {
        loopMethod[key] = [arr[i]];
      } else {
        loopMethod[key] = [...loopMethod[key], arr[i]];
      }
    }
    const reduceMethod = arr.reduce((acc, item) => {
      const key = item.role;
      if (!acc[key]) {
        acc[key] = [item.name];
      } else {
        acc[key] = [...acc[key], item.name];
      }
      return acc;
    }, {});
    return { loopMethod, reduceMethod };
  }
};
const getFactorial = {
  title: "Find Factorial in JavaScript using a simple loop method 💻",
  args: [8],
  fn: function getFactorial2(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }
};
const capitalizeFirstLetter = {
  title: "Capitalize the first letter of a string in JavaScript using charAt(), toUpperCase(), and slice(). A simple but important string manipulation",
  args: ["counterrevolutionaries"],
  fn: function capitalizeFirstLetter2(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};
const getArrElmCount = {
  title: "Get elements count frequency in an Array",
  args: [["apple", "banana", "orange", "mango", "banana", "orange", "mango", "apple", "banana", "orange"]],
  fn: function getArrElmCount2(arr) {
    const elmCountLoopMethod = {};
    for (let i = 0; i < arr.length; i++) {
      const key = arr[i];
      if (!elmCountLoopMethod.hasOwnProperty(key)) {
        elmCountLoopMethod[key] = 1;
      } else {
        elmCountLoopMethod[key]++;
      }
    }
    const elmCountReduceMethod = arr.reduce((acc, el) => {
      acc[el] = (acc[el] ?? 0) + 1;
      return acc;
    }, {});
    return { elmCountLoopMethod, elmCountReduceMethod };
  }
};
const arrayRotation = {
  title: "Array rotation",
  args: [[1, 2, 3, 4, 5, 6, 7, 8, 9], 4],
  fn: function arrayRotation2(arr, k) {
    return {
      firstPart: arr.slice(0, k),
      secondPart: arr.slice(k),
      rotate: arr.slice(k).concat(arr.slice(0, k))
    };
  }
};
const practices = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayRotation,
  capitalizeFirstLetter,
  checkSortedArr,
  getArrElmCount,
  getFactorial,
  groupAnagrams,
  groupArrByValues,
  objMaxKeyVal,
  stringCompression
}, Symbol.toStringTag, { value: "Module" }));
const JSDecodes = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col min-h-screen pb-24", children: Object.values(practices).map((practice, ind) => /* @__PURE__ */ jsxRuntimeExports.jsx(CodeRunner, { practice, seq: ind + 1 }, practice.title)) });
};
export {
  JSDecodes as default
};
