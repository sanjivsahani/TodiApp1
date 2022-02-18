import React, { useState } from 'react'
import ShowTodo from './ShowTodo'
import './Todo.css'


const Todo = () => {
  const [todo, settodo] = useState({task:"",done:"false"})
  const [todoarr ,settodoarr]=useState([])


  let todos  = localStorage.hasOwnProperty("todos")?JSON.parse(localStorage.getItem('todos')):[]
  const handleChange = (e) => {
    settodo([e.target.value],e.target.name)

  }
  const add = () => {
    todo.unshift(settodoarr)
    console.log(todoarr)
  }
  return (
    <>
      <div className="todo_oontainer">
        <h1 className='heading'> React Todo App</h1>
        <h3 className='heading'> Add a new Todo </h3>
        <div className='input_text'>
          <input type="text" className='input_area' name='title' onChange={handleChange} />
          <button type='button' className='btn' onClick={add}>+</button>
        </div>
      </div>
      <ShowTodo />
    </>
  )
}

export default Todo