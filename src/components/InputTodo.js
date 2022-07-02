import React, {useState, useEffect} from 'react'
import TodoItem from './TodoItem'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//validation of input
const schema = yup.object().shape({
  todo :yup.string().required("پر کردن لیست اجباری است")
});

function InputTodo() {
  //states
    const [todoValue , setTodoValue] = useState("")
    const [todoItm , setTodoItm] = useState([])
    const [groups, setGroups] = useState()
    const [groupingTodos, setGroupingTodos] = useState([])

    //useForm for validate input
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
      resolver: yupResolver(schema),
    });

    //onchange input todo
    const changeTodo = (e) => {
        setTodoValue(e.target.value)
      }

      //submit input todo for add todo Item
      const submitTodo = () => {
        const todos = {
          index: Math.floor(Math.random() * 10000),
          caption: todoValue, 
          complete : false,
        }
        const updateTodo = [...todoItm]
        updateTodo.push(todos)
        setTodoItm(updateTodo)
        setTodoValue("")
        reset()   
        console.log(todoItm)
      
      }

      //define the delete handler
      //its a prop function from TodoItem component
      const deleteHandler = (numberTodo) => {
        const updateTodo = [...todoItm]
        updateTodo.splice({numberTodo} , 1)
        setTodoItm(updateTodo)

        console.log(updateTodo)
        console.log(numberTodo)
      }
           
     //define completeHandler function for modify complete property of todos object to a dynamic value
      const completeHandler = (complete) => {
        console.log(complete)
      }
       
      //define grouping item and use it in drop down menu
      const completeGroup = () =>{
        switch(groups){
          case "complete" :
            setGroupingTodos(todoItm.filter(todos => todos.complete === true))
            console.log(groupingTodos)
            break;
          case "uncomplete" :
            setGroupingTodos(todoItm.filter(todos => todos.complete === false))
            console.log(groupingTodos)
            break;
          default : 
            setGroupingTodos(todoItm)
            console.log("its all too")
            break;
            }
          }
          
          //useEffect for rerender completeGroup when todoItm and groups change
          useEffect(() => {
            completeGroup()
            console.log(todoItm)
          },[todoItm, groups])
          
          //define register of validation in a variable for define it inside onchange
          const todoInputField = register("todo", { required: true });

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
        {todoItm.map(({caption, index, complete})=>{
          return <TodoItem 
          deleteItm={deleteHandler} completeStatus={completeHandler} complete={complete}  todo={caption} numberTodo={index} key={index} 
          /> 
        })}
      </div>
    </div>
  )
}

export default InputTodo