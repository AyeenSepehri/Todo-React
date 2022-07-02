import React from 'react'

function TodoItem(props) {

  const markHandler = () =>{
    props.completeStatus(props.complete)
  }

  const deleteHandler = () => {
    props.deleteItm(props.numberTodo)
  }

  return (
    <div className='bg-white flex flex-row my-7 p-3'>
      <div className='my-auto'>
        <p className={props.complete ? "line-through" : ""} >{props.todo}</p>
      </div>
      <div className='mr-auto'>
        <button className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded" onClick={markHandler}>mark</button>
        <button className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 rounded" onClick={deleteHandler}>delete</button>
      </div>
    </div>
  )
}

export default TodoItem