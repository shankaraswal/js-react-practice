import { useEffect, useContext } from "react";
import MessageContext from './js-decodes/react-comps/context-provider/MessageContext'

function AddEventListener() {
  const { messages, delMessage } = useContext(MessageContext);

  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized");
    };

    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleDelMsg = (ind) => {
    delMessage(ind)
  }

  return <div>
    <h3>My Component</h3>
    <div className="flex flex-col gap-2 my-6">
      {messages.map((msg) => (
        <div className="bg-white justify-between border-b items-center border-gray-300 flex flex-row py-2 px-4">
          <p className="flex-1 bg-white px-4 flex">{msg.id}</p>
          <p className="flex-1 bg-white px-4 flex">{msg.text}</p>
          <button
            onClick={() => handleDelMsg(msg.id)}
            className="bg-red-500 text-white px-6 py-1.5 flex p-4 cursor-pointer hover:scale-110">Delete</button>
        </div>
      ))}
    </div>
  </div>
}

export default AddEventListener;