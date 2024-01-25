/*
todos=[{
    title:title1,
    description:descripton1,
    completed,true/false
}{
    title:title2,...
}]
*/
export function Todos({todos}){
    return <div>
        {
            todos.map(function(todo){
                return <div>
                    <h2>{todo.title}</h2>
                    <h3>{todo.description}</h3>
                    <button>{todo.completed==true?"completed" :"Mark as Completed"}</button>
                </div>
            })
        }

    </div>
}