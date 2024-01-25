import { useState } from "react";



export function CreateTodo(){

    return <div className="newTodo">
        <input id="title" type="text" style={{
            margin:10,
            padding:10,
            borderRadius:5
        }} placeholder="Title.." />
        <input type="text" id="desc" style={{
            margin:10,
            padding:10,
            paddingRight:90 ,
            borderRadius:5
        }} placeholder="Description.." />
        <button className="card" style={{
            margin:10,
            padding:10
        }} onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:document.getElementById("title").innerHTML,
                    description:document.getElementById("desc").innerHTML
                }),
                headers:{
                    "Content-type":"application/json"
                }
            }).then(async (res)=>{
                const json= await res.json();
                alert("TODO Added");
            })
        }}>ADD TODO</button>
    </div>
}