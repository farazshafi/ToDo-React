
const Todo = ({todos,deleteTodo,editTodo}) => {
  return (
    <>
        {todos.map((item,index)=>(
            <div key={index} className='Todo'>{item}
                <i onClick={()=>deleteTodo(index)} className="fa-solid fa-trash"></i>
            </div>
            
        ))}
    </>
  )
}

export default Todo