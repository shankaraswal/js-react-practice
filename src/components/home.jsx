import { useContext, useState } from 'react'
import { DataContext } from '../context';
import MessageContext from './js-decodes/react-comps/context-provider/MessageContext'

const Home = () => {
  const userdata = useContext(DataContext)
  const [newMsg, addNewMsg] = useState("");
  const { messages, addMessage, delMessage } = useContext(MessageContext);

  // console.clear()
  // HOISTING AND TDZ
  var a;

  console.log("Hello World");

  console.log(a);

  a = 10;

  console.log(a);


  const handleNewMsg = () => {
    addMessage(newMsg)
    addNewMsg("")
  }

  const handleDelMsg = (ind) => {
    delMessage(ind)
  }

  console.log(messages)

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page {userdata.name}</p>
      {/* MESSAGECONEXT AND PROVIDER COMPS */}
      <div className="bg-green-50 my-10 p-10 border border-green-600 rounded-2xl">
        <h2>This green section is the cobination of MessageContext.jsx & MessageProvider.jsx components for test purposes</h2>
        <div className="bg-red-50 my-10 p-12 border border-amber-400 rounded-xl text-xl flex flex-col gap-2">
          <h3 className="">this is a context api example: </h3>
          <div className="flex flex-row gap-4">
            <input
              value={newMsg}
              onChange={(e) => addNewMsg(e.target.value)}
              type="text" className="flex-1 border border-gray-400 text bg-sky-50 text-lg px-4 py-2 rounded-md" />
            <button
              onClick={handleNewMsg}
              className="w-52 bg-amber-500 text-white text-lg rounded-full px-6 py-2">Add New Message</button>
          </div>
        </div>

        <div className="flex flex-col gap-2 my-6">
          {messages.length > 0 && messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white justify-between border-b items-center border-gray-300 flex flex-row py-2 px-4">
              <p className="flex-1 bg-white px-4 flex">{msg.id}</p>
              <p className="flex-1 bg-white px-4 flex">{msg.text}</p>
              <button
                onClick={() => handleDelMsg(msg.id)}
                className="bg-red-500 text-white px-6 py-1.5 flex p-4 cursor-pointer hover:scale-110">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
