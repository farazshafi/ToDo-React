import React, { useState } from 'react'

const TodoForm = ({todo}) => {
    const [input,setInput] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        todo(input)
        setInput(" ")
    }
  return (
    <>
        <h1>TASKS</h1>
        <form className='TodoForm'>
            <input value={input} onChange={(e)=>setInput(e.target.value)} className='todo-input' type="text" placeholder="what is the task" />
            <button onClick={handleSubmit} className='todo-btn'>Add Task</button>
        </form>
    </>
  )
}

export default TodoForm