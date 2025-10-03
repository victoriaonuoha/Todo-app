import { useState } from "react";

import Form from "./Form";
import TodoList from "./Todolist";
import Footer from "./Footer";

export default function Todo() {
  
    const [todos, SetTodos] = useState([]);
 const completedTodos = todos.filter((member) => member.done).length
 const totalTodo = todos.length

  return (
    <div>
     <Form todos= {todos} SetTodos= {SetTodos}/>
     <TodoList todos = {todos} setTodos={SetTodos}/>
     <Footer completedTodos = {completedTodos} totalTodo ={totalTodo}/>
     
    </div>
  );
}
