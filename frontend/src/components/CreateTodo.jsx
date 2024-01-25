

export function CreateTodo(){
    return <div className="newTodo">
        <input type="text" style={{
            margin:10,
            padding:10
        }} placeholder="title.." />
        <input type="text" style={{
            margin:10,
            padding:10
        }} placeholder="description.." />
        <button className="card" style={{
            margin:10,
            padding:10
        }}>ADD TODO</button>
    </div>
}