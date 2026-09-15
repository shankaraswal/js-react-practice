import useWindowResize from './hooks/useWindowResize'



const LocalStorageHook = () => {
    const { size, manualSize, resizeTo } = useWindowResize()

    return (
        <>
            <p className="text-lg mb-4 text-sky-700 font-bold">Create hook to save and retrieve data from local storage </p>
            <div className="pb-4 flex flex-row gap-4">
                <div className="w-[40%] shrink-0">
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Create a custom hook <code>useWindowResize</code> to manage window resize events</li>
                        <li>Return current window <b>width</b> and <b>height</b> from the hook</li>
                        <li><b>Live preview:</b> Display current dimensions as <code>Width × Height</code></li>
                        <li><b>Breakpoint badge:</b> Show Mobile / Tablet / Desktop based on width</li>
                        <li><b>Preset buttons:</b> Mobile, Tablet, Desktop — call <code>window.resizeTo</code></li>
                        <li><b>Manual input:</b> Fields for width and height with an Apply button</li>
                        <li><b>Resize history:</b> Store last 5 unique size pairs (newest first)</li>
                        <li><b>Reset history:</b> Clear the list without resetting the counter</li>
                        <li><b>Resize counter:</b> Show total number of unique resize events in session</li>
                        <li>Debounce or throttle resize events to avoid performance issues</li>
                        <li>Ignore duplicate consecutive sizes in history and counter</li>
                        <li>Handle invalid manual inputs (empty, negative, non-numeric)</li>
                        <li>Cleanup the resize listener on component unmount</li>
                        <li>Hook must be reusable in any other component without modification</li>
                        <li>Display history and preview in a structured card layout</li>
                    </ul>
                </div>
                <div className="flex-1 bg-red-50 p-4">
                    <div className="flex flex-col justify-between items-center gap-4 w-full">
                        <div className="rounded-lg bg-gray-100 p-4">
                            <h3 className="font-bold text-sm text-gray-600">Live Size</h3>
                            <p className="text-2xl font-mono">
                                {size.width} × {size.height}
                            </p>
                        </div>

                        <div className="rounded-lg bg-gray-100 p-4">
                            <h3 className="font-bold text-sm text-gray-600">Manaul Re-size</h3>
                            <p className="text-2xl font-mono">
                                {!manualSize ? (<>n{JSON.stringify(manualSize)}</>) : (<>
                                    {manualSize.width} × {manualSize.height}
                                </>
                                )}
                            </p>
                            <button
                                className="bg-red-500 text-white text-xl rounded-full px-6 py-2 m-4"
                                onClick={() => resizeTo({ width: 1366, height: 768 })}>Resize Window</button>
                        </div>


                    </div>
                </div>
            </div >
        </>
    )
}
export default LocalStorageHook