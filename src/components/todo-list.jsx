import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidv4 } from 'uuid';
  

const data = [
    {id:uuidv4(), text: 'Learn React hooks', completed: true },
    {id:uuidv4(), text: 'Build a todo app', completed: true },
    {id:uuidv4(),text: 'Add Tailwind styling', completed: false },
    {id:uuidv4(), text: 'Deploy to production', completed: false },
  ]

export default function TodoList() {
  const [list, setList]= useState(data)
  const [addTodo, setAddTodo] = useState('')

  const addTodoItem=(e)=>{
    setAddTodo(e.target.value)
  }

  const addItemToList=()=>{
    if(addTodo.trim() !== ''){
      setList([
        ...list,
        {
          id:uuidv4(),
          text:addTodo,
          completed:false
        }
      ]
     )
     setAddTodo('')
    }
    else{
      console.log('Please enter your todo item first')
    }
  }

  const toggleTodo = (id)=>{
    const updatedList = list.map((item)=>{
    if(item.id === id){
      return {...item, completed:!item.completed}
    }
    return item
    })
    setList(updatedList)
  }

  const removeItemToList=(id)=>{
   const updatedList = list.filter((item)=>{
     if(item.id === id){
      return 
      }
      return item
    })
    setList(updatedList)
  }



  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-sky-200 p-6 rounded-xl">
        
        <div className="flex flex-row my-4 gap-4 justify-between">
          <input type="text" 
          onChange={addTodoItem}
          value={addTodo}
          className="flex-1 border border-red-300 p-2 bg-red-100 text-green-600 rounded-md" />
          <button 
          onClick={addItemToList}
          className="bg-red-600 text-white text-semibold flex justify-center items-center text-[20px] rounded-md px-8">Add</button>
        </div>

        <div className="flex flex-col gap-4 justify-between">
        {list.map((item, ind)=>(
            <div
            key={item.id}
            className="border flex justify-between gap-4 cursor-pinter rounded-md border-green-200 p-4 relative"
            onChange={()=>toggleTodo(item.id)}
            >
            <span className='flex-none bg-sky-500 text-white px-4 py-2 cursor-pointer rounded-full'>{ind+1}</span>
            <span className={twMerge('flex-1 justtify-start flex items-center', item.completed ? 'line-through': '')}>{item.text}</span>
            <span className='flex-none bg-white text-white px-4 py-2 cursor-pointer'>
            <input
                type="checkbox"
                defaultChecked={item.completed}
              />
            </span>
            <button 
              onClick={()=>removeItemToList(item.id)}
              className="absolute bg-black w-6 h-6 rounded-full border border-white cursor-pointer text-[12px] font-bold -top-2 -right-2">X</button>
           </div>
        ))}
        </div>
       </div>
    </div>
  )
}