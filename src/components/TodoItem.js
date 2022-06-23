import React,{useState} from 'react'
import classes from "./TodoItem.module.css"

function TodoItem(props) {

  const [complete , setComplete] = useState(false)

  const markHandler = () =>{
    if(complete === false){
      setComplete(true)
    }
    if(complete === true){
      setComplete(false)
    }
  }

  const deleteHandler = () => {
    props.deleteItm(props.numberTodo)
  }

  return (
    <div>
      <p className={complete ? classes.completeItm : ""} >{props.todo}</p>
      <button onClick={markHandler}>mark</button>
      <button onClick={deleteHandler}>delete</button>
    </div>
  )
}

export default TodoItem