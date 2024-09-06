
import { createContext, useReducer } from "react";
export const TodoItemsContex = createContext([]);



const todoItemReducer=(crrTodoItems,action)=>{
  
  let newTodoItems = crrTodoItems

  if(action.type === "NEW_ITEM"){
     newTodoItems =[...crrTodoItems,{ name:action.payload.itemName,
      dueDate:action.payload.itemDueDate}]
    
  
  }else if (action.type === "DELETE_ITEM"){
    newTodoItems = crrTodoItems.filter(item => item.name !== action.payload.itemName)
   
  }
return newTodoItems;
}

const TodoItemsContexProvider =({children}) =>{



//const [todoItems,setTodoItems] = useState([])
const [todoItems,dispatchTodoItems] = useReducer(todoItemReducer,[])

const addNewItem = (itemName,itemDueDate)=>{

  const newItemAction = {
    type:"NEW_ITEM",
    payload:{
      itemName,
      itemDueDate
    }
  };
  dispatchTodoItems(newItemAction)
/*setTodoItems((crrValue)=>[...crrValue,{ name:itemName,
    dueDate:itemDueDate}]
  
)*/

}

const deleteItem =(todoItemName)=>{
  /*const newTodoItems = todoItems.filter(item => item.name !== todoItemName)
  setTodoItems(newTodoItems)*/

  const deleteItemAction = {
    type:"DELETE_ITEM",
    payload:{
      itemName:todoItemName,
      
    }
  };
  dispatchTodoItems(deleteItemAction)
} 
return <TodoItemsContex.Provider  value={{
  todoItems,
  addNewItem,
  deleteItem
}}>
  {children}
  </TodoItemsContex.Provider>
}

export default TodoItemsContexProvider