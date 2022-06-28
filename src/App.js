import React from "react";
import InputTodo from "./components/InputTodo";
function App() {
  return (
    <div className="bg-yellow-500 flex flex-col items-center my-20">
      <h1 className="text-3xl font-bold underline">Todo List</h1>
      <InputTodo/>
    </div>
  );
}

export default App;
