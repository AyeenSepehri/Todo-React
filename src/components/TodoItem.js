import React,{useState} from 'react'
import classes from "./TodoItem.module.css"
function TodoItem(props) {
  const [complete , setComplete] = useState(false)
  const markHandler = () =>{
    setComplete(true)
    console.log("hello")
  }
  return (
    <div>
      <p className={complete ? classes.completeItm : ""} >{props.todo}</p>
      <button onClick={markHandler}>mark</button>
      <button>delete</button>
    </div>
  )
}

export default TodoItem