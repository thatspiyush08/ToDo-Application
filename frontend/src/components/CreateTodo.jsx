



export function CreateTodo(){
    return <div className="newTodo">
        <input type="text" style={{
            margin:10,
            padding:10,
            borderRadius:5
        }} placeholder="Title.." />
        <input type="text" style={{
            margin:10,
            padding:10,
            paddingRight:90 ,
            borderRadius:5
        }} placeholder="Description.." />
        <button className="card" style={{
            margin:10,
            padding:10
        }}>ADD TODO</button>
    </div>
}