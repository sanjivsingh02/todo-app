import AppName from "./Components/AppName"
import AppTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useReducer } from "react";
import TodoItemsContexProvider from "./store/todo-items-store";








function App() {
  
  return (
   <TodoItemsContexProvider>
  <center className='todo-container'>
    <AppName/>
    <AppTodo ></AppTodo>
  <WelcomeMessage ></WelcomeMessage> 
    <TodoItems ></TodoItems>
  </center>
  </TodoItemsContexProvider>
)}

export default App
