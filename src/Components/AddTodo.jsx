import {useContext, useRef } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { TodoItemsContex } from "../store/todo-items-store";

function AppTodo (){

  const {addNewItem} = useContext(TodoItemsContex)
  const todoNameElement =useRef()
  const dueDateElement =useRef()





const handelAddButtonClicked = (event) =>{
  event.preventDefault()
  const todoName = todoNameElement.current.value
  const dueDate = dueDateElement.current.value
  todoNameElement.current.value=""
  dueDateElement.current.value=""
  addNewItem(todoName,dueDate)
 
}


return <div className="container ">
<form className="row kg-row" onSubmit ={handelAddButtonClicked}>
<div className="col-6">
  <input type="text" ref={todoNameElement} placeholder="Enter Todo Here" />
</div>
<div className="col-4">
  <input type="date" ref={dueDateElement}  />
</div>
<div className="col-2">
  
<button  className="btn btn-success kg-button" 

><IoAddCircleSharp /></button>
</div>
</form>
</div>

}
export default AppTodo;