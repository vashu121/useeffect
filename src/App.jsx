import { useEffect, useState } from 'react';
import axios from "axios";

let counter=1;
function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(function(response){
      setTodos(response.data.todos);
    })
    },[]);

  return (
    <div>
    {todos.map(function(todo){
      return <Todo key={counter++} title={todo.title} description={todo.description} />
    })}
    </div>
  )
}

function Todo({title , description}){
  return <div>
   <h1>{title}</h1> 
   <h5>{description}</h5>
  </div>
}

export default App
