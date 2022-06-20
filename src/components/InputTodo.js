import React, {useState, useRef} from 'react'
function InputTodo() {
    const enteredTodo = useRef()
    const [todoValue , setTodoValue] = useState("")
    const submitTodo = (e) => {
        e.preventDefault()
        const todoItem = enteredTodo.current.value;
        console.log(todoItem)
        setTodoValue(enteredTodo.current.value= "")
    }
  return (
    <div>
      <div>
        <label>insert your todos of today</label>
        <input type='text' name='settodo' ref={enteredTodo}/>
        <button onClick={submitTodo} >add todo</button>
      </div> 
    </div>
  )
}

export default InputTodo