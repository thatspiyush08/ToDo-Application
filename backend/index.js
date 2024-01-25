const express =require("express");
const { createTodo, updateTodo } = require("./type");
const app=express();
app.use(express.json);

//Post the Todo
app.post("/todo",function(req,res){
    const payload=res.body;
    const parse=createTodo.safeParse(payload);
    if(!parse.success){
        res.status(411).json({
            msg:"you sent the wrong format"
        })
        return;
    }
    //put in mongodb
})

//Get the Todo

app.get("/todo",function(req,res){
    
})


//Put Complition

app.post("/completed",function(req,res){
    const id=re.body;
    const parseid=updateTodo.safeParse(id);
    if (!parseid.success){
        res.status(404).json({
            msg:"id not found!!"
        })
        return;
    }
    //updare in mongodb
})
