import { r as reactExports, j as jsxRuntimeExports } from "./index-CiIyD-gq.js";
const INITIAL_VAL = 15;
const CountdownTimer = () => {
  const [initialValue, setInitialValue] = reactExports.useState(INITIAL_VAL);
  const [time, setTime] = reactExports.useState(INITIAL_VAL);
  const [isRunning, setIsRunning] = reactExports.useState(false);
  const formatted = reactExports.useMemo(() => {
    const m = String(Math.trunc(Math.max(time, 0) / 60)).padStart(2, "0");
    const s = String(Math.max(time, 0) % 60).padStart(2, "0");
    return `${m}:${s}`;
  }, [time]);
  const progressPercent = reactExports.useMemo(() => {
    if (!initialValue) return 0;
    const p = time / initialValue * 100;
    const clamped = Math.max(0, Math.min(p, 100));
    return Math.floor(clamped);
  }, [time, initialValue]);
  reactExports.useEffect(() => {
    if (!isRunning) return;
    const xx = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1e3);
    return () => clearInterval(xx);
  }, [isRunning]);
  const handelInitalVal = (e) => {
    const v = Number(e.target.value);
    if (Number.isNaN(v) || v < 0) return;
    setInitialValue((prev) => prev + v);
    setTime((prev) => prev + v);
  };
  const handlePreset = (preset) => {
    setInitialValue(preset);
    setTime(preset);
  };
  const handleStart = reactExports.useCallback(() => {
    setTime((prev) => prev > 0 ? prev : initialValue);
    setIsRunning(true);
  }, [initialValue]);
  const handlePause = reactExports.useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);
  const handleReset = reactExports.useCallback(() => {
    setTime(initialValue);
    setIsRunning(false);
  }, [initialValue]);
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progressPercent / 100 * circumference;
  console.log(progressPercent);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg mb-4 text-sky-700 font-bold", children: "Accordion optional single/multi toggle" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-4 flex flex-col gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-inside text-sm text-gray-700 space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold", children: "✅ Done:" }),
          " Create a countdown timer starting from a given seconds value"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold", children: "✅ Done:" }),
          " Start / Pause / Reset buttons"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 font-bold", children: "❌ Fix:" }),
          " Display time in MM:SS format — use ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "Math.floor" }),
          " instead of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "Math.ceil" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 font-bold", children: "❌ Fix:" }),
          ` Show "Time's up!" when timer hits 0 — `,
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "hidden" }),
          " class is hardcoded"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 font-bold", children: "❌ Fix:" }),
          " Custom time input — change ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "onchange" }),
          " to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "onChange" }),
          ", add ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "value" }),
          " prop"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 font-bold", children: "❌ Fix:" }),
          " Preset buttons — should be 30s, 1min, 5min, 10min"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold", children: "✅ Done:" }),
          " Progress ring or bar showing remaining time percentage"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-600 font-bold", children: "❌ Fix:" }),
          " Change color to red when < 10 seconds remaining"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold", children: "✅ Done:" }),
          " Prevent multiple intervals from stacking (cleanup properly)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600 font-bold", children: "✅ Done:" }),
          " Pause should preserve remaining time — resume continues from there"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-auto py-10 flex items-center justify-center bg-gray-100 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-center text-gray-800", children: [
          "Countdown Timer: ",
          formatted
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6 p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-[200px] h-[200px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "200", height: "200", className: "rotate-[-90deg]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "circle",
                {
                  cx: "100",
                  cy: "100",
                  r: radius,
                  stroke: "#e5e7eb",
                  strokeWidth: "12",
                  fill: "transparent"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "circle",
                {
                  cx: "100",
                  cy: "100",
                  r: radius,
                  stroke: "#2563eb",
                  strokeWidth: "12",
                  fill: "transparent",
                  strokeDasharray: circumference,
                  strokeDashoffset: offset,
                  strokeLinecap: "round",
                  className: "transition-all duration-1000 ease-linear"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center text-4xl font-bold", children: formatted })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-red-500 font-semibold hidden", children: "Time's up!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-gray-600", children: "Set time (sec):" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                onchange: handelInitalVal,
                value: time,
                type: "number",
                placeholder: "Enter seconds",
                className: "flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: [10, 30, 60, 300, 600].map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => handlePreset(preset),
              className: "px-3 py-1 text-sm rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300",
              children: [
                preset,
                " Seconds"
              ]
            },
            preset
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleStart,
                className: "px-5 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium",
                children: "Start"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handlePause,
                className: "px-5 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-medium",
                children: "Pause"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleReset,
                className: "px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium",
                children: "Reset"
              }
            )
          ] }),
          progressPercent,
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-4 bg-gray-200 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full bg-red-400 transition-all duration-1000 ease-linear",
              style: { width: `${progressPercent}%` }
            }
          ) })
        ] })
      ] }) }) })
    ] })
  ] });
};
export {
  CountdownTimer as default
};
