import React, {useState} from 'react'
import TodoItem from './TodoItem'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  todo :yup.string().required("پر کردن لیست اجباری است")
});

function InputTodo() {
    const [todoValue , setTodoValue] = useState("")
    const [todoItm , setTodoItm] = useState([])

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
      resolver: yupResolver(schema),
    });

    const changeTodo = (e) => {
        setTodoValue(e.target.value)
      }

      const submitTodo = () => {
        const updateTodo = [...todoItm]
        updateTodo.push(todoValue)
        setTodoItm(updateTodo)
        setTodoValue("")
        reset()   
        console.log("hiiiiii")
      }

      const deleteHandler = (numberTodo) => {
        const updateTodo = [...todoItm]
        updateTodo.splice(numberTodo , 1)
        setTodoItm(updateTodo)

        console.log(updateTodo)
        console.log(numberTodo)
      }
      const todoInputField = register("todo", { required: true });
  return (
    <div>
      <div>
        <label>insert your todos of today</label>
        <input type='text' name='settodo' value={todoValue} {...todoInputField} 
        onChange={(e) => {
          todoInputField.onChange(e);
          changeTodo(e)
        }}/>
        <button onClick={handleSubmit(submitTodo)} >add todo</button>
      </div> 
      <p>{errors.todo?.message}</p>
      {todoItm.map((todo, index)=>{
        return <TodoItem 
        deleteItm={deleteHandler} todo={todo} numberTodo={index} key={index}
        /> 
      })}
    </div>
  )
}

export default InputTodo