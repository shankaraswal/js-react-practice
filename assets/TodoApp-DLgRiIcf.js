import { r as reactExports, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
const initialState = [
  {
    id: 1789234870688,
    task: "To address issues that do not require attention, run",
    completed: true
  },
  {
    id: 1789234936492,
    task: "Header should display Total: X and Completed: Y",
    completed: false
  },
  {
    id: 1789234895982,
    task: "Each todo should have a Delete button to remove that todo",
    completed: false
  }
];
const TodoApp = () => {
  const [todo, setTodo] = reactExports.useState("");
  const [todoList, setTodoList] = reactExports.useState(initialState);
  const handleTodoList = () => {
    const obj = {
      id: Date.now(),
      task: todo,
      completed: false
    };
    setTodoList([...todoList, obj]);
    setTodo("");
  };
  const handleTodoStatus = (td) => {
    const updatedTodoList = todoList.map((item) => {
      if (item.id === td.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    });
    setTodoList(updatedTodoList);
  };
  const deleteTodo = (td) => {
    const updatedTodoList = todoList.filter((item) => {
      return item.id !== td.id && item;
    });
    setTodoList(updatedTodoList);
  };
  const clearAllCompleted = () => {
    const updatedTodoList = todoList.map((item) => {
      if (item.completed) {
        return {
          ...item,
          completed: false
        };
      }
      return item;
    });
    setTodoList(updatedTodoList);
  };
  const completedtasks = todoList.filter((item) => {
    return item.completed;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg mb-4 text-sky-700 font-bold", children: " Todo List with Add/Delete/Toggle" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 flex flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[40%]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm text-gray-700 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "An input field where the user can type a todo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'An "Add" button to add a new todo to the list' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Pressing the Enter key should also add the todo (bonus)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Empty input should not be added" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Each todo should have a "Delete" button to remove that todo' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Clicking on a todo should toggle a strikethrough (mark as completed)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'Header should display "Total: X" and "Completed: Y"' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: 'A "Clear Completed" button to remove all completed todos' })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-4 flex flex-col gap-4 w-[60%]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gap-4 flex flex-row justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                onChange: (e) => setTodo(e.target.value),
                type: "text",
                value: todo,
                placeholder: "Enter item",
                className: "border border-gray-300 rounded-md px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 disabled:opacity-30",
                onClick: handleTodoList,
                disabled: todo === "",
                children: "Add"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: clearAllCompleted,
                className: "bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600",
                children: "Clear Completed"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gap-4 flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium text-green-500 text-md flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Total: ",
              todoList.length
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Total: ",
              completedtasks.length
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col max-w-full mt-4 h-64 overflow-y-auto", children: todoList?.map((td, ind) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center py-2 gap-2 border-t border-red-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "w-6", children: [
            ind + 1,
            " "
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "", children: td.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: `flex-1 ${td.completed ? "line-through" : ""}`,
              children: td.task
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-row gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                checked: td.completed,
                onChange: () => handleTodoStatus(td),
                type: "checkbox"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => deleteTodo(td),
                className: "bg-red-500 text-white px-4 py-0.5 rounded-md hover:bg-red-600",
                children: "Delete"
              }
            )
          ] })
        ] }, ind)) })
      ] }) })
    ] })
  ] });
};
export {
  TodoApp as default
};
