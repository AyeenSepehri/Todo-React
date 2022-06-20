import React, {useState} from 'react'
import TodoItem from './TodoItem'
function InputTodo() {
    const [todoValue , setTodoValue] = useState("")
    const [todoItm , setTodoItm] = useState(false)
    const changeTodo = (e) => {
        e.preventDefault()
        setTodoValue(e.target.value)
        console.log(todoValue)
      }
      const submitTodo = (e) => {
        setTodoItm(true)
      }
  return (
    <div>
      <div>
        <label>insert your todos of today</label>
        <input type='text' name='settodo' value={todoValue} onChange={changeTodo}/>
        <button onClick={submitTodo} >add todo</button>
      </div> 
      {todoItm && <TodoItem todo={todoValue}/>}
    </div>
  )
}

export default InputTodo