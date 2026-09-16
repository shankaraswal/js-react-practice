import React, { useEffect, useMemo, useCallback, useState } from 'react'
const INITIAL_VAL = 15
const CountdownTimer = () => {
    const [initialValue, setInitialValue] = useState(INITIAL_VAL);
    const [time, setTime] = useState(INITIAL_VAL)
    const [isRunning, setIsRunning] = useState(false)


    const formatted = useMemo(() => {
        const m = String(Math.trunc(Math.max(time, 0) / 60)).padStart(2, "0");
        const s = String(Math.max(time, 0) % 60).padStart(2, "0");
        return `${m}:${s}`;
    }, [time]);

    const progressPercent = useMemo(() => {
        if (!initialValue) return 0;
        const p = (time / initialValue) * 100;
        const clamped = Math.max(0, Math.min(p, 100));
        return Math.floor(clamped);
    }, [time, initialValue]);

    useEffect(() => {
        if (!isRunning) return;
        const xx = setInterval(() => {
            setTime((prev) => {
                if (prev <= 1) {
                    setIsRunning(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
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

    const handleStart = useCallback(() => {
        setTime((prev) => (prev > 0 ? prev : initialValue));
        setIsRunning(true);
    }, [initialValue]);

    const handlePause = useCallback(() => {
        setIsRunning((prev) => !prev);
    }, []);

    const handleReset = useCallback(() => {
        setTime(initialValue);
        setIsRunning(false);
    }, [initialValue]);


    // SVG ring math
    const radius = 90;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progressPercent / 100) * circumference;


    console.log(progressPercent)

    return (
        <>
            <h2 className="text-lg mb-4 text-sky-700 font-bold">Accordion optional single/multi toggle</h2>
            <div className="pb-4 flex flex-col gap-10">
                <div className='w-full'>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li><span className="text-green-600 font-bold">✅ Done:</span> Create a countdown timer starting from a given seconds value</li>
                        <li><span className="text-green-600 font-bold">✅ Done:</span> Start / Pause / Reset buttons</li>
                        <li><span className="text-red-600 font-bold">❌ Fix:</span> Display time in MM:SS format — use <code>Math.floor</code> instead of <code>Math.ceil</code></li>
                        <li><span className="text-red-600 font-bold">❌ Fix:</span> Show "Time's up!" when timer hits 0 — <code>hidden</code> class is hardcoded</li>
                        <li><span className="text-red-600 font-bold">❌ Fix:</span> Custom time input — change <code>onchange</code> to <code>onChange</code>, add <code>value</code> prop</li>
                        <li><span className="text-red-600 font-bold">❌ Fix:</span> Preset buttons — should be 30s, 1min, 5min, 10min</li>
                        <li><span className="text-green-600 font-bold">✅ Done:</span> Progress ring or bar showing remaining time percentage</li>
                        <li><span className="text-red-600 font-bold">❌ Fix:</span> Change color to red when &lt; 10 seconds remaining</li>
                        <li><span className="text-green-600 font-bold">✅ Done:</span> Prevent multiple intervals from stacking (cleanup properly)</li>
                        <li><span className="text-green-600 font-bold">✅ Done:</span> Pause should preserve remaining time — resume continues from there</li>
                    </ul>
                </div>

                <div className="flex flex-col w-full">
                    <div className="min-h-auto py-10 flex items-center justify-center bg-gray-100 p-4">
                        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-6">
                            <h1 className="text-2xl font-bold text-center text-gray-800">
                                Countdown Timer: {formatted}
                            </h1>
                            <div className="flex flex-col items-center gap-6 p-8">
                                <div className="relative w-[200px] h-[200px]">
                                    <svg width="200" height="200" className="rotate-[-90deg]">
                                        <circle
                                            cx="100"
                                            cy="100"
                                            r={radius}
                                            stroke="#e5e7eb"
                                            strokeWidth="12"
                                            fill="transparent"
                                        />
                                        <circle
                                            cx="100"
                                            cy="100"
                                            r={radius}
                                            stroke="#2563eb"
                                            strokeWidth="12"
                                            fill="transparent"
                                            strokeDasharray={circumference}
                                            strokeDashoffset={offset}
                                            strokeLinecap="round"
                                            className="transition-all duration-1000 ease-linear"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
                                        {formatted}
                                    </div>
                                </div>

                                <p className="text-center text-red-500 font-semibold hidden">
                                    Time's up!
                                </p>

                                <div className="flex items-center gap-2">
                                    <label className="text-sm text-gray-600">Set time (sec):</label>
                                    <input
                                        onchange={handelInitalVal}
                                        value={time}
                                        type="number"
                                        placeholder="Enter seconds"
                                        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>

                                <div className="flex flex-wrap gap-2 justify-center">
                                    {[10, 30, 60, 300, 600].map((preset) => (
                                        <button
                                            onClick={() => handlePreset(preset)}
                                            key={preset}
                                            className="px-3 py-1 text-sm rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300"
                                        >
                                            {preset} Seconds
                                        </button>
                                    ))}
                                </div>
                                <div className="flex justify-center gap-3">
                                    <button
                                        onClick={handleStart}
                                        className="px-5 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium">
                                        Start
                                    </button>
                                    <button
                                        onClick={handlePause}
                                        className="px-5 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-medium">
                                        Pause
                                    </button>
                                    <button
                                        onClick={handleReset}
                                        className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium">
                                        Reset
                                    </button>
                                </div>

                                {progressPercent}
                                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-red-400 transition-all duration-1000 ease-linear"
                                        style={{ width: `${progressPercent}%` }}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountdownTimer