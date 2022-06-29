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
    const [groups, setGroups] = useState()
    const [groupingTodos, setGroupingTodos] = useState([])

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
        // console.log(todoItm)
      }

      const deleteHandler = (numberTodo) => {
        const updateTodo = [...todoItm]
        updateTodo.splice(numberTodo , 1)
        setTodoItm(updateTodo)

        console.log(updateTodo)
        console.log(numberTodo)
      }
      const todoInputField = register("todo", { required: true });

      // const changeGroup = (e) => {
      //   const groups = e.target.value
      //   console.log(groups)
      //   if(groups === "complete"){
      //     console.log(todoItm.index)
      //     const completeGroup = () => {}
      //   }else if(groups === "uncomplete"){
      //     console.log("their uncomplete")
      //   }else{
      //     console.log("their all")
      //   }
      // }


      const completeGroup = (complete) =>{



        // console.log(complete)

        // const updateTodo = groupingTodos
        // const targetItem = todoItm
        // updateTodo.push(targetItem)
        // setGroupingTodos(updateTodo)

        // if(groups === "complete"){
        //   console.log(groupingTodos)
          
        }
      }


  return (
    <div className='flex flex-col mt-10'>
      <div className='flex flex-col justify-center bg-sky-500 h-28 rounded-b-2xl py-10 px-10 shadow-2xl'>
          <label>کار های امروزتان وارد کنید:</label>
        <div className='flex m-auto mt-4'>
          <input type='text' name='settodo' value={todoValue} {...todoInputField} 
          onChange={(e) => {
            todoInputField.onChange(e);
            changeTodo(e)
          }}
          className="border-4 border-indigo-600 focus:outline-none"/>

          <button className='bg-white px-2 py-1' onClick={handleSubmit(submitTodo)} >add todo</button>
        </div>
        <div>
          <select value={groups} onChange={(e) => setGroups(e.target.value)}>
            <option value="all">همه</option>
            <option value="complete">انجام شده ها</option>
            <option value="uncomplete">انجام نشده ها</option>
          </select>
        </div>
      </div>
      <div> 
    {errors.todo &&
      <div role="alert">
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">اخطار</div>
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <p>{errors.todo?.message}</p>
        </div>
      </div>
    }
        {todoItm.map((todo, index)=>{
          return <TodoItem 
          deleteItm={deleteHandler} trueState={completeGroup} complete={true} todo={todo} numberTodo={index} key={index} 
          /> 
        })}
      </div>
    </div>
  )
}

export default InputTodo