import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

const TodoWrapper = () => {
    const [todos,setTodos] = useState(()=>{
        const savedTodos = localStorage.getItem("todos")
        return savedTodos ? JSON.parse(savedTodos): []
    })

    const addTodo = (newTodo) => {
        setTodos([...todos,newTodo])
    }

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((item,i)=>i !== index)
        setTodos(updatedTodos)
    }

    const editTodo = (index) => {
        const updatedTodos = todos.filter((item,i)=>i !== index)
        setTodos(updatedTodos)
    }

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

  return (
    <div className='TodoWrapper'>
        <TodoForm todo={addTodo}/>
        <Todo editTodo={editTodo} deleteTodo={deleteTodo} todos={todos}/>
    </div>
  )
}

export default TodoWrapper