import React,{useState} from 'react'
// import classes from "./TodoItem.module.css"

function TodoItem(props) {

  const [complete , setComplete] = useState(false)

  const markHandler = () =>{
    if(complete === false){
      setComplete(true)
      props.trueState(props.complete)
    }
    if(complete === true){
      setComplete(false)
    }
  }

  const deleteHandler = () => {
    props.deleteItm(props.numberTodo)
  }

  return (
    <div className='bg-white flex flex-row my-7 p-3'>
      <div className='my-auto'>
        <p className={complete ? "complete line-through" : "uncoplete"} >{props.todo}</p>
      </div>
      <div className='mr-auto'>
        <button className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded" onClick={markHandler}>mark</button>
        <button className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded" onClick={deleteHandler}>delete</button>
      </div>
    </div>
  )
}

export default TodoItem