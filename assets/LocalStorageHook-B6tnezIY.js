import { r as reactExports, M as MessageContext, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
const useLocalStorage = (key, val = null) => {
  const [value, setValue] = reactExports.useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : val;
    } catch (error) {
      console.error(error);
      return val;
    }
  });
  const [allLS, setAllLS] = reactExports.useState();
  const setStorageData = (key2, val2) => {
    if (!key2) return;
    const data = typeof val2 === "object" && val2 !== null ? JSON.stringify(val2) : val2 || "value missing";
    localStorage.setItem(key2, data);
  };
  const getStorageData = (key2) => {
    const rawData = localStorage.getItem(key2);
    try {
      setValue(JSON.parse(rawData));
    } catch {
      setValue(rawData);
    }
  };
  const getAllKeyVals = () => {
    const allls = Object.keys(localStorage).map((k) => {
      let rawVal = localStorage.getItem(k);
      let v;
      try {
        v = JSON.parse(rawVal);
      } catch {
        v = rawVal;
      }
      return { [k]: v };
    });
    console.log(allls);
    setAllLS(allls);
  };
  const removeStorageData = (key2) => {
    localStorage.removeItem(key2);
    setValue(null);
  };
  return { value, allLS, getStorageData, getAllKeyVals, setStorageData, removeStorageData };
};
const LocalStorageHook = () => {
  const [keyname, setKeyname] = reactExports.useState();
  const [keyval, setKeyval] = reactExports.useState();
  const [newMsg, addNewMsg] = reactExports.useState("");
  const { messages, addMessage, delMessage } = reactExports.useContext(MessageContext);
  const {
    value,
    allLS,
    setStorageData,
    getStorageData,
    getAllKeyVals,
    removeStorageData
  } = useLocalStorage();
  const clearInputs = () => {
    setKeyname("");
    setKeyval("");
  };
  const handleSet = () => {
    setStorageData(keyname, keyval);
    clearInputs();
  };
  const handleGet = () => {
    getStorageData(keyname);
    clearInputs();
  };
  const handleGetAll = () => {
    getAllKeyVals();
    clearInputs();
  };
  const handleDelete = () => {
    removeStorageData(keyname);
    clearInputs();
  };
  const handleNewMsg = () => {
    addMessage(newMsg);
    addNewMsg("");
  };
  const handleDelMsg = (ind) => {
    delMessage(ind);
  };
  const btn_class = "px-3 py-1.5 text-sm text-white rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110 hover:cursor-pointer active:scale-95";
  const input_class = "p-3 text-sm border-2 rounded-md border-gray-400 bg-white";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg mb-4 text-sky-700 font-bold", children: "Create hook to save and retrieve data from local storage " }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 flex flex-row gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[40%] shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm text-gray-700 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Create a custom hook ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "useLocalStorage" }),
          " to manage local storage operations"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Provide input fields for ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Key Name" }),
          " and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "LS value to store" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Set to LS:" }),
          " Save key-value pair to local storage and refresh list"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Get to LS:" }),
          " Retrieve value for given key name and show in preview"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Get all LS data:" }),
          " Fetch all key-value pairs stored in local storage"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Delete to LS:" }),
          " Remove selected key from local storage and update preview"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Clearing/Submitting inputs should reset input fields automatically" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Display single key preview and all local storage pairs in structured card layout" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 bg-red-50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between items-center gap-4 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 flex-row w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col gap-4 w-1/2 text-center justify-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Key Name:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                value: keyname,
                onChange: (e) => setKeyname(e.target.value),
                className: `${input_class}`,
                type: "text"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col w-1/2 gap-4 text-center justify-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "LS value to store:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                value: keyval,
                onChange: (e) => setKeyval(e.target.value),
                className: `${input_class} h-24`
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleSet,
              className: `${btn_class} bg-orange-600`,
              children: "Set to LS"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleGet,
              className: `${btn_class} bg-teal-600`,
              children: "Get to LS"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleGetAll,
              className: `${btn_class} bg-teal-600`,
              children: "Get all LS data"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleDelete,
              className: `${btn_class} bg-violet-600`,
              children: "Delete to LS"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center flex gap-2 flex-col mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left flex gap-2 flex-col w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-gray-800", children: "Key's Value:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-3 rounded-md border border-gray-200 shadow-sm flex flex-col gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-teal-700", children: [
              "Key: ",
              keyname || "No key selected"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "bg-gray-50 p-2 rounded text-xs text-gray-800 whitespace-pre-wrap break-all font-mono border border-gray-100", children: value !== null && value !== void 0 ? typeof value === "object" ? JSON.stringify(value, null, 2) : String(value) : "null" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left flex gap-3 flex-col w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-gray-800", children: "All LS key/values:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 max-h-80 overflow-y-auto pr-1", children: allLS && allLS.length > 0 ? allLS.map((item, index) => {
            const key = Object.keys(item)[0];
            const value2 = item[key];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-3 rounded border border-gray-200 shadow-sm flex flex-col gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-teal-700", children: [
                "Key: ",
                key
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "bg-gray-50 p-2 rounded text-xs text-gray-800 whitespace-pre-wrap break-all font-mono border border-gray-100", children: typeof value2 === "object" ? JSON.stringify(value2, null, 2) : String(value2) })
            ] }, index);
          }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 italic", children: "No data in Local Storage" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 my-10 p-10 border border-green-600 rounded-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "This green section is the cobination of MessageContext.jsx & MessageProvider.jsx components for test purposes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 my-10 p-12 border border-amber-400 rounded-xl text-xl flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "", children: "this is a context api example: " }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-row gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: newMsg,
              onChange: (e) => addNewMsg(e.target.value),
              type: "text",
              className: "flex-1 border border-gray-400 text bg-sky-50 text-lg px-4 py-2 rounded-md"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleNewMsg,
              className: "w-52 bg-amber-500 text-white text-lg rounded-full px-6 py-2",
              children: "Add New Message"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2 my-6", children: messages.length > 0 && messages.map((msg) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white justify-between border-b items-center border-gray-300 flex flex-row py-2 px-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "flex-1 bg-white px-4 flex", children: msg.id }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "flex-1 bg-white px-4 flex", children: msg.text }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleDelMsg(msg.id),
                className: "bg-red-500 text-white px-6 py-1.5 flex p-4 cursor-pointer hover:scale-110",
                children: "Delete"
              }
            )
          ]
        },
        msg.id
      )) })
    ] })
  ] });
};
export {
  LocalStorageHook as default
};
