import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./component/WelcomeMessage";

function App() {


const[todoItems, setTodoItems]= useState([]);

const handleNewItem = (itemName, itemDueDate)=>{
  setTodoItems((currValue) => 
   [
    ...todoItems,
    {name: itemName, dueDate: itemDueDate}
  ]);
};


const handleDeleteItem = (todoItemName) =>{
const newTodoItems = todoItems.filter (item => item.name !== todoItemName);
setTodoItems(newTodoItems);


}


  return ( 
  <center className='todo-container'>
    <AppName/>
    <AddTodo onNewItem= {handleNewItem} />
    {todoItems.length === 0 && <WelcomeMessage ></WelcomeMessage>}
    <TodoItems
      todoItems = {todoItems}
      onDeleteClick={handleDeleteItem}>

    </TodoItems>
 

    
  </center>
  );
}

export default App;
