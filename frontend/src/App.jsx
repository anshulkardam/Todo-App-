import { CreateTodo } from "./Components/CreateTodo"
import { Todos } from "./Components/Todos"
import { useEffect, useState } from "react"
function App() {

    const [todos, setTodos] = useState([])
useEffect(() => {
  fetch("http://localhost:3000/todos")
  .then(async function(response){
    const sum = await response.json()
    setTodos(sum.alltodos)
  })
},[])
    
    
  return <div>
    <CreateTodo />
    <Todos  todos={todos}></Todos>
  </div >
}
export default App