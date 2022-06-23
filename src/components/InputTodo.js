import React, {useState} from 'react'
import TodoItem from './TodoItem'
function InputTodo() {
    const [todoValue , setTodoValue] = useState("")
    const [todoItm , setTodoItm] = useState([])

    const changeTodo = (e) => {
        setTodoValue(e.target.value)
      }

      const submitTodo = () => {
        const updateTodo = [...todoItm]
        updateTodo.push(todoValue)
        setTodoItm(updateTodo)
        setTodoValue("")       
      }

      const deleteHandler = (numberTodo) => {
        const updateTodo = [...todoItm]
        updateTodo.splice(numberTodo , 1)
        setTodoItm(updateTodo)

        console.log(updateTodo)
        console.log(numberTodo)
      }
      
  return (
    <div>
      <div>
        <label>insert your todos of today</label>
        <input type='text' name='settodo' value={todoValue} onChange={changeTodo}/>
        <button onClick={submitTodo} >add todo</button>
      </div> 

      {todoItm.map((todo, index)=>{
        return <TodoItem 
        deleteItm={deleteHandler} todo={todo} numberTodo={index} key={index}
        /> 
      })}
    </div>
  )
}

export default InputTodo