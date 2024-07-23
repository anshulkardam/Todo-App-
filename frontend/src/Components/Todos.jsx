export function Todos({todos}){
    
    return <div>
            {todos.map(function(todo){
                return <div key={todo._id}>
                    <h1>{todo.title}</h1>
                    <h4>{todo.description}</h4>
                    <button onClick={() =>{
                        todo.completed = true
                    }}>{todo.completed? "Done!" : "Mark As Done"}</button>
                </div>
            })}
            </div>
       
}