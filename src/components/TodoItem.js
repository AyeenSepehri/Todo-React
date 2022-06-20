import React from 'react'

function TodoItem(props) {
  console.log("ayeen")
  return (
    <div>
      <p>{props.todo}</p>
      <button>mark</button>
      <button>delete</button>
    </div>
  )
}

export default TodoItem