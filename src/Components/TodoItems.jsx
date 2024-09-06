

import { useContext } from "react"
import { TodoItemsContex } from "../store/todo-items-store"
import TodoItem from "./TodoItem"
import styles from './TodoItems.module.css'


const TodoItems =({onDeleteClick})=>{
  const {todoItems}= useContext(TodoItemsContex)
  

 return  <div className={styles.itemContainer}>
 {todoItems.map((item)=>(
   <TodoItem key={item.name}  todoDate ={item.dueDate}  todoName ={item.name} ></TodoItem>
 ))}
 

  </div>
}

export default TodoItems